import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Icasel } from './core/models/common.model';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  private casesWithAssignedNoSubject: BehaviorSubject<Icasel[]> = new BehaviorSubject<Icasel[]>([]);
  public casesWithAssignedNo$: Observable<Icasel[]> = this.casesWithAssignedNoSubject.asObservable();
  
  constructor() { }

  setCasesWithAssignedNo(cases: Icasel[]) {
    this.casesWithAssignedNoSubject.next(cases);
    console.log('Cases with assigned "no" received:', cases);
  }
}
