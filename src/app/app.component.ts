import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MaininterComponent } from './maininter/maininter.component';
import { NavbarComponent } from './units/navbar/navbar.component';
import { SinglecaseComponent } from './singlecase/singlecase.component';
import { CommonModule } from '@angular/common';
import { PendingComponent } from './pending/pending.component';
import { ChartComponent } from './chart/chart.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { AngularFireModule } from '@angular/fire/compat';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from './search.pipe';
import { LowercaselistComponent } from './lowercaselist/lowercaselist.component';
import { LowerchartComponent } from './lowerchart/lowerchart.component';
import { LowerhomeComponent } from './lowerhome/lowerhome.component';
import { LowermaintinterComponent } from './lowermaintinter/lowermaintinter.component';
import { LowernavComponent } from './lowernav/lowernav.component';
import { LowerpendingComponent } from './lowerpending/lowerpending.component';
import { LowersinglecaseComponent } from './lowersinglecase/lowersinglecase.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MaininterComponent,NavbarComponent,SinglecaseComponent,CommonModule,PendingComponent,ChartComponent,HomeComponent,RegisterComponent,LoginComponent,AngularFireModule,FormsModule,SearchPipe,LowercaselistComponent,LowerchartComponent,LowerhomeComponent,LowermaintinterComponent,LowernavComponent,LowerpendingComponent,LowersinglecaseComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{

  authService =inject(AuthService);
  ngOnInit(): void {
      this.authService.user$.subscribe(user =>{
        if(user){
          this.authService.currentUserSig.set({
            email: user.email!,
            username: user.displayName!,
          });
        }else{
          this.authService.currentUserSig.set(null);
        }
        console.log(this.authService.currentUserSig());
      });
  }

  title = 'courtfront';
}
