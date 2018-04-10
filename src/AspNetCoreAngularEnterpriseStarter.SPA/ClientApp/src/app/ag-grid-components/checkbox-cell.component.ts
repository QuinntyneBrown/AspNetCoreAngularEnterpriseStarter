import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams, IAfterGuiAttachedParams } from 'ag-grid';

@Component({
  selector: 'checkbox-cell',
  templateUrl: './checkbox-cell.component.html',
  styleUrls: ['./checkbox-cell.component.css']
})
export class CheckboxCellComponent implements ICellRendererAngularComp {
  refresh(params: any): boolean {
    throw new Error("Method not implemented.");
  }
  agInit(params: ICellRendererParams): void {
    throw new Error("Method not implemented.");
  }
  afterGuiAttached?(params?: IAfterGuiAttachedParams): void {
    throw new Error("Method not implemented.");
  }  
}
