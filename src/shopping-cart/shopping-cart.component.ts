import { Component } from '@angular/core';

import { Product } from '../product/product';
import { ShoppingCartService } from '../shopping-cart/shopping-cart.service';

@Component({
  selector: 'shopping-cart',
  templateUrl: './shopping-cart.component.html'
})

export class ShoppingCartComponent { 

  constructor(
    private shoppingCartService: ShoppingCartService // As this components' parent has the same service running, we get its instance instead of creating new service
    ){}

}