import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from "../units/navbar/navbar.component";
import { FileuploadComponent } from '../dataTransfer/fileupload/fileupload.component';

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
    clists: Icasel[]=[];
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
  }
}
