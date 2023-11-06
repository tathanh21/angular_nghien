import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appHightLight]'
})
export class HightLightDirective {
  @Input() appHightLight = 'blue';
  constructor(private el: ElementRef) {
    console.log('HightLight Directive')

  }
}
