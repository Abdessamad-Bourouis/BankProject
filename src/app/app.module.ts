import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomersComponent } from 'src/app/customerFolder/customers/customers.component';
import { HttpClientModule } from '@angular/common/http';
import { CustomerCardComponent } from './customerFolder/customer-card/customer-card.component';
import { DetailsCustomerComponent } from './customerFolder/details-customer/details-customer.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormsModule } from '@angular/forms';
import { CreateCustomerComponent } from './customerFolder/create-customer/create-customer.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    DashboardComponent,
    CustomersComponent,
    CustomerCardComponent,
    DetailsCustomerComponent,
    NotFoundComponent,
    CreateCustomerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
