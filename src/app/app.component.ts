import { Component } from '@angular/core';

// Components

// Services
import { ShoppingCartService } from '../shopping-cart/shopping-cart.service';

// Types
import { Product } from '../product/product';

// Styles
import '../../public/css/styles.css'; // Import styles common for all components

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent { 

  shoppingCart: Product[]; // This variable keeps track of products in shopping cart 

  constructor(
    private shoppingCartService: ShoppingCartService // Create service instance on component creation
    ){}

}
