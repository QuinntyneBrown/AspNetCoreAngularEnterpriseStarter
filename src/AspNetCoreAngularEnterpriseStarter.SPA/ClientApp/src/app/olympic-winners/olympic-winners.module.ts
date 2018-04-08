import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OlympicWinnersPageComponent } from './olympic-winners-page.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';
import { AgGridComponentsModule } from '../ag-grid-components/ag-grid-components.module';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { HttpClient } from '@angular/common/http';

export function TranslateHttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

const declarations = [
  OlympicWinnersPageComponent
];

@NgModule({
  imports: [
    AgGridComponentsModule,
    FormsModule,
    CommonModule,    
    MaterialModule,
    SharedModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: TranslateHttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  declarations
})
export class OlympicWinnersModule { }
