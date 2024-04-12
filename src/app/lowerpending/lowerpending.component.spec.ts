import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LowerpendingComponent } from './lowerpending.component';

describe('LowerpendingComponent', () => {
  let component: LowerpendingComponent;
  let fixture: ComponentFixture<LowerpendingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LowerpendingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LowerpendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
