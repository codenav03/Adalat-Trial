import { Component } from '@angular/core';
import { LowernavComponent } from '../lowernav/lowernav.component';

@Component({
  selector: 'app-lowercaselist',
  standalone: true,
  imports: [LowernavComponent],
  templateUrl: './lowercaselist.component.html',
  styleUrl: './lowercaselist.component.css'
})
export class LowercaselistComponent {

}
