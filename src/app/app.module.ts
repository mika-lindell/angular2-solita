import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { HttpModule }     from '@angular/http';


import { AppComponent }   from './app.component';
import { ProductService } from '../product/product.service';
import { ProductsComponent } from '../products/products.component';


// Modules and components made available for the app
@NgModule({
  imports: [
    BrowserModule,
    HttpModule
  ],

  declarations: [
    AppComponent,
    ProductsComponent
  ],

  providers: [
    ProductService
  ],

  bootstrap: [ AppComponent ] // Use this component to start the app

})

export class AppModule { }
