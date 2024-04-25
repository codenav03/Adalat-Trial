import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LowersinglecaseComponent } from './lowersinglecase.component';

describe('LowersinglecaseComponent', () => {
  let component: LowersinglecaseComponent;
  let fixture: ComponentFixture<LowersinglecaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LowersinglecaseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LowersinglecaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
