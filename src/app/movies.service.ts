import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Movie } from './model/movie'
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from './message.service';
@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private moviesUrl = 'http://www.omdbapi.com/?s=terminator&apikey=103f94fb';
  constructor(
    private http: HttpClient,
    private messageService: MessageService,
  ) { }
  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  //getMovies 
  //prende tutti i film con parametro opzionale del titolo

  //getMovie
  //Prende il film con parametro id
  getMovies(title?: string): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.moviesUrl)
      .pipe(
        tap(_ => this.log('Fetched Movies')),
        catchError(this.handleError<Movie[]>('getMovies', []))
    );
  }



}
