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

export const routes: Routes = [
 
  {path: 'maininter',component: MaininterComponent},
  {path: 'singlecase',component: SinglecaseComponent},
  {path:'pending',component:PendingComponent},
  {path: 'register',component:RegisterComponent},
  {path:'home',component:HomeComponent}, 
  {path: 'lowerhome',component: LowerhomeComponent},
  {path:'lowercaselist',component:LowercaselistComponent},
  {path: 'lowerpending',component: LowerpendingComponent},
  {path: 'lowermaininter',component: lowermaininter},
  {path:'',component:LoginComponent}
];
