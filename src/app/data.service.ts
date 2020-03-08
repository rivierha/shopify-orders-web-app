import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private REST_API_SERVER = "http://localhost:3000/api/v1";

  constructor(private httpClient: HttpClient) { }

  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

  public getAllOrders() {
    return this.httpClient.get(`${this.REST_API_SERVER}/orders`).pipe(catchError(this.handleError));
  }

  public getCustomer(id) {
    return this.httpClient.get(`${this.REST_API_SERVER}/customers/${id}`).pipe(catchError(this.handleError));
  }


  public getOrder(id) {
    return this.httpClient.get(`${this.REST_API_SERVER}/orders/${id}`).pipe(catchError(this.handleError));
  }

  public updateCustomer(id, body) {
    console.log(id, body)
    return this.httpClient.put(`${this.REST_API_SERVER}/customers/${id}`, body).pipe(catchError(this.handleError))
  }

}
