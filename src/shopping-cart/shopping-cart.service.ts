// Service for communicating between product listing and shopping cart — eg. add and delete items
// Created as a service as we need bi-directional communication between multiple components
// AppComponent works as a mediator

import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';

// Types
import { Product } from '../product/product';

/**
@class Create a subscription for events related to managing shopping cart — to enable cross-component communication
**/
@Injectable() export class ShoppingCartService {
  
  // Create sources for subscriptions...
  private itemAddedSource = new Subject<Product>();
  private itemDeletedSource = new Subject<Product>();

  // ... and make them observable streams one can subscribe to
  itemAdded$ = this.itemAddedSource.asObservable();
  itemDeleted$ = this.itemDeletedSource.asObservable();

  /**
  @function Triggers callbacks subscribed to itemAdded$ -stream
  @param    {Product} The product to be passed to the callback
  **/
  addItem(product: Product) {
    this.itemAddedSource.next(product);
  }

  /**
  @function Triggers callbacks subscribed to itemDeleted$ -stream
  @param    {Product} The product to be passed to the callback
  **/
  deleteItem(product: Product) {
    this.itemDeletedSource.next(product);
  }
}