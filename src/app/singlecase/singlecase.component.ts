import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NavbarComponent } from "../units/navbar/navbar.component";
import { FileuploadComponent } from '../dataTransfer/fileupload/fileupload.component';
import emailjs from '@emailjs/browser';
import { CommonModule } from '@angular/common';
import { ClistService } from '../core/services/clist.service';
import { Icasel } from '../core/models/common.model';


@Component({
    selector: 'app-singlecase',
    standalone: true,
    templateUrl: './singlecase.component.html',
    styleUrl: './singlecase.component.css',
    imports: [RouterLink, NavbarComponent,FileuploadComponent,CommonModule]
})
export class SinglecaseComponent {
   /* clists: Icasel[]=[];
    constructor(private clistsService: ClistService){

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
      });
    })
    },});
  }*/
  caseNo: string;
  dmailid: string;
  constructor(private route: ActivatedRoute) {
    this.caseNo='';
    this.dmailid='';
   }

  ngOnInit(): void {
    // Retrieve Case_no from route parameters
    this.route.params.subscribe(params => {
      this.caseNo = params['caseNo'];
      this.dmailid=params['dmailid'];
    });
  }
  async send(){
emailjs.init('V86Nbmh0pln1M1A2b');
let response=await emailjs.send("service_cn3r0w7","template_q7qo6nm",{
from_name: "Adalat",
to_name: this.caseNo,
message: "your case have been assigned",
to_email: this.dmailid,
});
alert("mail has been sent");

  }
}

