// Component for managing the visual representation of the shopping cart
// The cart data is stored in AppComponent for it to be available for all components in the family

import { Component, Input } from '@angular/core';
import { Subscription }   from 'rxjs/Subscription';

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

  subscriptionAddItem: Subscription;  // To hold service subscription to be notified when item is added to shopping cart

  constructor(
    private shoppingCartService: ShoppingCartService // As this components' parent (AppComponent) has the same service running, we get its instance instead of creating new service
    ){

    // Subscribe to service handling adding items to shopping cart – to open the cart details when item is added
    this.subscriptionAddItem = shoppingCartService.itemAdded$.subscribe(
      newProduct => {
        this.cartDetails = true; // Open the detailed shopping cart for user
    });

  }

  /**
  @method Toggles display of the shopping cart details-dropdown
  **/
  toggleCartDetails(){
    this.cartDetails = !this.cartDetails; // This variable is used in templates to set the display of desired elemets
  }

  /**
  @method Notifies the subscribers of shoppingCartService that a product should be removed from shopping cart
  **/
  removeProductFromCart(product: Product){
    this.shoppingCartService.removeItem(product);
  }

}