import { Component } from '@angular/core';
import { LowernavComponent } from '../lowernav/lowernav.component';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lowercaselist',
  standalone: true,
  imports: [LowernavComponent],
  templateUrl: './lowercaselist.component.html',
  styleUrl: './lowercaselist.component.css'
})
export class LowercaselistComponent {
  constructor(private authService: AuthService, private router: Router) {
 
  }

}
