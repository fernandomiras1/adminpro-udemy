import { Injectable } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
// Importamos solo el operador map. para no cargar el nav con otros operadores.
// import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  url = environment.apiUrl;
  usuario: Usuario;
  token: string;
  constructor(public http: HttpClient, public router: Router) { this.cargarStorage(); }

  estaLogueado() {

    if (this.token === null) {
      return;
    } else {
      return (this.token.length > 5) ? true : false;
    }
  }

  cargarStorage() {
    if (localStorage.getItem('token')) {
      this.token = localStorage.getItem('token');
      this.usuario = JSON.parse(localStorage.getItem('usuario'));
    } else {
      this.token = '';
      this.usuario = null;
    }
  }

  guardarStorage(id: string, token: string, usuario: Usuario) {
    localStorage.setItem('id', id);
    localStorage.setItem('token', token);
    localStorage.setItem('usuario', JSON.stringify(usuario));

    this.usuario = usuario;
    this.token = token;
  }

  logout() {
    this.usuario = null;
    this.token = '';
    localStorage.removeItem('token');
    localStorage.removeItem('usuario');
    this.router.navigate(['/login']);
  }


  loginGoogle(token: string) {
    return this.http.post(this.url + '/login/google', {token: token}).pipe(
      map((resp: any) => {
        this.guardarStorage(resp.id, resp.token, resp.usuario);
        return true;
      })
    );
  }


  login(usuario: Usuario, recordar: boolean) {

    if (recordar) {
      localStorage.setItem('email', usuario.email);
    } else {
      localStorage.removeItem('email');
    }

    return this.http.post(this.url + '/login', usuario).pipe(
      map((resp: any) => {
        this.guardarStorage(resp.id, resp.token, resp.usuarios);
        return true;
      })
    );

  }


  crearUsuario(usuario: Usuario) {

   return this.http.post(this.url + '/usuario', usuario).pipe(
            map((resp: any) => {
              swal('Usuario creado', usuario.email , 'success');
              return resp.usuario;
            }));

  }



}
