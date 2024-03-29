import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class ClistService {
  private dbpath="/cases";
  casesRef:AngularFireList<any>;
  constructor(private db: AngularFireDatabase) {
    this.casesRef=db.list(this.dbpath);

  }
  getAllCases(){
    return this.casesRef;
  }
  getCase(key :string){
    return this.db.object(`${this.dbpath}/${key}`);
  }
}
