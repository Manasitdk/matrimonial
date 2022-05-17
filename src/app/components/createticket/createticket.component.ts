import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MyticketService } from 'src/app/myticket.service';

@Component({
  selector: 'app-createticket',
  templateUrl: './createticket.component.html',
  styleUrls: ['./createticket.component.css']
})
export class CreateticketComponent implements OnInit {
ticketForm!:FormGroup;
  constructor(private myticket: MyticketService,private router :Router) 
  { }

  ngOnInit(): void {
  }

  addTicket(){
    console.log(this. ticketForm.value);
    //http api call
    
    this.myticket.
    addTicket(this.ticketForm.value).subscribe((data:any)=>{
      console.log(data);
      if(data['sucess']){
        alert('ticket added');
        this.router.navigateByUrl("/components/support-ticket");
      } else{
        alert("Error , pls try again");
      }
      
    })
    
  }
  submitTicket(){
    this.router.navigateByUrl('./components/support-ticket')
  }
}
