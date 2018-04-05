import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OlympicWinnersPageComponent } from './olympic-winners-page.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';

const declarations = [
  OlympicWinnersPageComponent
];

@NgModule({
  imports: [
    CommonModule,    
    MaterialModule,
    SharedModule
  ],
  declarations
})
export class OlympicWinnersModule { }
