import { Component } from '@angular/core';
import { LowernavComponent } from '../lowernav/lowernav.component';
import { ClistService } from '../core/services/clist.service';
import { Icasel } from '../core/models/common.model';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FooterComponent } from "../units/footer/footer.component";
import { AuthService } from '../auth.service';

@Component({
    selector: 'app-lowerpending',
    standalone: true,
    templateUrl: './lowerpending.component.html',
    styleUrl: './lowerpending.component.css',
    imports: [LowernavComponent, CommonModule, FooterComponent]
})
export class LowerpendingComponent {

  clists: Icasel[]=[];
  constructor(
    private clistsService: ClistService,
    private router: Router,
    private authService: AuthService,
  ){
    

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

    if(clist.lcourtId==lId && clist.comp=="NO"){
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
        date: '',
        url: '',
        report: '',
        flag: ''
      });
    }

    });
    },});
  }

  singleCase(key:string) {
    this.router.navigate(['/lowersinglecase/' + key])
    }

}
