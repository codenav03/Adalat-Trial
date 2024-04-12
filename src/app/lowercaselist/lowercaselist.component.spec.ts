import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LowercaselistComponent } from './lowercaselist.component';

describe('LowercaselistComponent', () => {
  let component: LowercaselistComponent;
  let fixture: ComponentFixture<LowercaselistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LowercaselistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LowercaselistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
