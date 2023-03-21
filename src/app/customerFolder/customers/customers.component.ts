import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/Services/customer.service';
import { Customer } from '../Customer.Model';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent  implements OnInit {

  customers:Customer[]=[];
  textSearch="";
  constructor(private _CustomerService:CustomerService){}
  
  ngOnInit(){
    this._CustomerService.getCustomers().subscribe(
      (customers:Customer[])=>{
                                this.customers=customers
                                console.log(this.customers);
                              });  
  }

  onChange(){
    console.log(this.textSearch)
    this._CustomerService.searchCustomerByName(this.textSearch).
    subscribe((customer:Customer[])=>this.customers=customer);
  }
  
}
