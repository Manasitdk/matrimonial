import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 names: any = [
    { name: "Priya Hatwar", age: "21", education: " B. Tech CSE from VIT, Pune , Working as Information Security Professional at Fiserv, Pune , Majalgaon " },
    { name: "Priya Hatwar", age: "21", education: " B. Tech CSE from VIT, Pune , Working as Information Security Professional at Fiserv, Pune , Majalgaon " },
    { name: "Priya Hatwar", age: "21", education: " B. Tech CSE from VIT, Pune , Working as Information Security Professional at Fiserv, Pune , Majalgaon " },
    { name: "Priya Hatwar", age: "21", education: " B. Tech CSE from VIT, Pune , Working as Information Security Professional at Fiserv, Pune , Majalgaon " },
    { name: "Priya Hatwar", age: "21", education: " B. Tech CSE from VIT, Pune , Working as Information Security Professional at Fiserv, Pune , Majalgaon " },
    { name: "Priya Hatwar", age: "21", education: " B. Tech CSE from VIT, Pune , Working as Information Security Professional at Fiserv, Pune , Majalgaon " },
    { name: "Priya Hatwar", age: "21", education: " B. Tech CSE from VIT, Pune , Working as Information Security Professional at Fiserv, Pune , Majalgaon " },
    { name: "Priya Hatwar", age: "21", education: " B. Tech CSE from VIT, Pune , Working as Information Security Professional at Fiserv, Pune , Majalgaon " },
    
     ]

  constructor() { }

  ngOnInit(): void {
  }

}
