import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
/*  email: string ='';
  password: string ='';
  constructor(private auth:AuthService){ }
  ngOnInit(): void {

  }
  login(){
    if(this.email==''){
      alert('please enter email');
      return;
  }
  if(this.password==''){
    alert('please enter password');
    return;
  }
  this.auth.login(this.email,this.password);
  this.email='';
  this.password='';
}
}*/
  fb=inject(FormBuilder);
  http=inject(HttpClient);
  router=inject(Router);
  authService=inject(AuthService);

  form=this.fb.nonNullable.group({
    email: ['',Validators.required],
    password: ['',Validators.required],
  });

  errorMessage: string | null=null;
  onSubmit(): void{
    const rawForm=this.form.getRawValue()
    this.authService.login(rawForm.email,rawForm.password)
    .subscribe({ next:()=>{
      this.router.navigateByUrl('/home');
    },
    error: (err)=>{
      this.errorMessage=err.code;
    },
    });
  }
}
