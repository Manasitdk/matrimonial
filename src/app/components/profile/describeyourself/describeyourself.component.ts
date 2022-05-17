import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-describeyourself',
  templateUrl: './describeyourself.component.html',
  styleUrls: ['./describeyourself.component.css']
})
export class DescribeyourselfComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  toPartner(){
     this.router.navigateByUrl('/profile/partnerpreferences');
  }

}
