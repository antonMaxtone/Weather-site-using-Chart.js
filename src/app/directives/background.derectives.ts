import {Directive, ElementRef} from '@angular/core';

@Directive({selector: '[lecBackground]'})

export class BackgroundDirective {
  constructor (private el: ElementRef) {
    console.log('el', el);
    el.nativeElement.style.color = 'blue';
  }
}
