import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyticketService } from 'src/app/myticket.service';


@Component({
  selector: 'app-support-ticket',
  templateUrl: './support-ticket.component.html',
  styleUrls: ['./support-ticket.component.css']
})
export class SupportTicketComponent implements OnInit {
  [x: string]: any;
  p: number = 1;
  search: any;
  myticketobj:any
  constructor(private myticketservice: MyticketService, private router:Router) { 
    this.myticketservice.getmyticketdata().subscribe((myticketobj: any) => {
      console.log(myticketobj);
      this.myticketobj = myticketobj;
    });
  }  


  ngOnInit(): void {
  }

}
