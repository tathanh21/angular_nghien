import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appHightLight]'
})
export class HightLightDirective {
  @Input() appHightLight = 'blue';
  constructor(private el: ElementRef) {
    console.log('consructor HightLight Directive')
    el.nativeElement.style.color = this.appHightLight
  }
  ngOnInit(): void {
    console.log('oninit hightlight directive')
    this.el.nativeElement.style.color = this.appHightLight
  }
}
