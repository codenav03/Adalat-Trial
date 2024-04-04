import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { Icasel } from '../models/common.model';

@Injectable({
  providedIn: 'root'
})
export class ClistService {

  private dbPath = '/expenses';
  caseRef: AngularFireList<any>;
  constructor(private db: AngularFireDatabase){
    this.caseRef = db.list(this.dbPath);
  }
getAllCases(){
  return this.caseRef;
}

getCase(key: string){
  return this.db.object('${this.dbPath}/${key}')
}

addCase(expense: Icasel){
  this.caseRef.push(expense);
}

updateExpense(key: string, expense: Icasel){
  this.caseRef.push(expense);
}

deleteExpense(key: string){
  this.caseRef.remove(key);
}


}
