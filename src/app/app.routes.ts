import { Routes } from '@angular/router';
import { SinglecaseComponent } from './singlecase/singlecase.component';
import { MaininterComponent } from './maininter/maininter.component';
import { PendingComponent } from './pending/pending.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { CaseformComponent } from './caseform/caseform.component';
import { AuthGuard } from './auth.guard';
import { ChartComponent } from './chart/chart.component';

export const routes: Routes = [
  {path: 'home',component: HomeComponent},
  {path: 'maininter',component: MaininterComponent},
  {path: 'singlecase/:id',component: SinglecaseComponent},
  {path: 'pending',component: PendingComponent},
  {path: 'register',component:RegisterComponent,canActivate:[AuthGuard]},
  {path: 'caseform', component:CaseformComponent},
  {path: 'caseform/:id', component:CaseformComponent},
  {path: 'chart', component:ChartComponent},
  {path:'',component:LoginComponent},
];
