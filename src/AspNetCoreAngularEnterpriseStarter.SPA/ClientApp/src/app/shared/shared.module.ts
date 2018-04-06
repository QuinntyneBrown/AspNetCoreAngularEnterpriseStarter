import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OlympicWinner } from './models/olympic-winner.model';
import { HeaderComponent } from './components/header.component';
import { HttpClientModule } from '@angular/common/http';
import { OlympicWinnersService } from './services/olympic-winners.service';

const declarations = [
  HeaderComponent
];

const providers = [
  OlympicWinnersService
];

@NgModule({
  imports: [
    HttpClientModule,
    CommonModule
  ],
  declarations,
  providers,
  exports:declarations
})
export class SharedModule { }
