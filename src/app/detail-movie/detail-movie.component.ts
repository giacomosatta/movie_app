import { moviedetails } from '../model/moviedetails'
import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../model/movie';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-detail-movie',
  templateUrl: './detail-movie.component.html',
  styleUrls: ['./detail-movie.component.css']
})
export class DetailMovieComponent implements OnInit {
  @Input()  moviedetails: moviedetails;
  constructor(
    private movieService: MoviesService,
  ) { }

  ngOnInit(): void{
  }

}
