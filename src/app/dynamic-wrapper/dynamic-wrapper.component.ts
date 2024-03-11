import { Component, Input, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicItem } from '../dynamic.types';
import { DynamicComponent } from './dynamic.component';
import { DcDirective } from './dc.directive';

@Component({
  selector: 'app-dynamic-wrapper',
  standalone: true,
  imports: [CommonModule, DcDirective],
  templateUrl: './dynamic-wrapper.component.html',
  styleUrl: './dynamic-wrapper.component.css'
})
export class DynamicWrapperComponent {
  @Input() dynamicComponents: DynamicItem[] = [];
  @ViewChild(DcDirective) dcWrapper!: DcDirective;

  loadComponent(item: DynamicItem) {
    const viewContainerRef = this.dcWrapper.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent<DynamicComponent>(
      item.component
    );
    componentRef.instance.data = item.data;
  }
}
