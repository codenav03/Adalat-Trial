import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourtlistComponent } from './courtlist.component';

describe('CourtlistComponent', () => {
  let component: CourtlistComponent;
  let fixture: ComponentFixture<CourtlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourtlistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CourtlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
