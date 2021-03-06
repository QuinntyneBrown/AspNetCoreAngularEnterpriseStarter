import { Component, OnInit } from '@angular/core';
import { OlympicWinnersService } from '../shared/services/olympic-winners.service';
import { Observable } from 'rxjs';
import { OlympicWinner } from '../shared/models/olympic-winner.model';
import { ColDef, GridApi, GridOptions } from 'ag-grid';
import { CheckboxCellComponent } from '../ag-grid-components/checkbox-cell.component';

@Component({
  selector: 'olympic-winners-page',
  templateUrl: './olympic-winners-page.component.html',
  styleUrls: ['./olympic-winners-page.component.css']
})
export class OlympicWinnersPageComponent implements OnInit {
  constructor(
    private _olympicWinnersService: OlympicWinnersService
  ) { }
  
  ngOnInit() {
    this.olympicWinners$ = this._olympicWinnersService.get();
  }

  public columnDefs: Array<ColDef> = [
    { headerName: "Athlete", field: "athlete" },
    { headerName: "Sport", field: "sport" },
    { headerName: "Age", field: "age" },
    { headerName: "Country", field: "country" },
    { headerName: "Year", field: "year" },
    { headerName: "Date", field: "date" },
    { headerName: "Gold", field: "gold" },
    { headerName: "Silver", field: "silver" },
    { headerName: "Bronze", field: "bronze" },
    { headerName: "Total", field: "total" }
  ];

  public frameworkComponents: any = {
    checkboxCellRenderer: CheckboxCellComponent
  };

  public onGridReady($event) { $event.api.sizeColumnsToFit(); }

  public olympicWinners$: Observable<Array<OlympicWinner>>;
}
