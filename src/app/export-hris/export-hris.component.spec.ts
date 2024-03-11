import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportHrisComponent } from './export-hris.component';

describe('ExportHrisComponent', () => {
  let component: ExportHrisComponent;
  let fixture: ComponentFixture<ExportHrisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExportHrisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExportHrisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
