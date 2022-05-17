import { Component, OnInit } from '@angular/core';
import {
  EmailValidator,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap/modal/modal.module';

// import{FormGroup,FormControl, Validators}from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  formLogin!: FormGroup;

  constructor(private fb: FormBuilder, private router:Router) {
    this.formLogin = this.fb.group({
      
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
      ]),
      checkbox: new FormControl('', [
        Validators.required,
      ]),
    });
  }
  
  // email: any = ''
  todashboard(){
    this.router.navigateByUrl('/dashboard');
    console.log(this.formLogin.value);
  }
 
 ngOnInit(): void {}

}


