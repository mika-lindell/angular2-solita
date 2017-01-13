import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';


// Modules and components made available for the app
@NgModule({
  imports: [
    BrowserModule
  ],

  declarations: [
    AppComponent
  ],

  bootstrap: [ AppComponent ] // Use this component to start the app

})
export class AppModule { }
