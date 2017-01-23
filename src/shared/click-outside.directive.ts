import {Directive, ElementRef, Output, EventEmitter, HostListener} from '@angular/core';
 
@Directive({
    selector: '[clickOutside]'
})

/**
@class Detects clicks outside an element — (clickOutside)="doSomething()"
**/

export class ClickOutsideDirective {

    constructor(private _elementRef : ElementRef) {
    }
 
    @Output()
    public clickOutside = new EventEmitter(); // Create custom event
 
    @HostListener('document:click', ['$event.target']) // Listen for clicks... 
    public onClick(targetElement: Element) { // ...and run it when click-event id fired 
        const clickedInside = this._elementRef.nativeElement.contains(targetElement);
        if (!clickedInside) {
            this.clickOutside.emit(null);
        }
    }
}