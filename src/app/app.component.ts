import { Component, Input, OnDestroy } from '@angular/core';
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

  @Input() shoppingCart: ShoppingCartItem[] = []; // This property keeps track of products in shopping cart 
  subscriptionAddItem: Subscription;  // To hold service subscription for adding item to shopping cart
  subscriptionRemoveItem: Subscription;  // To hold service subscription for removing item from shopping cart

  constructor(
    private shoppingCartService: ShoppingCartService // Create service instance on component creation
    ){

    // Subscribe to service handling adding items to shopping cart – to detect when the cart needs to be updated
    this.subscriptionAddItem = shoppingCartService.itemAdded$.subscribe(
      newProduct => {
        this.addItemToCart(newProduct) // Add the product we received via service to cart
    });

    // Subscribe to service handling removing items from shopping cart – to detect when the cart needs to be updated
    this.subscriptionRemoveItem = shoppingCartService.itemRemoved$.subscribe(
      remProduct => {
        this.removeItemFromCart(remProduct) // remove the product we received via service from cart
    });

  }

  addItemToCart(newProduct: Product){

    let alreadyInCart: boolean = false;

    // First loop thru all items currently in shopping cart...
    for(let item of this.shoppingCart){
      // ...to see if the product we received is already in cart
      if(item.product.id === newProduct.id){
        item.count++; // If it is, just add one to the count of products
        alreadyInCart = true; // Set the flag so we know not to add it again
        break;
      }
    }

    // If the product we received isn't in cart...
    if(!alreadyInCart){
      // ...add the product as a new item
      let newItem: ShoppingCartItem = new ShoppingCartItem;
      newItem.product = newProduct;
      this.shoppingCart.push(newItem); 
    }

    console.log(this.shoppingCart);
  }

  removeItemFromCart(remProduct: Product){
    // First loop thru all items currently in shopping cart...
    for(let i in this.shoppingCart){
      // ...to see if the product we received is in cart...
      if(this.shoppingCart[i].product.id === remProduct.id){
        // ...and if found, remove item from cart
        this.shoppingCart.splice(+i, 1); // adding plus before i will convert it to number for splice to accept it (for casts it as a string)
        break;
      }
    }

    console.log(this.shoppingCart);
  }

  // Event fired when this component is closed
  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.subscriptionAddItem.unsubscribe();
  }

}
