import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { myticket } from './myticket';


@Injectable({
  providedIn: 'root'
})
export class MyticketService {
  [x: string]: any;

  constructor(private http: HttpClient) { }
  getmyticketdata(): Observable<myticket> {
    return this.http.get<myticket>('./assets/myticket.json');
  }

//node api calls for tickets 
//post method
  addTicket(ticketData: any) {
    return this.http.post('http://localhost:3000/api/user/add-ticket', ticketData);
  }

  getAllTickets(){
    return this.http.get("http://localhost:3000/api/user/getAllmembers");
  }
}
