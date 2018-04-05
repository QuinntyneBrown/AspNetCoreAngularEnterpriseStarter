import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OlympicWinner } from './models/olympic-winner.model';

const declarations = [];

const providers = [
  OlympicWinner
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations,
  providers
})
export class SharedModule { }
