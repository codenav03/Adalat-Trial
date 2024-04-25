import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FileuploadComponent } from '../dataTransfer/fileupload/fileupload.component';
import { NavbarComponent } from '../units/navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Icasel, UserData } from '../core/models/common.model';
import { ClistService } from '../core/services/clist.service';
import emailjs from '@emailjs/browser';
import { LcourtService } from '../core/services/lcourt.service';
import { LowernavComponent } from "../lowernav/lowernav.component";
@Component({
    selector: 'app-lowersinglecase',
    standalone: true,
    templateUrl: './lowersinglecase.component.html',
    styleUrl: './lowersinglecase.component.css',
    imports: [RouterLink, NavbarComponent, FileuploadComponent, CommonModule, ReactiveFormsModule, LowernavComponent]
})
export class LowersinglecaseComponent {
  clists: Icasel[]=[];
  courtlist: UserData[]=[];
  caseId = '';
  myCase: Icasel | null = null; // Initialize myCase

  constructor(
    private clistsService: ClistService,
    private LcourtService: LcourtService,
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
}
