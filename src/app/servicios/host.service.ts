import { Injectable } from "@angular/core";
import {
  HttpHeaders,
  HttpClient,
  HttpErrorResponse,
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, map } from "rxjs/operators";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json",
    "token": localStorage.getItem("token") != null ? localStorage.token : ""
  })
};

@Injectable()
export class HostService {
  public host: string = "http://localhost:8080/ApiSalaDeJuegos";

  constructor(private http: HttpClient) { }

  public Get<T>(action: string, id: string, options = httpOptions): Observable<T> {
    return this.http.get<T>(`${this.host}/${action}/${id}`, options).pipe(
      map(result => result),
      catchError(err => this.handleError(err))
    );
  }

  public List<T>(action: string, options = httpOptions): Observable<Array<T>> {
    return this.http.get<Array<T>>(`${this.host}/${action}`, options).pipe(
      map(result => result),
      catchError(err => this.handleError(err))
    );
  }

  public Post<T>(action: string, objeto: any, options = httpOptions): Observable<T> {
    return this.http
      .post<T>(`${this.host}/${action}`, objeto, options)
      .pipe(
        map(result => result),
        catchError(err => this.handleError(err))
      );
  }

  public Update<T>(action: string, objeto: any, options = httpOptions): Observable<T> {
    return this.http
      .put<T>(`${this.host}/${action}/${objeto}`, objeto, options)
      .pipe(
        map(result => result),
        catchError(err => this.handleError(err))
      );
  }

  public Delete(action: string, id: number, options = httpOptions) {
    return this.http.delete(`${this.host}/${action}/${id}`, options);
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.log("An error occurred:", error.error.message);
    } else {
      console.log(`Backend returned code ${error.status}, body was: `);
      console.log(error.error);
    }
    return throwError("Something bad happened; please try again later.");
  }
}