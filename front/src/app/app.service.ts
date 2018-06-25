import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'text/plain' })
};

@Injectable({ providedIn: 'root' })
export class AppService {

  private baseUrl = 'http://localhost:8200/api';  // URL to web api

  constructor(private http: HttpClient) { }

  getLatency (): Observable<any> {
    return this.http.get(`${this.baseUrl}/latency`, httpOptions)
      .pipe(
        tap(res => this.log(res)),
        catchError(this.handleError('getLatency', []))
      );
  }

  download (): Observable<any> {
    return this.http.get(`${this.baseUrl}/download`, {
      responseType: 'text',
      reportProgress: true
    })
    .pipe(
      tap(res => this.log({operation: 'downloading'})),
      catchError(this.handleError('download', []))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    console.log(`handleError operation: ${operation}`);

    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private log(message: object) {
    console.log('zfx:', message)
  }
}