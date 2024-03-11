import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportBreaksComponent } from './import-breaks.component';

describe('ImportBreaksComponent', () => {
  let component: ImportBreaksComponent;
  let fixture: ComponentFixture<ImportBreaksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImportBreaksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImportBreaksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
