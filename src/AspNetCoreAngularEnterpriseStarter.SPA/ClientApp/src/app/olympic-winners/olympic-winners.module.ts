import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OlympicWinnersPageComponent } from './olympic-winners-page.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';
import { AgGridModule } from "ag-grid-angular/main";
import { FormsModule } from '@angular/forms';

const declarations = [
  OlympicWinnersPageComponent
];

@NgModule({
  imports: [
    FormsModule,
    AgGridModule.withComponents([]),
    CommonModule,    
    MaterialModule,
    SharedModule
  ],
  declarations
})
export class OlympicWinnersModule { }
