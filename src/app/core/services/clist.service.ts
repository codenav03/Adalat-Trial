import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { Icasel } from '../models/common.model';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ClistService {

  private dbPath = '/cases';
  caseRef: AngularFireList<any>;
  
  constructor(private db: AngularFireDatabase){
    this.caseRef = db.list(this.dbPath);
    
  }
getAllCases(){
  return this.caseRef;
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
  this.caseRef.update(key,{ assign: 'YES' ,lcourtId: lcourtId,date: date});
}
//need to add flag notseen

uploadCaseFile(key: string,filename: string){
  this.caseRef.update(key,{url: filename});
}

uploadCaseReport(key: string,filename: string){
  this.caseRef.update(key,{report: filename});
}


deleteCase(key: string){
  this.caseRef.remove(key);
}




}
