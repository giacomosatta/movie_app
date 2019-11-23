import { Component, OnInit } from '@angular/core';
import { Movie } from '../model/movie'
import { MoviesService } from '../movies.service';
@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.css']
})
export class ListMoviesComponent implements OnInit {

  movies : Movie[]
  constructor(
    private movieService : MoviesService
  ) { }

  ngOnInit() {
    this.getMovies();
  }
  getMovies(): void {
    this.movieService.getMovies()
    .subscribe(movies => this.movies = movies);
  }



}
