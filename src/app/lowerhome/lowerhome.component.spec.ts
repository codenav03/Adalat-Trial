import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LowerhomeComponent } from './lowerhome.component';

describe('LowerhomeComponent', () => {
  let component: LowerhomeComponent;
  let fixture: ComponentFixture<LowerhomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LowerhomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LowerhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
