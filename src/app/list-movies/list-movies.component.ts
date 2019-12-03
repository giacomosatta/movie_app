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

  selectedMovie: Movie;
  currentMovieDetail: Movie;

  @Input() movieslist: Movie[];

  constructor(
    private movieService: MoviesService
  ) { }

  ngOnInit() {
  }

  onSelect(movie: Movie): void {
    this.movieService.getMovie(movie.imdbID)
      .subscribe(result => this.selectedMovie = result);

  }




}
