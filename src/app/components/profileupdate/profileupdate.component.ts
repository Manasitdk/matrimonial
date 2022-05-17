import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profileupdate',
  templateUrl: './profileupdate.component.html',
  styleUrls: ['./profileupdate.component.css']
})
export class ProfileupdateComponent implements OnInit {
  formupdate!: FormGroup
 
  // formLogin: any;+

  constructor(private fb: FormBuilder,private router:Router) {
    this.formupdate= this.fb.group({

      city: new FormControl('', [Validators.required]), 
      height: new FormControl('', [Validators.required]), 
      mothertoung: new FormControl('',[Validators.required]), 
      subcommunity: new FormControl('',[Validators.required]), 
      color:new FormControl('',[Validators.required]), 
      currentadd: new FormControl('',[Validators.required]), 
      permanantaddress:new FormControl('',[Validators.required]), 
      sister:new FormControl('',[Validators.required]),  
      brother:new FormControl('',[Validators.required]), 
      describeyourself:new FormControl('',[Validators.required]), 
      photo:new FormControl('',[Validators.required]), 
      adhar:new FormControl('',[Validators.required]), 
      hqualification:new FormControl('',[Validators.required]), 
      degree:new FormControl('',[Validators.required]), 
      workwith:new FormControl('',[Validators.required]), 
      annualincome:new FormControl('',[Validators.required]), 
      age:new FormControl('',[Validators.required]), 
      to:new FormControl('',[Validators.required]), 
      pheight:new FormControl('',[Validators.required]),  
      too:new FormControl('',[Validators.required]), 
      maritalstatus:new FormControl('',[Validators.required]), 
      religion:new FormControl('',[Validators.required]), 
      community:new FormControl('',[Validators.required]), 
      tounge:new FormControl('',[Validators.required]), 
      
    })
   }
 
   todashboard(){
     this.router.navigateByUrl('/dashboard');
     console.log(this.formupdate.value);
   }
  ngOnInit(): void {
  }

}
