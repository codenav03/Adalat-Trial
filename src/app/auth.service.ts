import { Injectable, inject, signal } from "@angular/core";
import { Auth, user } from "@angular/fire/auth";
import { User, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { Observable, filter, from, map } from "rxjs";
import { UserInterface } from "./user.interface";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { Router } from "@angular/router";
import { AngularFireDatabase } from "@angular/fire/compat/database";
import { UserData } from "./core/models/common.model";
import { LcourtService } from './core/services/lcourt.service';



@Injectable
({
  providedIn: 'root',
})
export class AuthService{

  uid: string='';


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
private currentUser: User | null = null;
  firebaseAuth=inject(Auth);
  user$=user(this.firebaseAuth);
  currentUserSig= signal<UserInterface | null | undefined>(undefined);
  constructor(
    private db: AngularFireDatabase,
    private LcourtService: LcourtService,
  ){ this.isAuthenticated = !!localStorage.getItem('authToken');
  // Subscribe to auth state changes
  this.firebaseAuth.onAuthStateChanged(user => {
    this.isAuthenticated = !!user;
    this.currentUser = user;
  });}



  register(
    email: string,
    username: string,
    password: string,
    role: string,
  ): Observable<void>{
    const promise= createUserWithEmailAndPassword(
      this.firebaseAuth,
      email,
      password,
    ).then(response => updateProfile(response.user,{displayName: username}).then(()=> {this.uid = response.user.uid,this.LcourtService.addCourt(data,this.uid)})
    );

    const data = {
      // Your data fields here
      email : email,
      username : username,
      role: role,

    };


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
      this.currentUser = data.user;
      localStorage.setItem('authToken', 'true');
      console.log("freak penne",data.user.uid);
      console.log("User logged in. isAuthenticated:", this.isAuthenticated);
      localStorage.setItem("lcourtId",data.user.uid);
      //console.log("edi penne",localStorage.getItem("lcourtId") || '');
    });
    return from(promise);

  }
  logout(): Observable<void>{
    const promise =signOut(this.firebaseAuth);
    this.isAuthenticated = false;
    this.currentUser = null;
          localStorage.removeItem('authToken');
    return from(promise);

  }
  isLoggedIn(): boolean {
     console.log("isLoggedIn called. isAuthenticated:", this.isAuthenticated);
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

