import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LowermaintinterComponent } from './lowermaintinter.component';

describe('LowermaintinterComponent', () => {
  let component: LowermaintinterComponent;
  let fixture: ComponentFixture<LowermaintinterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LowermaintinterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LowermaintinterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
