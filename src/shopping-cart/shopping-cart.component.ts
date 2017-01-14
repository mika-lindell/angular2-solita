// Component for managing the visual representation of the shopping cart
// The cart data is stored in AppComponent for it to be available for all components in the family

import { Component, Input } from '@angular/core';

// Services
import { ShoppingCartService } from '../shopping-cart/shopping-cart.service';

// Types
import { Product } from '../product/product';
import { ShoppingCartItem } from '../shopping-cart/shopping-cart-item';

@Component({
  selector: 'shopping-cart',
  templateUrl: './shopping-cart.component.html'
})

export class ShoppingCartComponent { 

  @Input() shoppingCart: ShoppingCartItem[]; // This should be passed on to this component by parent component via a template
  cartDetails: boolean = false;

  constructor(
    private shoppingCartService: ShoppingCartService // As this components' parent (AppComponent) has the same service running, we get its instance instead of creating new service
    ){}


  toggleCartDetails(){
    this.cartDetails = !this.cartDetails;
  }

  removeItemFromCart(){
    // Stub
  }

}