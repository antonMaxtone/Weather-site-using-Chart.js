import {Component, OnInit, AfterViewInit} from '@angular/core';

@Component ({
    selector: 'lec-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
    })

export class ListComponent implements OnInit, AfterViewInit {
 public test = 'Some text';
  constructor() {

  }

  ngOnInit() {
    alert('I`m Angular');
  }

  ngAfterViewInit() {
    alert('It`s your first application');
  }
}


