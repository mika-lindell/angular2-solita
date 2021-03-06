// Service for fetching data about available products

import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise'; // For to be able to convert http.get to promise

// Types
import { Product } from '../product/product';

/**
@class Gets product-data for components
**/
@Injectable() export class ProductsService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private api = '../../public/json/products.json';  // URL to web api

  constructor(private http: Http) { }

  /**
  @method   Get all products
  @return     {array}  Array of Product-objects
  **/
  getProducts(): Promise<Product[]> {
    return this.http.get(this.api)
               .toPromise()
               .then(response => response.json().products as Product[])
               .catch(this.handleError);
  }

  /**
  @method   Get a single product
  @param      {number}  id The unique id of the desired product
  @return     {mixed}   The desired product as a Product-object or undefined if no product was found
  **/
  getProduct(id: number): Promise<Product> {
    const url = `${this.api}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().products as Product)
      .catch(this.handleError);
  }

  /**
  @method Crude error handling for dev purposes
  **/
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}