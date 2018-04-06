import { RouterModule } from "@angular/router";
import { Routes } from "@angular/router";
import { OlympicWinnersPageComponent } from "./olympic-winners/olympic-winners-page.component";

export const ROUTES: Routes = [
  {
    path: '',
    component: OlympicWinnersPageComponent
  }
];

export const routing = RouterModule.forRoot([
  ...ROUTES
], { useHash: false });
