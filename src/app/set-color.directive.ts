import {
  Directive,
  ElementRef,
  Input,
  AfterViewInit,
  HostListener,
} from '@angular/core';

@Directive({
  selector: '[appSetColor]',
})
export class SetColorDirective implements AfterViewInit {
  @Input() appSetColor!: string;
  @Input() set changeTheColor(value: boolean) {
    if (value) {
      if (this.appSetColor === 'maroon') {
        this.el.nativeElement.style.backgroundColor = 'blue';
      }
      if (this.appSetColor === 'red') {
        this.el.nativeElement.style.backgroundColor = 'orange';
        this.el.nativeElement.style.fontWeight = '';
      }
    } else {
      if (this.appSetColor === 'maroon') {
        this.el.nativeElement.style.backgroundColor = this.appSetColor;
      }
      if (this.appSetColor === 'red') {
        this.el.nativeElement.style.backgroundColor = this.appSetColor;
        this.el.nativeElement.style.fontWeight = 'bold';
      }
    }
  }

  whatColorWas!: string;

  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    this.el.nativeElement.style.backgroundColor = this.appSetColor;
  }

  @HostListener('mouseenter') mo_enter() {
    this.whatColorWas = this.el.nativeElement.style.backgroundColor;
    this.el.nativeElement.style.backgroundColor = 'rgb(177,255,255)';
  }

  @HostListener('mouseleave') mo_leave() {
    this.el.nativeElement.style.backgroundColor = this.whatColorWas;
  }
}
