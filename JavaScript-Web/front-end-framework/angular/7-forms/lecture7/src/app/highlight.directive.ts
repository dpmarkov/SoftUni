import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input() set appHighlight(isActive: boolean) {
    if (isActive) {
      this.elementRef.nativeElement.style.color = 'red';
    } else {
      this.elementRef.nativeElement.style.color = 'blue';
    }
  };

  constructor(
    private elementRef: ElementRef
  ) { }

  // ngOnChanges(simpleChanges: SimpleChanges) {
  //   if (simpleChanges.isActive.currentValue) {
  //     this.elementRef.nativeElement.style.color = 'red';
  //   } else {
  //     this.elementRef.nativeElement.style.color = 'blue';
  //   }
  // }

}
