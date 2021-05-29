import { ComponentFactoryResolver, ComponentRef, Directive, Input, ViewContainerRef } from '@angular/core';
import { CompTest1Component } from '../components/testDragDrop/comp-test1/comp-test1.component';
import { CompTest2Component } from '../components/testDragDrop/comp-test2/comp-test2.component';

const components = {
  compTest1 : CompTest1Component,
  compTest2 : CompTest2Component
};

@Directive({
  selector: '[appLayoutItem]'
})
export class LayoutItemDirective {
  @Input() componentRef : string;
  component: ComponentRef<any>;

  constructor(
    private container: ViewContainerRef,
    private resolver: ComponentFactoryResolver
  ) { }

  ngOnChanges() : void {
    const component = components[this.componentRef];

    if(component){
      const factory = this.resolver.resolveComponentFactory<any>(component);
      this.component = this.container.createComponent(factory);
    }
  }
  
  public getContainer() : ViewContainerRef {
    return this.container;
  }

  public getResolver() : ComponentFactoryResolver {
    return this.resolver;
  }
}
