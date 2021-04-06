import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html'
})
export class UsersComponent implements OnInit {
  title = 'Administracion de usuarios';

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

}
