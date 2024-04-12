import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LowernavComponent } from './lowernav.component';

describe('LowernavComponent', () => {
  let component: LowernavComponent;
  let fixture: ComponentFixture<LowernavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LowernavComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LowernavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
