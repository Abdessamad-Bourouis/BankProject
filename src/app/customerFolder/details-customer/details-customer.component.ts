import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { CustomerService } from 'src/app/Services/customer.service';
import { Customer } from '../Customer.Model';
import * as alertify from 'alertifyjs'
@Component({
  selector: 'app-details-customer',
  templateUrl: './details-customer.component.html',
  styleUrls: ['./details-customer.component.css']
})
export class DetailsCustomerComponent implements OnInit{
  customer?: Customer;
  edit=false;
  customerObj:any=
    { id:this.customer?.id,
      firstName:"",
      lastName:"",
      email:"",
      address:"",
      gender:"",
      image: "",
      balance: 0.0,
      type: ""
  };

  
  constructor(
    private _customerService: CustomerService,
    private activeRoute: ActivatedRoute,
    private router: Router
  ) { }
  

  initialMethod()
  {
    this.edit=false;
    this.customerObj={
      id:this.customer?.id,
      firstName:this.customer?.firstName,
      lastName:this.customer?.lastName,
      email:this.customer?.email,
      address:this.customer?.address,
      gender:this.customer?.gender,
      image: this.customer?.image,
      balance:this.customer?.balance,
      type: this.customer?.type 
    }
  }
  
  ngOnInit(): void {
    this.activeRoute.params
    .pipe(switchMap((item) => this._customerService.getCustomerById(item['id'])))
    .subscribe({
        next: (item) => {this.customer = item
          this.initialMethod();
        },
        error: () =>this.router.navigate(['notFound'])});
  }
  OnUpdateCustomer(){
    this.edit=!this.edit;
    this._customerService.updateCustomer(this.customerObj).subscribe(item=>this.customer=item);
    alertify.success("Updated successfully")
  }
  getDefaultImage(){
    return this.customer?.firstName.charAt(0).toUpperCase()+""+this.customer?.lastName.charAt(0).toUpperCase();
  }

  handleUpload(event:any) {
    this.edit=true;
    let file;
    file = event.target.files[0];
    console.log(file)
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
        this.customerObj.image=reader.result;
    };
    
  }

}
