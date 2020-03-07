import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private REST_API_SERVER = "http://localhost:3000/api/v1";

  constructor(private httpClient: HttpClient) { }

  public getAllOrders() {
    return this.httpClient.get(`${this.REST_API_SERVER}/orders`);
  }

  public getCustomer(id) {
    return this.httpClient.get(`${this.REST_API_SERVER}/customers/${id}`);
  }


  public getOrder(id) {
    return this.httpClient.get(`${this.REST_API_SERVER}/orders/${id}`);
  }

  public updateCustomer(id, body) {
    console.log(id, body)
    return this.httpClient.put(`${this.REST_API_SERVER}/customers/${id}`, body)
  }

}
