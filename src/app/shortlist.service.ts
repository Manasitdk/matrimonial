import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { shortlist } from './shortlist.';

@Injectable({
  providedIn: 'root'
})
export class ShortlistService {


  constructor(private http: HttpClient) { }
  getshortlistdata(): Observable<shortlist> {
    return this.http.get<shortlist>('./assets/shortlist.json');
  }
}
