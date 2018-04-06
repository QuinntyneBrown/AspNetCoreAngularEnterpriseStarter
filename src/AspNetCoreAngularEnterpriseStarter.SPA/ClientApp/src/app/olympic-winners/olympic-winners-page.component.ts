import { Component, OnInit } from '@angular/core';
import { OlympicWinnersService } from '../shared/services/olympic-winners.service';
import { Observable } from 'rxjs';
import { OlympicWinner } from '../shared/models/olympic-winner.model';
import { ColDef, GridApi } from 'ag-grid';

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

  public columnDefintions: Array<ColDef> = [
    {
      headerName: 'Athlete',
      field:'athlete'
    }
  ];

  public onGridReady(params) {
    params.api.sizeColumnsToFit();
  }
  
  public olympicWinners$: Observable<Array<OlympicWinner>>;
}
