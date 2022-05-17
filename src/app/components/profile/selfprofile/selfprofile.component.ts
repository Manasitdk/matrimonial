import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-selfprofile',
  templateUrl: './selfprofile.component.html',
  styleUrls: ['./selfprofile.component.css']
})
export class SelfprofileComponent implements OnInit {

 

  ngOnInit(): void {
  }
  constructor(private router: Router) {}

 
  toEducation(){
    this.router.navigateByUrl('profile/educationdetails');
  }

}
