import { Component, Input } from '@angular/core';
import { Customer } from '../Customer.Model';

@Component({
  selector: 'app-customer-card',
  templateUrl: './customer-card.component.html',
  styleUrls: ['./customer-card.component.css']
})
export class CustomerCardComponent {

  @Input() customer?:Customer;

  

  afficher(){
    console.log(this.customer?.image)
  }
  

  getDefaultImage(){
    return this.customer?.firstName.charAt(0).toUpperCase()+""+this.customer?.lastName.charAt(0).toUpperCase();
  }
}
