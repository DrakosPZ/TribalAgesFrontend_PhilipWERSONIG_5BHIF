import { Injectable } from '@angular/core';
import { State } from '../models/state';
import {Ressource} from '../models/ressource';
import {Ressources} from '../models/ressources';
import { Observable, of } from 'rxjs';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoadSaveServiceService {

  private baseURL = 'http://localhost:8080/state';
  private savedAlready = false;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient) { }

  /**
   * Makes a get Call towards the backend, to get the currently saved state.
   *
   * @param identifier
   */
  public loadDataFromServer(identifier: string): Observable<State> {
    this.log('Hero Fetched');
    return this.http.get<State>(this.baseURL + '/getSavedState')
      .pipe(
        tap(_ => this.log('fetched State')),
        catchError(
          this.handleError<State>('getSavedState',
            new State('abcdWonderfullIdentifier123', 'New State 1',
              new Ressource('1', 'Population', 'The Living Populus', 1000, 10, 0),
              1, 0, 0, 0,
              new Ressources('Sto1', [
                new Ressource('1', 'Food', 'Casual Food Crops', 100, 50, 50),
                new Ressource('2', 'WorkForce', 'How much our Population can put into Building Production', 0, 50, 10)
              ], 0))
          )
        )
      );
    /*} else {
      return this.http.get<State>(this.baseURL + '?identifier=' + identifier, )
        .pipe(
          tap(_ => this.log('fetched State')),
          catchError(
            this.handleError<State>('getSavedState',
              new State('s1', 'New State 1',
                new Ressource('1', 'Population', 'The Living Populus', 1000, 10, 0),
                1, 0, 0, 0,
                new Ressources('Sto1', [
                  new Ressource('1', 'Food', 'Casual Food Crops', 100, 50, 50),
                  new Ressource('2', 'WorkForce', 'How much our Population can put into Building Production', 0, 50, 10)
                ], 0))
            )
          )
        );
    }*/

  }

  /**
   * Calls the backend to get the standrad starting State.
   *
   */
  public loadStandardState(): Observable<State> {
    this.log('Standard State Fetched');
    return this.http.get<State>(this.baseURL + '/getStartState')
      .pipe(
        tap(_ => this.log('fetched State')),
        catchError(
          this.handleError<State>('getSavedState',
            new State('s1', 'New State 1',
              new Ressource('1', 'Population', 'The Living Populus', 1000, 10, 0),
              1, 0, 0, 0,
              new Ressources('Sto1', [
                new Ressource('1', 'Food', 'Casual Food Crops', 100, 50, 50),
                new Ressource('2', 'WorkForce', 'How much our Population can put into Building Production', 0, 50, 10)
              ], 0))
          )
        )
      );
  }

  /**
   * Saves the current running state with a post towards the backend, and updates the identifier of the local state, with the response
   * identifier.
   *
   * @param state
   */
  public saveDataToServer(state: State): Observable<any> {
    console.log(state);
    return this.http.post(this.baseURL + '/saveState', state, this.httpOptions).pipe(
      map((data: State) => {
        state.identifier = data.identifier;
      }),
      tap(_ => this.log('saved state with= ' + state.identifier)),
      catchError(this.handleError<any>('savedState Error'))
    );
  }

  /**
   * sets saved true
   */
  public saved() {
    this.savedAlready = true;
  }

  /**
   * logs messages
   *
   * @param message
   */
  private log(message: string) {
    console.log('LoadSafeService: ' + message );
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
}
