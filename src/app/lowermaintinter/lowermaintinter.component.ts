import { Component } from '@angular/core';
import { LowernavComponent } from '../lowernav/lowernav.component';
import { Router } from '@angular/router';
import { ClistService } from '../core/services/clist.service';
import { Icasel } from '../core/models/common.model';
import { CommonModule } from '@angular/common';
import { SearchPipe } from '../search.pipe';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-lowermaintinter',
  standalone: true,
  imports: [LowernavComponent,CommonModule,SearchPipe,FormsModule],
  templateUrl: './lowermaintinter.component.html',
  styleUrl: './lowermaintinter.component.css'
})
export class LowermaintinterComponent {
  clists: Icasel[]=[];

  constructor(private clistsService: ClistService,private router: Router,private authService: AuthService,){
    if (!this.authService.isLoggedIn()) {
      // If not logged in, navigate to login page
      this.router.navigate(['/']);
    }

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
      lcourtId: '',
      date: clist.date,
      url: '',
      report: '',
      flag: clist.flag,
    });
  }
  });
  },});
}

singleCase(key: string){
  this.clistsService.seenCase(key);
  this.router.navigate(['/lowersinglecase/'+ key])
}


searchText='';

}
