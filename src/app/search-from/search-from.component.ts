import { Component, OnInit, Input } from '@angular/core';
import { MoviesService } from '../movies.service';
import { Movie } from '../movie'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-search-from',
  templateUrl: './search-from.component.html',
  styleUrls: ['./search-from.component.css']
})
export class SearchFromComponent implements OnInit {
  selectedTitle : string;
  movies : Movie[];

  constructor(
    private movieService : MoviesService
  ) { }

  ngOnInit() {


  }

  onClick(term:string){
console.log(term);
    this.getMovies(term);

  }
  getMovies(title: string): void {
    this.movieService.getMovies(title)
      .subscribe(result => this.movies = result.Search)
  }

}
