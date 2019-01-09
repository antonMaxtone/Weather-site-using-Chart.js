import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lec-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  public barChartLabels = ['January', 'February', 'March', 'April', 'May', 'June',
   'July', 'August', 'September', 'October', 'November', 'December'];
  public doughnutChartLabels: string [] = ['Summer', 'Winter', 'Autumn', 'Spring'];
  public radarChartLabels: string[] = ['NORD', 'ne', 'EAST', 'se', 'SOUTH', 'sw', 'WEST', 'nw'];


  public barChartType = 'bar';
  public doughnutChartType = 'doughnut';
  public radarChartType = 'radar';


  public barChartLegend = true;

  public barChartData = [
    {data: [-8, -5, 5, 12, 22, 25, 29, 28, 21, 17, 10, 5], label: 'during the day'},
    {data: [-12, -9, -2, 4, 13, 17, 19, 18, 14, 11, 6, -4], label: 'at night'}
  ];
  public doughnutChartData: number [] = [209, 134, 162, 114];
  public radarChartData: any = [
    {data: [10, 5, 12, 6, 9, 13, 8, 7], label: 'Winter'},
    {data: [15, 10, 4, 5, 6, 7, 10, 10], label: 'Summer'},
    {data: [9, 6, 9, 7, 8, 12, 12, 10], label: 'Autumn'},
    {data: [11, 8, 15, 7, 10, 9, 8, 7], label: 'Spring'}
  ];


  public randomize(): void {
    // Only Change 3 values
    const data = [
      Math.round(Math.random() * 100),
      21,
      10,
      (Math.random() * 100),
      -2,
      -4,
      (Math.random() * 100),
      13];
    const clone = JSON.parse(JSON.stringify(this.barChartData));
    clone[0].data = data;
    this.barChartData = clone;
  }

  constructor() { }

  ngOnInit() {}

}
