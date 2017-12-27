import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeagalComponent } from './leagal.component';

describe('LeagalComponent', () => {
  let component: LeagalComponent;
  let fixture: ComponentFixture<LeagalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeagalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeagalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
