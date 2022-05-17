import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-helpdesk',
  templateUrl: './helpdesk.component.html',
  styleUrls: ['./helpdesk.component.css']
})
export class HelpdeskComponent implements OnInit {
  formhelpdesk!: FormGroup;
 
  constructor(private fb: FormBuilder, private router:Router) { 
    this.formhelpdesk = this.fb.group({
      
      query: new FormControl('', [ ]), });
   }

  tothamkyou() {
    this.router.navigateByUrl('/thamkyou');
    console.log(this.formhelpdesk.value);
  }

  ngOnInit(): void {
  }


}