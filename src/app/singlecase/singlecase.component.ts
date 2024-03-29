import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from "../units/navbar/navbar.component";

@Component({
    selector: 'app-singlecase',
    standalone: true,
    templateUrl: './singlecase.component.html',
    styleUrl: './singlecase.component.css',
    imports: [RouterLink, NavbarComponent]
})
export class SinglecaseComponent {

}
