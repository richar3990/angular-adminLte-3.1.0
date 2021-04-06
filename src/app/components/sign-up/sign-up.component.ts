import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';

declare const $: any;

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styles: [
  ]
})
export class SignUpComponent implements OnInit {
  title = 'Registro de usuario';
  valid = 'is-invalid';

  constructor(
    private _router: Router
  ) { }

  ngOnInit(): void {

   }
  onSubmit(): void{
    this._router.navigate(['/inicio']);
  }

}
