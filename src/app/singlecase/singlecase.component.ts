import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { NavbarComponent } from "../units/navbar/navbar.component";
import { FileuploadComponent } from '../dataTransfer/fileupload/fileupload.component';

import { CommonModule } from '@angular/common';
import { ClistService } from '../core/services/clist.service';
import { Icasel } from '../core/models/common.model';
import { ReactiveFormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
    selector: 'app-singlecase',
    standalone: true,
    templateUrl: './singlecase.component.html',
    styleUrl: './singlecase.component.css',
    imports: [RouterLink, NavbarComponent,FileuploadComponent,CommonModule,ReactiveFormsModule]
})
export class SinglecaseComponent {
    clists: Icasel[]=[];
    caseId = '';
    myCase: Icasel | null = null; // Initialize myCase
    
    constructor(
      private clistsService: ClistService,
      private activatedRoute: ActivatedRoute,
      private router: Router,
    ){

    }
    ngOnInit(): void {
      this.activatedRoute.params.subscribe({
        next:(params) => {
          this.caseId = params['id'];
          this.getExpense(this.caseId);
        },
      });
    }
    getExpense(key: string){
      this.clistsService.getCase(key).snapshotChanges().subscribe({
        next:(data)=>{
          let myCase =data.payload.toJSON() as Icasel;
          if(myCase){
          console.log('ID:', myCase.description);
          this.myCase = myCase;
          console.log('My Case:', this.myCase);
          console.log("key",key);
          }
          else{
            console.log("mycase null error!");
          }
        },
      });
    }

    editCase(){
      this.router.navigate(['/caseform/' + this.caseId])
    }
  
    removeCase(){
      if(window.confirm('are you sure?')){
      this.clistsService.deleteCase(this.caseId);
      this.router.navigate(['/maininter']);
      console.log("key3",this.caseId);
    }
  }

  assign(){
    this.send(this.myCase?.dmail || '');
    this.send(this.myCase?.pmail || '');
  }

  async send(mailid: string){
    emailjs.init('V86Nbmh0pln1M1A2b');
    let response=await emailjs.send("service_cn3r0w7","template_q7qo6nm",{
    from_name: "Adalat",
    to_name: this.myCase?.Case_no,
    message: "your case have been assigned",
    to_email: mailid,
    });
    alert("mail has been sent");
    
      }
}
