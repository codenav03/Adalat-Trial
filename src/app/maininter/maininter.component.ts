import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router,RouterLink, RouterModule } from '@angular/router';
import { ClistService } from '../core/services/clist.service';
import { Icasel } from '../core/models/common.model';
import { NavbarComponent } from "../units/navbar/navbar.component";
import { FormsModule } from '@angular/forms';
import { SearchPipe } from '../search.pipe';
import { SharedDataService } from '../shared-data.service';


@Component({
    selector: 'app-maininter',
    standalone: true,
    templateUrl: './maininter.component.html',
    styleUrl: './maininter.component.css',
    imports: [RouterLink, RouterModule, CommonModule, NavbarComponent,FormsModule,SearchPipe]
})
export class MaininterComponent implements OnInit {
  clists: Icasel[]=[];
  constructor(private clistsService: ClistService,private router: Router){

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
      description: clist.description,
      title: clist.title,
      pmail: '',
      dmail: ''
    });
  });
  },});
}

singleCase(key: string){
  this.router.navigate(['/singlecase/'+ key])
}


searchText='';

}
