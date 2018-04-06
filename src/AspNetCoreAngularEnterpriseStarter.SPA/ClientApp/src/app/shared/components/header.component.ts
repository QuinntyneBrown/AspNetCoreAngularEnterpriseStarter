import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {    
  public onDestroy: Subject<void> = new Subject();

  ngOnDestroy() {
    this.onDestroy.next();
  }
}
