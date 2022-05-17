import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {
  editProfile!: FormGroup;
  constructor(private fb: FormBuilder) {
    this.editProfile = this.fb.group({
      personalDetails: this.fb.group({
        profileFor: new FormControl('', Validators.required),
        firstName: new FormControl('', Validators.required),
        lastName: new FormControl('', Validators.required),
        dateOfBirth: new FormControl('', Validators.required),
        gender: this.fb.group({
          female: new FormControl('', Validators.required),
          male: new FormControl('', Validators.required),
          other: new FormControl('', Validators.required),
        }),
        pReligion: new FormControl('', Validators.required),
        caste: new FormControl('', Validators.required),
        mobileNo: new FormControl('', Validators.required),
        email: new FormControl('', Validators.required),
        password: new FormControl('', Validators.required)
      }),
      basicDetails: this.fb.group({
        city: new FormControl('', Validators.required),
        height: new FormControl('', Validators.required),
        skinColor: new FormControl('', Validators.required),
        motherTounge: new FormControl('', Validators.required),
        subCommunity: new FormControl('', Validators.required),
        currentAddress: new FormControl('', [
          Validators.required,
          Validators.maxLength(70),
        ]),
        pAddress: new FormControl('', [
          Validators.required,
          Validators.maxLength(70),
        ]),
      }),

      educationalDetails: this.fb.group({
        highestQulaification: new FormControl('', Validators.required),
        degree: new FormControl('', Validators.required),
        workWith: new FormControl('', Validators.required),
        annualIncome: new FormControl('', Validators.required),
      }),

      partnerDetails: this.fb.group({
        ageFrom: new FormControl('', Validators.required),
        ageTo: new FormControl('', Validators.required),
        heightFrom: new FormControl('', Validators.required),
        heightTo: new FormControl('', Validators.required),
        maritalStatus: new FormControl('', Validators.required),
        religion: new FormControl('', Validators.required),
        pSubCommunity: new FormControl('', Validators.required),
        pMotherTounge: new FormControl('', Validators.required),
      }),

      familyDetails: this.fb.group({
        familyType: new FormControl('', Validators.required),
        fatherOccupation: new FormControl('', Validators.required),
        motherOccupation: new FormControl('', Validators.required),
        sisters: new FormControl('', Validators.required),
        brothers: new FormControl('', Validators.required),
      }),

      describeYourself: this.fb.group({
        selfDescription: new FormControl('', Validators.required),
      })
    })
  }
  ngOnInit(): void { }

  member: any = {
    profileFor: 'Self',
    firstName: 'Lata',
    lastName: 'Rayatuwar',
    dateOfBirth: '25/10/1998',
    gender: 'female',
    pReligion: 'Hindu',
    pCaste: 'Mannervarlu',
    mobileNo: 9730691848,
    email: 'swatirayatuwar@gmail.com',
    password: '12345',
    city: 'Nanded',
    height: '5.5ft',
    skinColor: 'Fair',
    language: 'Marathi',
    subCommunity: 'Mannervarlu',
    currentAdress: 'shivaji Nagar Nanded',
    permanentAddress: 'wadi BK. Nanded',
    highestQualification: 'Graduate',
    degree: 'BE/B.tech',
    work: 'Goverment Sector',
    annualIncome: '5-7 lakh',
    age: { from: 24, to: 27 },
    dHeight: { from: '5.5 ft', to: '5.8 ft' },
    maritalStatus: 'Never Married',
    religion: 'Hindu',
    DsubCommunity: 'Mannervarlu',
    motherTounge: 'Marathi',
    familyType: 'Joint family',
    fatherOccupation: 'Goverment Servant',
    motherOccupation: 'Other',
    sisters: 2,
    brothers: 1,
    description:
      'I am a simple and practical person with a positive attitude. My beliefs are both modern and traditional. I believe we need to progress and evolve as a society but not lose our traditional moral values.',
  };

  profileEdit() {
    console.log(this.editProfile.value);

  }
}
