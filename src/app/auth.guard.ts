// auth.guard.ts

import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Observable, map, of, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

 

  constructor(private authService: AuthService, private router: Router) {}
  canActivate(): Observable<boolean> {
    return this.authService.user$.pipe(
      switchMap(user => {
        if (user) {
         
          return this.authService.getUserRole(user.uid);
          
        } else {
          this.router.navigate(['/login']);
          return of(false);
        }
        
      }),
      switchMap(role => {
        if (role === 'admin') {//email:user31@gmail.com password:user31@123
          return of(true);
        } else if (role === 'lower_user') {//email:user32@123 password:user32@123
          this.router.navigate(['/lowerhome']);
        } else if (role === 'higher_user') {//email:user33@gmail.com password:user33@123
          this.router.navigate(['/home']);
        }
        // Add more conditions for other roles
        // If the role is not handled here, it will return true and allow access to the requested route
        return of(true);
        }
      )
    );
  }


}
