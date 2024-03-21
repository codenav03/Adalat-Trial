import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { SearchPipe } from '../search.pipe';

@Component({
  selector: 'app-maininter',
  standalone: true,
  imports: [RouterLink,CommonModule,FormsModule,SearchPipe],
  templateUrl: './maininter.component.html',
  styleUrl: './maininter.component.css'
})
export class MaininterComponent {
  data=[
    {id:"C01",Assigned:"Yes",Completed:"No"},
    {id:"C02",Assigned:"Yes",Completed:"No"},
    {id:"C03",Assigned:"Yes",Completed:"No"},
    {id:"C04",Assigned:"Yes",Completed:"No"},
  ]
  searchText= '';
}
