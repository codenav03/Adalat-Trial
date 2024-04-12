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

updateAssg(key: string){
  this.caseRef.update(key,{ assign: 'YES' });
}

deleteCase(key: string){
  this.caseRef.remove(key);
}




}
