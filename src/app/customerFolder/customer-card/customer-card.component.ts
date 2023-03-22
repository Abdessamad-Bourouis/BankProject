import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Customer } from '../Customer.Model';

@Component({
  selector: 'app-customer-card',
  templateUrl: './customer-card.component.html',
  styleUrls: ['./customer-card.component.css']
})
export class CustomerCardComponent {

  @Input() customer?:Customer;
  @Output() delete = new EventEmitter<Customer>();

  afficher(){
    console.log(this.customer?.image)
  }
  
  OnRemove(){
    this.delete.emit(this.customer);
  }
  
  getDefaultImage(){
    return this.customer?.firstName.charAt(0).toUpperCase()+""+this.customer?.lastName.charAt(0).toUpperCase();
  }
}
