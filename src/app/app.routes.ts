import { Routes } from '@angular/router';
import { SinglecaseComponent } from './singlecase/singlecase.component';
import { MaininterComponent } from './maininter/maininter.component';
import { PendingComponent } from './pending/pending.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { CaseformComponent } from './caseform/caseform.component';
import { AuthGuard } from './auth.guard';
import { LowercaselistComponent } from './lowercaselist/lowercaselist.component';
import { LowerchartComponent } from './lowerchart/lowerchart.component';
import { LowerhomeComponent } from './lowerhome/lowerhome.component';
import { LowermaintinterComponent } from './lowermaintinter/lowermaintinter.component';
import { LowerpendingComponent } from './lowerpending/lowerpending.component';
import { LowersinglecaseComponent } from './lowersinglecase/lowersinglecase.component';

export const routes: Routes = [
  {path: 'home',component: HomeComponent},
  {path: 'maininter',component: MaininterComponent},
  {path: 'singlecase/:id',component: SinglecaseComponent},
  {path: 'pending',component: PendingComponent},
  {path: 'register',component:RegisterComponent,canActivate:[AuthGuard]},
  {path: 'caseform', component:CaseformComponent},
  {path: 'caseform/:id', component:CaseformComponent},
  {path:'',component:LoginComponent},
  {path:'lowercaselist',component:LowercaselistComponent},
  {path:'lowerchart',component:LowerchartComponent},
  {path:'lowerhome',component:LowerhomeComponent},
  {path:'lowermaininter',component:LowermaintinterComponent},
  {path:'lowerpending',component:LowerpendingComponent},
  {path:'lowersinglecase/:id',component:LowersinglecaseComponent},

];
