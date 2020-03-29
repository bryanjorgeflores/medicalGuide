import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatosService {
  usuario = {
    id: 0
  };
  constructor() { }

  guardarUsuario(user) {
    this.usuario = user;
  }

  retornarUsuario() {
    return this.usuario;
  }
}
