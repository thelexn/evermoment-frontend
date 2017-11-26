import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MentaltrainingComponent } from './mentaltraining.component';

describe('MentaltrainingComponent', () => {
  let component: MentaltrainingComponent;
  let fixture: ComponentFixture<MentaltrainingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentaltrainingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentaltrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
