import { Component } from '@angular/core';
import { LowernavComponent } from '../lowernav/lowernav.component';
import { Router } from '@angular/router';
import { ClistService } from '../core/services/clist.service';
import { Icasel } from '../core/models/common.model';
import { CommonModule } from '@angular/common';
import { SearchPipe } from '../search.pipe';

@Component({
  selector: 'app-lowermaintinter',
  standalone: true,
  imports: [LowernavComponent,CommonModule,SearchPipe],
  templateUrl: './lowermaintinter.component.html',
  styleUrl: './lowermaintinter.component.css'
})
export class LowermaintinterComponent {
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
    const lId = localStorage.getItem("lcourtId");
    console.log("freak penne",lId);
    
    if(clist.lcourtId==lId){
    this.clists.push({
      key: item.key || '',
      Case_no: clist.Case_no,
      assign: clist.assign,
      comp: clist.comp,
      description: clist.description,
      title: clist.title,
      pmail: '',
      dmail: '',
      lcourtId: ''
    });
  }
  });
  },});
}

singleCase(key: string){
  this.router.navigate(['/singlecase/'+ key])
}


searchText='';

}
