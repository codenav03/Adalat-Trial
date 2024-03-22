import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaininterComponent } from './maininter.component';

describe('MaininterComponent', () => {
  let component: MaininterComponent;
  let fixture: ComponentFixture<MaininterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaininterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MaininterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
