import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewReducersComponent } from './view-reducers.component';

describe('ViewReducersComponent', () => {
  let component: ViewReducersComponent;
  let fixture: ComponentFixture<ViewReducersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewReducersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewReducersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
