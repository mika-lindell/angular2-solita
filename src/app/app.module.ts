import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { HttpModule }     from '@angular/http';

// Components
import { AppComponent }   from './app.component';
import { ProductsComponent } from '../products/products.component';
import { ShoppingCartComponent } from '../shopping-cart/shopping-cart.component';

// Services
import { ProductService } from '../product/product.service';
import { ShoppingCartService } from '../shopping-cart/shopping-cart.service';

// Modules and components made available for the app
@NgModule({
  imports: [
    BrowserModule,
    HttpModule
  ],

  declarations: [
    AppComponent,
    ProductsComponent,
    ShoppingCartComponent
  ],

  providers: [
    ProductService,
    ShoppingCartService
  ],

  bootstrap: [ AppComponent ] // Use this component to start the app

})

export class AppModule { }
