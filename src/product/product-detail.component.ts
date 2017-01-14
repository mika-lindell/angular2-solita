// Component for displaying information about single product

import { Component, Input } from '@angular/core';

// Services
import { ShoppingCartService } from '../shopping-cart/shopping-cart.service';

// Types
import { Product } from '../product/product';

@Component({
  selector: 'product-detail',
  templateUrl: 'product-detail.component.html'
})

/**
@class Controls the component of a single product.
**/
export class ProductDetailComponent{

  @Input()           // Use input to make this property accessible from template
  product: Product; // This should be passed on by parent component via a template

  constructor(
    private shoppingCartService: ShoppingCartService // As this components' parent (AppComponent) has the same service running, we get its instance instead of creating new service
    ) { }

  addToCart(): void {
    this.shoppingCartService.addItem(this.product)
  }


}