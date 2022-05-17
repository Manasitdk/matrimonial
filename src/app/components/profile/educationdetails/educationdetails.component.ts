import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-educationdetails',
  templateUrl: './educationdetails.component.html',
  styleUrls: ['./educationdetails.component.css']
})
export class EducationdetailsComponent implements OnInit {

  ngOnInit(): void {
  }
  constructor(private router: Router) {}

 
  toSelf(){
    this.router.navigateByUrl('/profile');
  }
  toFamily(){
    this.router.navigateByUrl('/profile/familydetails');
  }

}
