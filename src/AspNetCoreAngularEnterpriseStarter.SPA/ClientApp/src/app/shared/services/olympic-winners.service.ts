import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { OlympicWinner } from "../models/olympic-winner.model";

@Injectable()
export class OlympicWinnersService {
  constructor(private _httpClient: HttpClient) { }

  public get(): Observable<Array<OlympicWinner>> {
    return this._httpClient.get<Array<OlympicWinner>>("/api/olympicwinners");
  }
}
