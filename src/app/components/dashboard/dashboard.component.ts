import { Component, OnInit } from '@angular/core';
// import { url } from 'inspector';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  names: any = [
    {
      imgurl: 'assets/images/listing/Depesh.jfif',
      name: 'Ramona ',
      id:'SM12345',
      age: '21 yrs',
      matrialstatus: 'Never Married',
    },
    {
      imgurl: 'assets/images/listing/Depesh.jfif',
      name: 'Ramona ',
      id:'SM15678',
      age: '21 yrs',
      matrialstatus: 'Never Married',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
