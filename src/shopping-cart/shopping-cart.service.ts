import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';


@Injectable()
export class ShoppingCartService {
  
  // Observable string sources
  private itemAddedSource = new Subject<number>();
  private itemDeletedSource = new Subject<number>();

  // Observable string streams
  itemAdded$ = this.itemAddedSource.asObservable();
  itemDeleted$ = this.itemDeletedSource.asObservable();

  // Service message commands
  addItem(id: number) {
    this.itemAddedSource.next(id);
  }

  deleteItem(id: number) {
    this.itemDeletedSource.next(id);
  }
}