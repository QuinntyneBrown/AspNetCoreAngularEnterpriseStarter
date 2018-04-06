import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { OlympicWinnersService } from './services/olympic-winners.service';

const providers = [
  OlympicWinnersService
];

@NgModule({
  imports: [
    HttpClientModule,
    CommonModule
  ],
  providers,
})
export class SharedModule { }
