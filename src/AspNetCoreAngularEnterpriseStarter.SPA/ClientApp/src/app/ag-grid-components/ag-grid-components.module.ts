import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { AgGridModule } from 'ag-grid-angular';
import { CheckboxCellComponent } from './checkbox-cell.component';

@NgModule({
  imports: [
    AgGridModule.withComponents([CheckboxCellComponent]),
    CommonModule,
    MaterialModule
  ],
  declarations: [CheckboxCellComponent],
  exports:[AgGridModule]
})
export class AgGridComponentsModule { }
