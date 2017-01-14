// Component for displaying a list of products

import { Component, OnInit } from '@angular/core';

// Services
import { ProductsService } from '../products/products.service';

// Types
import { Product } from '../product/product';

@Component({
  selector: 'products',
  providers: [ProductsService],  // This component should be the provider of this service
  templateUrl: 'products.component.html'
})

/**
@class Controls the component responsible of creating product listing.
**/
export class ProductsComponent implements OnInit {

  // Create empty array of products to store the data in
  products: Product[];

  constructor(
    private productsService: ProductsService, // Create new instance of this service to fetch product data
    ) { }


  /**
  @function Gets all products using productService and then stores data in variable 
  **/
  getProducts(): void {
    this.productsService.getProducts().then(
      products => this.products = products
     );
  }

  // Event fired when the component is ready
  // Do all the heavy lifting here instead of constructor
  ngOnInit(): void {
    this.getProducts();
  }


}