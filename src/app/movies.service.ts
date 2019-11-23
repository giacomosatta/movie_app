import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Movie } from './model/movie'
@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private moviesUrl = 'http://www.omdbapi.com/?s=terminator&apikey=103f94fb';
  constructor(
    private http: HttpClient,
    ) { }

  //getMovies 
  /*prende tutti i film con parametro opzionale del titolo/*

  //getMovie
  /*Prende il film con parametro id
  getMovies (title?:string) : Observable<Movie[]> {
    return this.http.get<Movie[]>(this.moviesUrl)
    .pipe(
      catchError(this.handleError<Movie[]>('getHeroes'),[]))
    )
  }
  */
}
