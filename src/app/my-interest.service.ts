import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { myinterest } from './my-interest';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyInterestService {

  constructor(private http: HttpClient) { }
  getmyinterestdata(): Observable<myinterest> {
    return this.http.get<myinterest>('./assets/my-interest.json');
  }
}
