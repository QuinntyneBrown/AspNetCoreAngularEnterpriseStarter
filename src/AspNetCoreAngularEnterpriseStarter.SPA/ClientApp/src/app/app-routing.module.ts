import { RouterModule } from "@angular/router";
import { Routes } from "@angular/router";
import { OlympicWinnersPageComponent } from "./olympic-winners/olympic-winners-page.component";
import { NgModule } from "@angular/core";

export const routes: Routes = [
  {
    path: '',
    component: OlympicWinnersPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
