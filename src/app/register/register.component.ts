import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { CommonModule } from '@angular/common';
import { LcourtService } from '../core/services/lcourt.service';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {


  http=inject(HttpClient);
  authService=inject(AuthService);
  router=inject(Router);
  courtForm !: FormGroup;
  roles = ['higher_user', 'lower_user'];
  uid: string = '';


  constructor(
    private fb: FormBuilder,
    private LcourtService: LcourtService,
  ){
  this.courtForm=this.fb.nonNullable.group({
    username: ['',Validators.required],
    email: ['',Validators.required],
    password: ['',Validators.required],
    role: ['',Validators.required],
  });
}
  errorMessage: string | null=null;



  onSubmit(): void{ console.log('called');
    const rawForm=this.courtForm.getRawValue();

    this.authService.register(rawForm.email,rawForm.username,rawForm.password,rawForm.role).subscribe({ next:()=>{

      this.router.navigateByUrl('/');
    },
    error: (err)=>{
      this.errorMessage=err.code;
    },

    });
   /* this.uid = this.authService.getUid();
    console.log("uid register inside:",this.uid);
    //this.LcourtService.addCourt(this.courtForm.value,"88888");
    console.log('court details send');*/
  }

}
