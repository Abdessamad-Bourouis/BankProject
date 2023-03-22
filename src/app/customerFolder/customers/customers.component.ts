import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/Services/customer.service';
import { Customer } from '../Customer.Model';
import * as alertify from 'alertifyjs'

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

  delete(customer: Customer) {
    this._CustomerService.deleteCustomer(customer).subscribe(() => {
      this.customers = this.customers.filter((p) => p.id !== customer.id);
      
    });
    alertify.error('customer deleted successfully');
  }
  onChange(){
    console.log(this.textSearch)
    this._CustomerService.searchCustomerByName(this.textSearch).
    subscribe((customer:Customer[])=>this.customers=customer);
  }
  
}
