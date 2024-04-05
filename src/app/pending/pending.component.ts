import { Component } from '@angular/core';
import { NavbarComponent } from "../units/navbar/navbar.component";

@Component({
    selector: 'app-pending',
    standalone: true,
    templateUrl: './pending.component.html',
    styleUrl: './pending.component.css',
    imports: [NavbarComponent]
})
export class PendingComponent {

}
