import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appMyIf]'
})
export class MyIfDirective {

  @Input() set appMyIf(ifVisible: boolean) {
    if (ifVisible) {
      this.viewContainer.createEmbeddedView(this.templateRef, { data: 4353, $implicit: 'some text'}); 
    } else {
      this.viewContainer.clear();
    }
  }

  constructor(
    private viewContainer: ViewContainerRef,
    private templateRef: TemplateRef<any>
  ) { }

}
