import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { AgGridModule } from 'ag-grid-angular';

@NgModule({
  imports: [
    AgGridModule.withComponents([]),
    CommonModule,
    MaterialModule
  ],
  declarations: [],
  exports:[AgGridModule]
})
export class AgGridComponentsModule { }
