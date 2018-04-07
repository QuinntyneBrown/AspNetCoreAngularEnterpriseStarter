import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OlympicWinnersPageComponent } from './olympic-winners-page.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';
import { AgGridComponentsModule } from '../ag-grid-components/ag-grid-components.module';

const declarations = [
  OlympicWinnersPageComponent
];

@NgModule({
  imports: [
    AgGridComponentsModule,
    FormsModule,
    CommonModule,    
    MaterialModule,
    SharedModule
  ],
  declarations
})
export class OlympicWinnersModule { }
