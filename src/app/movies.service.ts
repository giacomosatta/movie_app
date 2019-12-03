import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Movie } from './movie'
import { catchError, tap } from 'rxjs/operators';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})

export class MoviesService {
  private moviedet = 'http://www.omdbapi.com/?apikey=103f94fb&'

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  constructor(
    private http: HttpClient,
    private messageService: MessageService,
  ) { }
  /** Log a MovieService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`MovieService: ${message}`);
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

  getMovies(title?: string): Observable<any> {
    const url = `${this.moviedet}s=${title}`;
    return this.http.get<any>(url)
      .pipe(
        tap(_ => this.log('Fetched Movies')),
        catchError(this.handleError<any>('getMovies', {}))

      );
  }

  getMovie(imdbID: string): Observable<Movie> {
    const url = `${this.moviedet}i=${imdbID}`;
    return this.http.get<Movie>(url).pipe(
      tap(_ => this.log(`fetched movie imdbID=${imdbID}`)),
      catchError(this.handleError<Movie>(`getMovie imdbID=${imdbID}`))
    );
  }



}
