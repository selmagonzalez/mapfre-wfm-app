import { Component, ViewContainerRef, inject, ChangeDetectionStrategy, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicComponent } from '../dynamic-wrapper/dynamic.component';

@Component({
  selector: 'app-import-breaks',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './import-breaks.component.html',
  styleUrl: './import-breaks.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImportBreaksComponent implements DynamicComponent{
  @Input() data: any;
}
