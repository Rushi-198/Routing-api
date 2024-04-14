import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './shared/component/product/product.component';
import { ProductsComponent } from './shared/component/products/products.component';
import { FormComponent } from './shared/component/form/form.component';

const routes: Routes = [
  {
    path: "products", component: ProductsComponent
  },
  {
    path: "products/:pid", component: ProductComponent
  },
  {
    path: "form", component: FormComponent
  },
  {
    path: "edit/:pid", component: FormComponent

  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
