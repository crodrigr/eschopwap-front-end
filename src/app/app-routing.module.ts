import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { ProductsComponent } from '../app/products/products.component';
import { FormComponent } from './products/form/form.component';
import { AppComponent } from './app.component';
import { DetailComponent } from '../app/products/detail/detail.component';



 const routes: Routes = [
                  //{ path: '', component: AppComponent },        
                  { path: 'products', component: ProductsComponent },      
                  { path: 'create', component: FormComponent },
                  { path: 'update/:id', component: FormComponent},
                  { path: 'detail/:id', component: DetailComponent},
  ];




@NgModule({
  declarations: [],
  imports: [    
    RouterModule.forRoot( routes )
  ],
  exports: [ RouterModule ]

})
export class AppRoutingModule { }
