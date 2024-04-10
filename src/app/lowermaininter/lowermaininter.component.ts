import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { LowernavComponent } from '../lowernav/lowernav.component';
import { Icasel } from '../core/models/common.model';
import { ClistService } from '../core/services/clist.service';

@Component({
  selector: 'app-lowermaininter',
  standalone: true,
  imports: [RouterLink,RouterModule,CommonModule,LowernavComponent],
  templateUrl: './lowermaininter.component.html',
  styleUrl: './lowermaininter.component.css'
})
export class lowermaininter implements OnInit {
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
      dmail_id:clist.dmail_id,
    });
  })
  },});
}
}
