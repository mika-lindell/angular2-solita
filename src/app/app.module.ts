// Angular
import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
// Custom
import { AppComponent } from './app.component';
import { ProductService }         from '../product/product.service';


// Modules and components made available for the app
@NgModule({
  imports: [
    BrowserModule
  ],

  declarations: [
    AppComponent
  ],

  providers: [
    ProductService
  ],

  bootstrap: [ AppComponent ] // Use this component to start the app

})
export class AppModule { }
