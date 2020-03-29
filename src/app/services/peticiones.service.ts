import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICES } from '../config/url.services';

@Injectable({
  providedIn: 'root'
})
export class PeticionesService {

  constructor(private http: HttpClient) { }


  // Conexiones con API

  getSesion(usuario, password) {
    const url =
      URL_SERVICES + 'login?usuario=' + usuario + '&contrasena=' + password;
    return this.http.get(url);
  }
}
