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
  templateUrl: './shopping-cart.component.html',
  styleUrls: [String('./shopping-cart.component.css')] // For some reason typescript decided this isnt a string (tho it worked before), so hacked it with String()
})

export class ShoppingCartComponent { 

  @Input() shoppingCart: ShoppingCartItem[]; // This should be passed on to this component by parent component via a template
  cartProductTotal: number = 0; // The total amount of products in the cart — updated via updateCartStatus
  cartPriceTotal: number = 0;   // The total price of products in the cart — updated via updateCartStatus
  cartDetails: boolean = false; 

  subscriptionAddItem: Subscription;  // To hold service subscription to be notified when item is added to shopping cart

  constructor(
    private shoppingCartService: ShoppingCartService // As this components' parent (AppComponent) has the same service running, we get its instance instead of creating new service
    ){

    // Subscribe to service handling adding items to shopping cart – to open the cart details when item is added
    this.subscriptionAddItem = shoppingCartService.itemAdded$.subscribe(
      newProduct => {
        this.cartDetails = true; // Open detailed shopping cart -dropdown when something is added
        this.updateCartStatus();
    });

  }

  /**
  @method Toggles display of the shopping cart details-dropdown
  **/
  toggleCartDetails(){
    this.cartDetails = !this.cartDetails; // This variable is used in templates to set the display of desired elemets
  }

  /**
  @method Updates total count of products & price of products in shopping cart
  **/
  updateCartStatus(){
    // Count total amount of items in cart
    let totalCount: number = 0;
    let totalPrice: number = 0.00;

    // Loop thru all items in shopping cart...
    for(let item of this.shoppingCart){

      if(isNaN(item.count) || item.count < 1){
        item.count = 1; // If count of products is something funny, reset it
      }

      totalCount = totalCount + item.count; // Add the amount of products in this item to totals
      totalPrice = totalPrice + (item.product.price * item.count) // Add the total price of this item to totals

    }

    // Update component properties with new values
    this.cartProductTotal = totalCount;
    this.cartPriceTotal = totalPrice;

  }

  /**
  @method Notifies the subscribers of shoppingCartService that a product should be removed from shopping cart
  **/
  removeProductFromCart(product: Product){
    this.shoppingCartService.removeItem(product);
    this.updateCartStatus();
  }

  // Event fired when this component is closed
  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.subscriptionAddItem.unsubscribe();
  }

}