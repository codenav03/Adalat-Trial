import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { ClistService } from '../core/services/clist.service';
import { Icasel } from '../core/models/common.model';
import { NavbarComponent } from "../units/navbar/navbar.component";
import { FormsModule } from '@angular/forms';
import { SearchPipe } from '../search.pipe';



@Component({
    selector: 'app-maininter',
    standalone: true,
    templateUrl: './maininter.component.html',
    styleUrl: './maininter.component.css',
    imports: [RouterLink, RouterModule, CommonModule, NavbarComponent,FormsModule,SearchPipe]
})
export class MaininterComponent implements OnInit {
  clists: Icasel[]=[];

  constructor(private clistsService: ClistService){

  }
  totalCases: number = 0; // Define a property to hold the total cases count


  ngOnInit(): void {
    // Call getTotalCases method when the component initializes
    this.getAllCases();
    this.getTotalCases();

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
  this.totalCases += data.length;
  },});
  
}

getTotalCases(){
  return this.totalCases;
  
}

searchText='';
}
