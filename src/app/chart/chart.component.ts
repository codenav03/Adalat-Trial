

import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { Icasel } from '../core/models/common.model';
import { ClistService } from '../core/services/clist.service';
import { Router } from '@angular/router';
import { SharedDataService } from '../shared-data.service';

@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [],
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.css'
})
export class ChartComponent {
clists: Icasel[]=[];
casesWithAssignedNo: Icasel[] = [];


constructor(private clistsService: ClistService,private router: Router,private sharedDataService: SharedDataService){

}


ngOnInit(): void {
this.getAllCases();


}
getAllCases(){
this.clistsService.getAllCases().snapshotChanges().subscribe({next: (data)=>{
  this.clists=[];
  data.forEach((item)=>{
  let clist=item.payload.toJSON() as Icasel
  this.clists.push({
    key: item.key || '',
    Case_no: clist.Case_no,
    assign: clist.assign,
    comp: clist.comp,
    title: '',
    description: '',
    pmail: '',
    dmail: '',
    lcourtId: '',
    date: '',
    url: ''
  });
});
console.log(this.clists);
this.createChart();
},});
}
public chart: any;

createChart() {
const casesWithAssignedNo = this.clists.filter(clist => clist.assign === 'NO');
this.sharedDataService.setCasesWithAssignedNo(casesWithAssignedNo);
console.log("new",casesWithAssignedNo.length);
console.log("hi",casesWithAssignedNo);
const pendingCasesCount = casesWithAssignedNo.length;
console.log(pendingCasesCount);
const assignedCasesCount = this.clists.length - pendingCasesCount;
console.log(assignedCasesCount);
this.chart = new Chart("MyChart", {
  type: 'pie',
  // type: 'doughnut',
  data: {
    labels: [
      'Pending',
      'Assigned'
    ],
    datasets: [{
      label: 'Number of cases',
      data: [ pendingCasesCount, assignedCasesCount],
      backgroundColor: [
        'black',
        'rgb(113, 121, 126)',

      ],
      hoverOffset: 2
    }]
  },
  options: {
    aspectRatio: 3,
    plugins: {
      title: {
        display: true,

        font: {
          size: 24,
          weight: 'bold',
          family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif"
        },
        padding: {
          top: 10,
          bottom: 30
        }
      },
      legend: {
        display: true,
        labels: {
          font: {
            size: 14,
            family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif"
          }
        }
      }
    }
  }
});
}
}
