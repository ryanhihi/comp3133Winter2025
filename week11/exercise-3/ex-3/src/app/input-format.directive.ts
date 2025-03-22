import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[inputFormat]'
})
export class InputFormatDirective {
  constructor(private el: ElementRef) {
    console.log('Directive initialized on element:', this.el.nativeElement);
  }

  @HostListener('blur') onBlur() {
    console.log('Blur event triggered. Current value:', this.el.nativeElement.value);
    const value: string = this.el.nativeElement.value;
    this.el.nativeElement.value = value.toUpperCase();
  }
}
