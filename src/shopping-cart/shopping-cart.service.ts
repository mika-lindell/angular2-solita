import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';


@Injectable()
export class ShoppingCartService {
  
  // Observable string sources
  private itemAddedSource = new Subject<string>();
  private itemDeletedSource = new Subject<string>();

  // Observable string streams
  itemAdded$ = this.missionAnnouncedSource.asObservable();
  itemDeleted$ = this.missionConfirmedSource.asObservable();

  // Service message commands
  addItem(id: number) {
    this.missionAnnouncedSource.next(id);
  }

  deleteItem(id: number) {
    this.missionConfirmedSource.next(id);
  }
}