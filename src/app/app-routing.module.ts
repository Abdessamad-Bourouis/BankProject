import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { CreateCustomerComponent } from './customerFolder/create-customer/create-customer.component';
import { CustomersComponent } from './customerFolder/customers/customers.component';
import { DetailsCustomerComponent } from './customerFolder/details-customer/details-customer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Route[] = [
  {path:'', component:DashboardComponent},
  {path: 'customers', component:CustomersComponent},
  {path: 'customers/create',component:CreateCustomerComponent},
  {path: 'customers/:id',component:DetailsCustomerComponent},
  {path: 'notFound',component:NotFoundComponent},
  {path: '**',redirectTo: 'notFound'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
