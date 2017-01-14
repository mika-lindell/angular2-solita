// Component for managing the visual representation of the shopping cart
// The cart data is stored in AppComponent for it to be available for all components in the family

import { Component } from '@angular/core';

// Services
import { ShoppingCartService } from '../shopping-cart/shopping-cart.service';

// Types
import { Product } from '../product/product';

@Component({
  selector: 'shopping-cart',
  templateUrl: './shopping-cart.component.html'
})

export class ShoppingCartComponent { 

  constructor(
    private shoppingCartService: ShoppingCartService // As this components' parent (AppComponent) has the same service running, we get its instance instead of creating new service
    ){}

}