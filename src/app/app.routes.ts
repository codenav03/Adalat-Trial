import { Routes } from '@angular/router';
import { SinglecaseComponent } from './singlecase/singlecase.component';
import { MaininterComponent } from './maininter/maininter.component';
import { PendingComponent } from './pending/pending.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

import { LowerhomeComponent } from './lowerhome/lowerhome.component';
import { LowernavComponent } from './lowernav/lowernav.component';
import { LowerpendingComponent } from './lowerpending/lowerpending.component';
import { LowercaselistComponent } from './lowercaselist/lowercaselist.component';
import { lowermaininter } from './lowermaininter/lowermaininter.component';

import { CaseformComponent } from './caseform/caseform.component';
import { AuthGuard } from './auth.guard';


export const routes: Routes = [

  {path: 'maininter',component: MaininterComponent},

  {path:'home',component:HomeComponent},
  {path: 'lowerhome',component: LowerhomeComponent},
  {path:'lowercaselist',component:LowercaselistComponent},
  {path: 'lowerpending',component: LowerpendingComponent},
  {path: 'lowermaininter',component: lowermaininter},
  {path:'lower_home',component:LowerhomeComponent},

  {path: 'singlecase/:caseNo/:dmailid',component: SinglecaseComponent},
  {path: 'pending',component: PendingComponent},
  {path: 'register',component:RegisterComponent,canActivate:[AuthGuard]},
  {path: 'caseform', component:CaseformComponent},
  {path:'',component:LoginComponent},

];
