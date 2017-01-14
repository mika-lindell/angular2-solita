import { Component, OnDestroy } from '@angular/core';
import { Subscription }   from 'rxjs/Subscription';

// Services
import { ShoppingCartService } from '../shopping-cart/shopping-cart.service';

// Types
import { Product } from '../product/product';

// Styles
import '../../public/css/styles.css'; // Import styles common for all components

@Component({
  selector: 'app',
  providers: [ShoppingCartService], // This component should be the provider of this service – we want child components to inherit this instance for cross-component communication
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnDestroy { 

  shoppingCart: Product[] = []; // This property keeps track of products in shopping cart 
  subscription: Subscription;  // To hold the service subscription

  constructor(
    private shoppingCartService: ShoppingCartService // Create service instance on component creation
    ){

    // Subscribe to service handling adding items to shopping cart – to detect when the cart needs to be updated
    this.subscription = shoppingCartService.itemAdded$.subscribe(
      product => {
        this.shoppingCart.push(product); // Add the item we received via service
        console.log(this.shoppingCart);
    });
  }

  // Event fired when this component is closed
  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.subscription.unsubscribe();
  }

}
