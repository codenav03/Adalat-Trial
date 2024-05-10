import { Component, inject } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminnav',
  standalone: true,
  imports: [],
  templateUrl: './adminnav.component.html',
  styleUrl: './adminnav.component.css'
})
export class AdminnavComponent {
  authService =inject(AuthService)
  router=inject(Router);
  logout():void{
   this.authService.logout();
   this.router.navigateByUrl('/');
}
}