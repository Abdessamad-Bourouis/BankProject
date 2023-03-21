import { Component, OnInit } from "@angular/core";
import { Customer } from "../customerFolder/Customer.Model";
import { CustomerService } from "../Services/customer.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  NumberOfCustmers=0;
  TotaleBalance=0;
  Acounts:Customer[]=[];

  constructor(private _customerService: CustomerService) { }

  ngOnInit():void{
    this._customerService.getCustomers().subscribe(item=>{
      this.Acounts=item;
      this.NumberOfCustmers=item.length;
      this.TotaleBalance=this.Acounts.reduce((sum,item)=>(sum+Number.parseFloat(item.balance.toString())),0)
    })
  }


}
