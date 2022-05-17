import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {
  active = 1;

  constructor(private router: Router) {}
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

 // delete button
  toHome(){
    this.router.navigateByUrl('');
  }
  //cancel button
  toSettings(){
    this.router.navigateByUrl('/viewprofile');
  }


  // constructor() { }

  // ngOnInit(): void {
  // }

}
