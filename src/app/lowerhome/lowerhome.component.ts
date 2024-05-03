import { Component } from '@angular/core';
import { LowernavComponent } from '../lowernav/lowernav.component';
import { LowerchartComponent } from '../lowerchart/lowerchart.component';
import { LowerNewCasesComponent } from '../lower-new-cases/lower-new-cases.component';
import { Icasel } from '../core/models/common.model';
import { ClistService } from '../core/services/clist.service';
import { Router } from '@angular/router';
import { SharedDataService } from '../shared-data.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-lowerhome',
  standalone: true,
  imports: [LowernavComponent,LowerchartComponent,LowerNewCasesComponent],
  templateUrl: './lowerhome.component.html',
  styleUrl: './lowerhome.component.css'
})
export class LowerhomeComponent {
  clists: Icasel[]=[];
  casesWithAssignedNo: Icasel[] = [];
  pendingcasesCount: number=0;
  completedcasesCount: number=0;
  constructor(private clistsService: ClistService,private router: Router,private sharedDataService: SharedDataService,private authService: AuthService){
    if (!this.authService.isLoggedIn()) {
      // If not logged in, navigate to login page
      this.router.navigate(['/']);
    }
  }


  ngOnInit(): void {
  this.getAllCases();


  }
  getAllCases(){
  this.clistsService.getAllCases().snapshotChanges().subscribe({next: (data)=>{
    this.clists=[];
    data.forEach((item)=>{
    let clist=item.payload.toJSON() as Icasel
    const lId = localStorage.getItem("lcourtId");
    console.log("freak penne",lId);

    if(clist.lcourtId==lId){
    this.clists.push({
      key: item.key || '',
      Case_no: clist.Case_no,
      assign: clist.assign,
      comp: clist.comp,
      description: clist.description,
      title: clist.title,
      pmail: '',
      dmail: '',
      lcourtId: '',
      date: clist.date,
      url: '',
      report: '',
      flag: ''
    });
  }
  });
  this.getDetails();
  },});
  }
  public chart: any;
  getDetails() {
  const casesWithAssignedNo = this.clists.filter(clist => clist.comp === 'YES');
  this.sharedDataService.setCasesWithAssignedNo(casesWithAssignedNo);
  const pendingCasesCount = casesWithAssignedNo.length;
  console.log(pendingCasesCount);
  const completedcasesCount = this.clists.length - pendingCasesCount;
  console.log(completedcasesCount);
  this.pendingcasesCount=pendingCasesCount;
  this.completedcasesCount=completedcasesCount;
  }
}
