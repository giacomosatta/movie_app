import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-from',
  templateUrl: './search-from.component.html',
  styleUrls: ['./search-from.component.css']
})
export class SearchFromComponent implements OnInit {
  searchTerms: string;

  constructor() { }

  ngOnInit() {

  }

  search(term: string): void {
    this.searchTerms = term;
  }

}
