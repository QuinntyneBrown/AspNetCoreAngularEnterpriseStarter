import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OlympicWinnersPageComponent } from './olympic-winners-page.component';
import { OlympicWinnersModule } from './olympic-winners.module';
import { FormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';
import { SharedModule } from '../shared/shared.module';

describe('OlympicWinnersPageComponent', () => {
  let component: OlympicWinnersPageComponent;
  let fixture: ComponentFixture<OlympicWinnersPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        AgGridModule,
        SharedModule
      ],
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
