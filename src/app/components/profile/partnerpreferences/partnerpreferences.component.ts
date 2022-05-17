import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-partnerpreferences',
  templateUrl: './partnerpreferences.component.html',
  styleUrls: ['./partnerpreferences.component.css']
})
export class PartnerpreferencesComponent implements OnInit {


  ngOnInit(): void {
  }
  constructor(private router: Router) {}

 
  toFamily(){
    this.router.navigateByUrl('/profile/familydetails');
  }
  toListing(){
    this.router.navigateByUrl('/listing');
  }


}
