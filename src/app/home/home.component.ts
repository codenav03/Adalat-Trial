import { Component, OnInit } from '@angular/core';
import { ChartComponent } from '../chart/chart.component';
import { NavbarComponent } from "../units/navbar/navbar.component";
import { ChartdataService } from '../services/chartdata.service';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [ChartComponent, NavbarComponent]
})
export class HomeComponent{

}

