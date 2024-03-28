import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  /*email: string ='';
  password: string ='';
  constructor(private auth:AuthService){ }
  ngOnInit(): void {

  }
  register(){
    if(this.email==''){
      alert('please enter email');
      return;
  }
  if(this.password==''){
    alert('please enter password');
    return;
  }
  this.auth.register(this.email,this.password);
  this.email='';
  this.password='';
}
}*/
  fb=inject(FormBuilder);
  http=inject(HttpClient);
  authService=inject(AuthService);
  router=inject(Router);

  form=this.fb.nonNullable.group({
    username: ['',Validators.required],
    email: ['',Validators.required],
    password: ['',Validators.required],
  });
  errorMessage: string | null=null;
  onSubmit(): void{
    const rawForm=this.form.getRawValue();
    this.authService.register(rawForm.email,rawForm.username,rawForm.password).subscribe({ next:()=>{
      this.router.navigateByUrl('/home');
    },
    error: (err)=>{
      this.errorMessage=err.code;
    },
    });
  }
}
