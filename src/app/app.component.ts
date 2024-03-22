import { Component } from '@angular/core';
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

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MaininterComponent,NavbarComponent,SinglecaseComponent,CommonModule,PendingComponent,ChartComponent,HomeComponent,RegisterComponent,LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'courtfront';
}
