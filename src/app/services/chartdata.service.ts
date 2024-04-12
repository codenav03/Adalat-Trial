import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChartdataService {

  private chartDataSubject = new BehaviorSubject<any>(null);
  chartData$ = this.chartDataSubject.asObservable();

  constructor() {}

  updateChartData(data: any) {
    this.chartDataSubject.next(data);
  }

}
