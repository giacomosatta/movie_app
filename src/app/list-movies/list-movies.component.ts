import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../movie'
import { MoviesService } from '../movies.service';
import { stringify } from 'querystring';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.css']
})
export class ListMoviesComponent implements OnInit {

  movies : Observable<any>;
  selectedMovie : Movie;
  currentMovieDetail : Movie;
  term: string;

  @Input() set searchTerms(value:string){
  this.term = value;
  console.log(this.term)
  this.refreshMovies();
}
  constructor(
    private movieService : MoviesService
  ) { }

  ngOnInit() {
  }

  refreshMovies = () =>{
    this.movieService.getMovies(this.term)
    .subscribe(data => this.movies = data.Search);
  }

  onSelect(movie : Movie):void {
    this.movieService.getMovie(movie.imdbID)
    .subscribe(result => this.selectedMovie = result );

  }


}
