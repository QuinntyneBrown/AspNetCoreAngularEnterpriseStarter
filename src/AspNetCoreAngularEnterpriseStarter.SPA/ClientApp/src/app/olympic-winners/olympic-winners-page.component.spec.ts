import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OlympicWinnersPageComponent } from './olympic-winners-page.component';

describe('OlympicWinnersPageComponent', () => {
  let component: OlympicWinnersPageComponent;
  let fixture: ComponentFixture<OlympicWinnersPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OlympicWinnersPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OlympicWinnersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
