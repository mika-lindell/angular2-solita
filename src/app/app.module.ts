import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { HttpModule }     from '@angular/http';

// Components
import { AppComponent }   from './app.component';
import { ProductsComponent } from '../products/products.component';
import { ProductDetailComponent } from '../product/product-detail.component';
import { ShoppingCartComponent } from '../shopping-cart/shopping-cart.component';

// Services
import { ProductsService } from '../products/products.service';
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
    ProductDetailComponent,
    ShoppingCartComponent
  ],

  providers: [
    ProductsService,
    ShoppingCartService
  ],

  bootstrap: [ AppComponent ] // Use this component to start the app

})

export class AppModule { }
