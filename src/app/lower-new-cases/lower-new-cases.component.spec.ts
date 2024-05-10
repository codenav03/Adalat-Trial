import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LowerNewCasesComponent } from './lower-new-cases.component';

describe('LowerNewCasesComponent', () => {
  let component: LowerNewCasesComponent;
  let fixture: ComponentFixture<LowerNewCasesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LowerNewCasesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LowerNewCasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
