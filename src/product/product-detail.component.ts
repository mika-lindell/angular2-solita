// Component for displaying information about single product

import { Component, Input } from '@angular/core';

// Services
import { ShoppingCartService } from '../shopping-cart/shopping-cart.service';

// Types
import { Product } from '../product/product';

@Component({
  selector: 'product-detail',
  templateUrl: 'product-detail.component.html',
  styleUrls: [String('./product-detail.component.css')] // For some reason typescript decided this isnt a string (tho it worked before), so hacked it with String()
})

/**
@class Controls the component of a single product.
**/
export class ProductDetailComponent{

  @Input() product: Product; // This should be passed on by parent component via a template

  constructor(
    private shoppingCartService: ShoppingCartService // As this components' parent (AppComponent) has the same service running, we get its instance instead of creating new service
    ) { }

  /**
  @method Notifies the subscribers of shoppingCartService that a product should be added to shopping cart
  **/
  addToCart(): void {
    this.shoppingCartService.addItem(this.product)
  }

  getProductImagePath(product: Product){
    return '../../public/images/products/' + product.name + '.svg'
  }



}