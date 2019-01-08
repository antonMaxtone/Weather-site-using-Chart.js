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

  public barChartLabels = [ '1', '2', '3', '4', '5', '6', '7'];
  public barChartType = 'bar';
  public barChartLegend = true;

  public barChartData = [
    {data: [10, 15, 20, 50, 40, 30, 20], label: 'Cherkasy city'},
    {data: [12, 43, 34, 21, 23, 12, 34], label: 'Kiev'}
  ];

  // public chartHovered(e: any): void {
  //   console.log(e);
  // }

  constructor() { }

  ngOnInit() {}

}
