import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  collection:any;
  p: number = 1;
 

  search: any;
  searchobj: any;
 
  constructor(private searchservice: SearchService) { 
    this.searchservice.getsearch().subscribe((searchobj: any) => {
      console.log(searchobj);
      this.searchobj = searchobj;
    });
  } 

  ngOnInit(): void {
  }

}
