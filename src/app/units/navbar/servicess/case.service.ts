import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CaseService {
  private totalCases: number = 0;
  constructor() { }
  getTotalCases(): number {
    return this.totalCases;
  }
  incrementTotalCases(): void {
    this.totalCases++;
  }
}
