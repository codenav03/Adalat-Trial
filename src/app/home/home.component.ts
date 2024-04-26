import { Component } from '@angular/core';
import { ChartComponent } from '../chart/chart.component';
import { NavbarComponent } from "../units/navbar/navbar.component";
import { Icasel } from '../core/models/common.model';
import { ClistService } from '../core/services/clist.service';
import { Router } from '@angular/router';
import { SharedDataService } from '../shared-data.service';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [ChartComponent, NavbarComponent]
})
export class HomeComponent {
  clists: Icasel[]=[];
casesWithAssignedNo: Icasel[] = [];
pendingcasesCount: number=0;
assignedcasesCount: number=0;

constructor(private clistsService: ClistService,private router: Router,private sharedDataService: SharedDataService){

}


ngOnInit(): void {
this.getAllCases();


}
getAllCases(){
this.clistsService.getAllCases().snapshotChanges().subscribe({next: (data)=>{
  this.clists=[];
  data.forEach((item)=>{
  let clist=item.payload.toJSON() as Icasel
  this.clists.push({
    key: item.key || '',
    Case_no: clist.Case_no,
    assign: clist.assign,
    comp: clist.comp,
    title: '',
    description: '',
    pmail: '',
    dmail: '',
    lcourtId: '',
    date: '',
    url: '',
    report: '',
    flag: ''
  });
});
console.log(this.clists);
this.getDetails();
},});
}
public chart: any;

getDetails() {
const casesWithAssignedNo = this.clists.filter(clist => clist.assign === 'NO');
this.sharedDataService.setCasesWithAssignedNo(casesWithAssignedNo);
console.log("new",casesWithAssignedNo.length);
console.log("hi",casesWithAssignedNo);
const pendingCasesCount = casesWithAssignedNo.length;
console.log(pendingCasesCount);
this.pendingcasesCount=pendingCasesCount;
const assignedCasesCount = this.clists.length - pendingCasesCount;
console.log(assignedCasesCount);
this.assignedcasesCount=assignedCasesCount;
}
}
