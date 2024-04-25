import { Component } from '@angular/core';
import { ClistService } from '../core/services/clist.service';
import { Icasel } from '../core/models/common.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lower-new-cases',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lower-new-cases.component.html',
  styleUrl: './lower-new-cases.component.css'
})
export class LowerNewCasesComponent {


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
    const lId = localStorage.getItem("lcourtId");
    console.log("freak penne",lId);

    if(clist.lcourtId==lId && clist.flag=='NOTSEEN'){
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
  },});
}

seencase(key: string){
  this.clistsService.seenCase(key);
}



}
