import { Component } from '@angular/core';
import { CustomerService } from 'src/app/Services/customer.service';
import * as alertify from 'alertifyjs'
@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent {

  customerObj:any=
    { id:'',
      firstName:"",
      lastName:"",
      email:"",
      address:"",
      gender:"",
      image: "",
      balance: 0.0,
      type: ""
  };

  constructor(private _customerService: CustomerService) { }

  initialMethod()
  {
    this.customerObj=
    { id:"",
      firstName:"",
      lastName:"",
      email:"",
      address:"",
      gender:"",
      image: "",
      balance: 0.0,
      type: "" }
  }
  createGuid()  
  {  
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {  
        var r = Math.random()*16|0, v = c === 'x' ? r : (r&0x3|0x8);  
        return v.toString(16);  
      });  
  }  
       
  CreateCustomer(){  
          this.customerObj.id=this.createGuid();
          console.log(this.customerObj)
          this._customerService.createCustomer(this.customerObj).subscribe()  
          this.initialMethod();  
          alertify.success("created successfully")
  }

  handleUpload(event:any){
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
