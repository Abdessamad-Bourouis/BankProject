import { Injectable } from '@angular/core';
import { Customer } from '../customerFolder/Customer.Model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:3000/customers';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  

  constructor(private _httpClient: HttpClient) { }

  getCustomers():Observable<Customer[]>{
    return this._httpClient.get<Customer[]>(API_URL);
  }
  createCustomer(customer:Customer){
    return this._httpClient.post<Customer>(API_URL, customer);
  }
  updateCustomer(_Customer: Customer): Observable<Customer> {
    return this._httpClient.put<Customer>(`${API_URL}/${_Customer.id}`, _Customer);
  }
  getCustomerById(Id:String):Observable<Customer>{
    return this._httpClient.get<Customer>(API_URL+`/${Id}`);
  }
  searchCustomerByName(name:string):Observable<Customer[]>{
    return this._httpClient.
    get<Customer[]>(API_URL+`?firstName_like=${name}`);
  }
  deleteCustomer(_customer:Customer) {
    return this._httpClient.delete(`${API_URL}/${_customer.id}`);
  }

}
