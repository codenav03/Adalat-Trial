import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LowermaininterComponent } from './lowermaininter.component';

describe('LowermaininterComponent', () => {
  let component: LowermaininterComponent;
  let fixture: ComponentFixture<LowermaininterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LowermaininterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LowermaininterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
