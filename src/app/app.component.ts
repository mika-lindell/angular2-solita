import { Component, OnDestroy } from '@angular/core';
import { Subscription }   from 'rxjs/Subscription';

// Services
import { ShoppingCartService } from '../shopping-cart/shopping-cart.service';

// Types
import { Product } from '../product/product';
import { ShoppingCartItem } from '../shopping-cart/shopping-cart-item';

// Styles
import '../../public/css/styles.css'; // Import styles common for all components

@Component({
  selector: 'app',
  providers: [ShoppingCartService], // This component should be the provider of this service – we want child components to inherit this instance for cross-component communication
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnDestroy { 

  shoppingCart: ShoppingCartItem[] = []; // This property keeps track of products in shopping cart 
  subscription: Subscription;  // To hold the service subscription

  constructor(
    private shoppingCartService: ShoppingCartService // Create service instance on component creation
    ){

    // Subscribe to service handling adding items to shopping cart – to detect when the cart needs to be updated
    this.subscription = shoppingCartService.itemAdded$.subscribe(
      newProduct => {

        let alreadyInCart: boolean = false;

        // First loop thru all items currently in shopping cart...
        for(let item of this.shoppingCart){
          // ...to see if the product we received via service is already in cart
          if(item.product.id === newProduct.id){
            item.count++; // If it is, just add one to the count of products
            alreadyInCart = true; // Set the flag so we know not to add it again
            break;
          }

        }

        // If the product we received via service isn't in cart...
        if(!alreadyInCart){
          // ...add the product as a new item
          let newItem: ShoppingCartItem = new ShoppingCartItem;
          newItem.product = newProduct;
          this.shoppingCart.push(newItem); 
        }

        console.log(this.shoppingCart);

    });
  }

  // Event fired when this component is closed
  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.subscription.unsubscribe();
  }

}
