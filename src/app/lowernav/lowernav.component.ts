import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

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

  isActiveRoute(route: string): boolean {
    return this.router.url === route;
  }
}
