import { Component } from '@angular/core';
import { NavbarComponent } from '../units/navbar/navbar.component';
import { ClistService } from '../core/services/clist.service';
import { UserData } from '../core/models/common.model';
import { CommonModule } from '@angular/common';
import { SearchPipe } from '../search.pipe';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courtlist',
  standalone: true,
  imports: [NavbarComponent,CommonModule,SearchPipe,FormsModule],
  templateUrl: './courtlist.component.html',
  styleUrl: './courtlist.component.css'
})
export class CourtlistComponent {
  courtLists: UserData[]=[];
  searchText:string = '';


  constructor(private clistsService: ClistService,private authService: AuthService,private router: Router){
   

  }

  ngOnInit(): void {
    this.getAllCourts();

    }
  getAllCourts(){



    this.clistsService.getAllCourts().snapshotChanges().subscribe({next: (data)=>{
      this.courtLists=[];
      data.forEach((item)=>{
      let courtList=item.payload.toJSON() as UserData
      if(courtList.role=="lower_user"){
      this.courtLists.push({
          key: item.key || '',
          email: '',
          role: '',
          username: courtList.username,
      });
    }
    });
    console.log(this.courtLists);
    },});
    }
}
