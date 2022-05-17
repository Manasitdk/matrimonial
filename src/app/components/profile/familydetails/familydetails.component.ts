import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-familydetails',
  templateUrl: './familydetails.component.html',
  styleUrls: ['./familydetails.component.css']
})
export class FamilydetailsComponent implements OnInit {

  ngOnInit(): void {
  }
  constructor(private router: Router) {}

 
  toEducation(){
    this.router.navigateByUrl('/profile/educationdetails');
  }
  toDescribe(){
    this.router.navigateByUrl('/profile/describeyourself');
  }

}
