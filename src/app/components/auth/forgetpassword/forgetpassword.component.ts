import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent implements OnInit {
  formForgetpassword: any;


  constructor(private fb:FormBuilder,private router:Router) {
    this.formForgetpassword = this.fb.group({
      
     
      email: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
      ]),
      
    });
   }
   tologin(){
    this.router.navigateByUrl('/login');
    console.log(this.formForgetpassword.value);
  }

  ngOnInit(): void {
  }

}
