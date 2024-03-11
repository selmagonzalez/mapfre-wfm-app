import { Component, inject, ChangeDetectionStrategy, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicComponent } from '../dynamic-wrapper/dynamic.component';

@Component({
  selector: 'app-export-hris',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './export-hris.component.html',
  styleUrl: './export-hris.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExportHrisComponent implements DynamicComponent{
  @Input() data: any;
}
