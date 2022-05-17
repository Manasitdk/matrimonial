import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { search } from './search';

 
  

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  constructor(private http: HttpClient) { }
  getsearch(): Observable<search> {
    return this.http.get<search>('./assets/search.json');

  }
}
