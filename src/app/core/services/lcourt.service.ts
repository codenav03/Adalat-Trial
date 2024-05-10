import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { UserData,assginList } from '../models/common.model';

@Injectable({
  providedIn: 'root'
})
export class LcourtService {


  private dbPath = '/users';
  private dbpath2 = '/assigned_list';

  courtRef: AngularFireList<any>;
  assgRef: AngularFireList<any>;
  
  constructor(private db: AngularFireDatabase){
    this.courtRef = db.list(this.dbPath);
    this.assgRef = db.list(this.dbpath2);
    
  }
  
  addCourt(court: UserData, customKey: string){
    //this.courtRef.push(court);
    this.db.object(`${this.dbPath}/${customKey}`).set(court);
  }

  addAssgList(aList: assginList){
    this.assgRef.push(aList);
  }

  
  
getAllCourts(){
  return this.courtRef;
}
/*
getCase(key: string){
  return this.db.object(`${this.dbPath}/${key}`)
}
*/

/*
updateCase(key: string, expense: Icasel){
  this.caseRef.update(key,expense);
}

deleteCase(key: string){
  this.caseRef.remove(key);
}*/
}
