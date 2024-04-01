import { Component, inject } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lowernav',
  standalone: true,
  imports: [],
  templateUrl: './lowernav.component.html',
  styleUrl: './lowernav.component.css'
})
export class LowernavComponent {
  authService =inject(AuthService)
  router=inject(Router);
  logout():void{
   this.authService.logout();
   this.router.navigateByUrl('/');
  }

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn(); // Implement this method in your AuthService
  }
}