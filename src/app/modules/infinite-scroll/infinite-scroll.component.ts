import { Component, OnInit, ElementRef, Input, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'infinite-scroll',
  template: `<ng-content></ng-content><div #anchor></div>`
})
export class InfiniteScrollComponent implements OnInit {

  @Input() options = {};
  @Output() scrolled = new EventEmitter();
  @ViewChild('anchor', { static: true }) anchor: ElementRef<HTMLElement>;

  private observer: IntersectionObserver;

  constructor(private host: ElementRef) { 
    
  }

  ngOnInit() {
    const options = { root: null, ...this.options };

    console.log(options)

    this.observer = new IntersectionObserver(([entry]) => {
      entry.isIntersecting && this.scrolled.emit();
    }, options);

    this.observer.observe(this.anchor.nativeElement);
  }

  get element() {
    return this.host.nativeElement;
  }

  private isHostScrollable() {
    const style = window.getComputedStyle(this.element);

    return style.getPropertyValue('overflow') === 'auto' ||
      style.getPropertyValue('overflow-y') === 'scroll';
  }

  ngOnDestroy() {
    this.observer.disconnect();
  }

}
