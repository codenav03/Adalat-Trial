import { Component } from '@angular/core';
import { ChartComponent } from '../chart/chart.component';
import { NavbarComponent } from "../units/navbar/navbar.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [ChartComponent, NavbarComponent]
})
export class HomeComponent {

}
