import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { Icasel } from '../models/common.model';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ClistService {

  private dbPath = '/cases';
  private dbPath2 = '/users';

  caseRef: AngularFireList<any>;
  courtRef: AngularFireList<any>;
  
  constructor(private db: AngularFireDatabase){
    this.caseRef = db.list(this.dbPath);
    this.courtRef = db.list(this.dbPath2);
    
  }
  getAllCases(){
    return this.caseRef;
  }

  getAllCourts(){
    return this.courtRef;
  }

getCase(key: string){
  return this.db.object(`${this.dbPath}/${key}`)
}

addCase(expense: Icasel){
  this.caseRef.push(expense);
}

updateCase(key: string, expense: Icasel){
  this.caseRef.update(key,expense);
}

assgCourt(key: string,lcourtId: string,date: string){
  this.caseRef.update(key,{ assign: 'YES' ,lcourtId: lcourtId,date: date,flag:"NOTSEEN"});
}
//need to add flag notseen

seenCase(key: string){
  this.caseRef.update(key,{flag: "SEEN"});
}

uploadCaseFile(key: string,filename: string){
  this.caseRef.update(key,{url: filename});
}

uploadCaseReport(key: string,filename: string){
  this.caseRef.update(key,{report: filename});
}

closeCase(key: string){
  this.caseRef.update(key,{comp: "YES"});
}


deleteCase(key: string){
  this.caseRef.remove(key);
}




}
