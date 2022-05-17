import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup | undefined;
  submitted = false;
  registrationForm = new FormGroup({
    profile: new FormControl(''),
    name: new FormControl(''),
    birthDate: new FormControl(''),
    religion: new FormControl(''),
    community: new FormControl(''),
    mobile: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  });
 
  
  ngOnInit(): void {}


  formRigister!: FormGroup;

  constructor(private fb: FormBuilder, private router:Router) {
    this.formRigister = this.fb.group({
      profilefor: new FormControl('',[Validators.required]),
    firstname: new FormControl('', [
        Validators.required,
        Validators.maxLength(10),
      ]),
      lastname: new FormControl('', [
        Validators.required,
        Validators.maxLength(10),
      ]),
      dob: ['', [Validators.required, Validators.pattern(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/)]],
      gender: new FormControl('', [
        Validators.required,
      ]),
      religion: new FormControl('', [Validators.required]),
      cast: new FormControl('', [Validators.required]),
      number: new FormControl('', [Validators.required]),
      email: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
        
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ])
    });
  }
  
  // email: any = ''
  toProfile(){
    this.router.navigateByUrl('/profileupdate');
    console.log(this.formRigister.value);
  }

}
