import { Component, OnInit } from '@angular/core';

import { Product } from '../product/product';
import { ProductService } from '../product/product.service';

@Component({
  selector: 'products',
  providers: [ProductService],
  templateUrl: 'products.component.html'
})

/**
@class Controls the component responsible of creating product listing.
**/
export class ProductsComponent implements OnInit {

  // Create empty array of products to store the data in
  products: Product[];

  constructor(
    private productService: ProductService // Defines the productService – as its type is injectable new instance will be craeated
    ) { }

  /**
  @function Gets all products using productService and then stores data in variable 
  **/
  getProducts(): void {
    this.productService.getProducts().then(
      products => this.products = products
     );
  }

  /**
  @function All the heavy lifting at component init 
  **/
  ngOnInit(): void {
    // Better to use constructor just for declarations and such
    this.getProducts();
  }

}