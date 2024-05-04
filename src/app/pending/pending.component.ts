
import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from "../units/navbar/navbar.component";




import { MaininterComponent } from '../maininter/maininter.component';
import { Icasel } from '../core/models/common.model';
import { CommonModule } from '@angular/common';
import { SharedDataService } from '../shared-data.service';
import { ClistService } from '../core/services/clist.service';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { FooterComponent } from "../units/footer/footer.component";
import { AuthService } from '../auth.service';

@Component({
    selector: 'app-pending',
    standalone: true,
    templateUrl: './pending.component.html',
    styleUrl: './pending.component.css',
    imports: [NavbarComponent, CommonModule, RouterLink, RouterModule, FooterComponent]
})
export class PendingComponent implements OnInit{


 /* casesWithAssignedNo: Icasel[] = [];

  constructor(private sharedDataService: SharedDataService) { }

  ngOnInit(): void {

    this.sharedDataService.casesWithAssignedNo$.subscribe(cases => {
      console.log('Cases received in PendingComponent:', cases);
      console.log('Subscription block executed');
      this.casesWithAssignedNo = cases;
      console.log(this.casesWithAssignedNo);
    });
  }*/
  clists: Icasel[]=[];
  casesWithAssignedNo: Icasel[] = [];
  constructor(
    private clistsService: ClistService,
    private sharedDataService: SharedDataService,
    private router: Router,
    private authService: AuthService,){
      if (!this.authService.isLoggedIn()) {
        // If not logged in, navigate to login page
        this.router.navigate(['/']);
      }

  }
  ngOnInit(): void {
      this.getAllCases();
      this.sharedDataService.casesWithAssignedNo$.subscribe(cases => {
        console.log('Cases received in PendingComponent:', cases);
        console.log('Subscription block executed');
        this.casesWithAssignedNo = cases;
        console.log(this.casesWithAssignedNo);
      });
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
      title: '',
      description: '',
      pmail: '',
      dmail: '',
      lcourtId: '',
      date: '',
      url: '',
      report: '',
      flag: ''
    });
  });
  console.log(this.clists);
  this.filterCasesWithAssignedNo();
  },});
}
filterCasesWithAssignedNo() {
  const casesWithAssignedNo = this.clists.filter(clist => clist.assign === 'NO');
  this.sharedDataService.setCasesWithAssignedNo(casesWithAssignedNo);
  console.log(casesWithAssignedNo);
}


assignCourt(key:string) {
  this.router.navigate(['/singlecase/' + key])
  }
}


