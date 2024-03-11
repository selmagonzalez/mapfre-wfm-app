import { Component, ViewContainerRef, inject, ChangeDetectionStrategy, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicComponent } from '../dynamic-wrapper/dynamic.component';

@Component({
  selector: 'app-view-reducers',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './view-reducers.component.html',
  styleUrl: './view-reducers.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ViewReducersComponent implements DynamicComponent{
  @Input() data: any;
}
