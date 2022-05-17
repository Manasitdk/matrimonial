import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit {
  active = 1;

  names: any = [
    {
      name: 'Karan Patil',
      id: 'SM2000',
      
    },
    // {
    //   imgurl: 'assets/images/listing/Depesh.jfif',
    //   name: 'Ramona ',
    //   id:'SM15678',
    //   age: '21 yrs',
    //   matrialstatus: 'Never Married',
    // },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
