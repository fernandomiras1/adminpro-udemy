import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

declare function init_plugins();

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
    // Llamamos a la funcion creada en custom.js
    init_plugins();
  }


  ingresar(): void {
   this.router.navigate(['/dashboard']);
  }

}