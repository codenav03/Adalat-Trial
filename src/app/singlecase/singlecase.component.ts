import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from "../units/navbar/navbar.component";
import { Icasel } from '../core/models/common.model';
import { ClistService } from '../core/services/clist.service';
import emailjs from '@emailjs/browser';
@Component({
    selector: 'app-singlecase',
    standalone: true,
    templateUrl: './singlecase.component.html',
    styleUrl: './singlecase.component.css',
    imports: [RouterLink, NavbarComponent]
})
export class SinglecaseComponent {
  clists: Icasel[]=[];
  constructor(private clistsService: ClistService){

  }
  async send(recipientEmail: string) {
    // Assuming you want to send email using the first item from the `clists` array

       emailjs.init('V86Nbmh0pln1M1A2b');
      let response=await emailjs.send("service_cn3r0w7", "template_q7qo6nm", {
        from_name: 'Adalat',
        to_email:recipientEmail,
        message: 'hi',
      }).then(() => {
        console.log('Email sent successfully!');
      }).catch((error) => {
        console.error('Error sending email:', error);
      });

  }
}
