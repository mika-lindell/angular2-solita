// Types
import { Product } from '../product/product';

/**
@class Type declaration used as template for a shopping cart item
**/
export class ShoppingCartItem {
  count: number = 1;
  product: Product;
}