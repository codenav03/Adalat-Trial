import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { ClistService } from '../core/services/clist.service';
import { Icasel } from '../core/models/common.model';
import { NavbarComponent } from "../units/navbar/navbar.component";

@Component({
    selector: 'app-maininter',
    standalone: true,
    templateUrl: './maininter.component.html',
    styleUrl: './maininter.component.css',
    imports: [RouterLink, RouterModule, CommonModule, NavbarComponent]
})
export class MaininterComponent implements OnInit {
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
      cno: clist.cno,
      assign: clist.assign,
      comp: clist.comp,
    });
  })
  },});
}
}
