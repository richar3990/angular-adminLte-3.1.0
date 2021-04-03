import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  public confirm: boolean;
  title = 'adminlte-angular';
  constructor() {
    this.confirm = true;
  }
}
