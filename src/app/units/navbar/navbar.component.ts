import { Component, inject } from '@angular/core';
import { AuthService } from '../../auth.service';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  authService =inject(AuthService)
  router=inject(Router);
  logout():void{
   this.authService.logout();
   this.router.navigateByUrl('/');
  }

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn(); // Implement this method in your AuthService
  }

  isActiveRoute(route: string): boolean {
    return this.router.url === route;
  }
}


