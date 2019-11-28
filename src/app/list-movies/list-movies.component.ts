import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie'
import { MoviesService } from '../movies.service';
import { stringify } from 'querystring';

@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.css']
})
export class ListMoviesComponent implements OnInit {

  movies : Movie[];
  selectedMovie : Movie;
  currentMovieDetail : Movie;

  constructor(
    private movieService : MoviesService
  ) { }

  ngOnInit() {
    this.getMovies();
  }

  getMovies(): void {
    this.movieService.getMovies()
    .subscribe(result => this.movies = result.Search);
  }


  // Un metodo al click
  // Prendo l' imdbID del selectedMovie
  // Chiamo il servizio .getMovie(imdbID) il risultato va in currentMovieDetail
  // CurrentMovieDetail è il parametro di input del componente MovieDetail
  onSelect(movie : Movie):void {
    this.selectedMovie =  movie;
    console.log(movie.imdbID);
    this.movieService.getMovie(movie.imdbID);
    console.log(this.selectedMovie)

  }


}
