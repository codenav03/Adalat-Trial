import { Injectable, inject, signal } from "@angular/core";
import { Auth, user } from "@angular/fire/auth";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { Observable, filter, from, map } from "rxjs";
import { UserInterface } from "./user.interface";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { Router } from "@angular/router";
import { AngularFireDatabase } from "@angular/fire/compat/database";
import { UserData } from "./core/models/common.model";
@Injectable
({
  providedIn: 'root',
})
export class AuthService{
  /*constructor(private fireauth :AngularFireAuth, private router :Router){

  }
  login(
    email: string,
    password: string,
  ){
    this.fireauth.signInWithEmailAndPassword(email,password).then( ()=>{
        localStorage.setItem('token','true');
        this.router.navigate(['/home']);
    },err=>{
        alert(err.message);
        this.router.navigate(['/login']);
    })
  }
  register(
    email: string,
    password: string,
  ){
    this.fireauth.createUserWithEmailAndPassword(email,password).then( ()=>{
       alert('Registration Successfull');
        this.router.navigate(['/login']);
    },err=>{
        alert(err.message);
        this.router.navigate(['/register']);
    })
  }
}*/
private isAuthenticated: boolean = false;
  firebaseAuth=inject(Auth);
  user$=user(this.firebaseAuth);
  currentUserSig= signal<UserInterface | null | undefined>(undefined);
  constructor(private db: AngularFireDatabase){}
  register(
    email: string,
    username: string,
    password: string,
  ): Observable<void>{
    const promise= createUserWithEmailAndPassword(
      this.firebaseAuth,
      email,
      password,
    ).then(response => updateProfile(response.user,{displayName: username}),
    );
    return from(promise);
  }
  login(
    email: string,
    password: string,
  ): Observable<void>{
    const promise= signInWithEmailAndPassword(
      this.firebaseAuth,
      email,
      password,
    ).then((data)=>{this.isAuthenticated = true;
      console.log(data.user.email);
      localStorage.setItem("email",data?.user?.email || '');
    });

    return from(promise);

  }
  logout(): Observable<void>{
    const promise =signOut(this.firebaseAuth);
    this.isAuthenticated = false;
    return from(promise);

  }
  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }
  getUserRole(uid: string): Observable<string> {
    console.log({uid})
    return this.db.object<UserData>(`users/${uid}`).valueChanges()
      .pipe(
        filter(userData => !!userData), // Filter out null values
      map(userData => userData!.role)
      );
  }
}

