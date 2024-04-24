import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LowerchartComponent } from './lowerchart.component';

describe('LowerchartComponent', () => {
  let component: LowerchartComponent;
  let fixture: ComponentFixture<LowerchartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LowerchartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LowerchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
