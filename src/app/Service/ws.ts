import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Roles } from '../Componente/Roles/Roles';
import { Usuarios } from '../Componente/Usuarios/Usuarios';

@Injectable({
  providedIn: 'root'
})
export class Ws {

  constructor(private http: HttpClient) { }

  url = "http://localhost:8030/api/rol";
  listarR(){
    return this.http.get<Roles[]>(this.url + "/listar");
  }

  guardarR(r: Roles){
    return this.http.post<Roles[]>(this.url + "/guardar", r);
  }

  buscarR(r: Roles){
    return this.http.post<Roles>(this.url + "/buscar", r);
  }

  editarR(r: Roles){
    return this.http.put<String>(this.url + "/editar", r);
  }

  eliminarR(r:Roles){
    return this.http.delete<void>(this.url + "/eliminar", {
      body: r
    });
  }

  urlu = "http://localhost:8030/api/user";
  listarU(){
    return this.http.get<Usuarios[]>(this.urlu + "/listar");
  }

  guardarU(u: Usuarios){
    return this.http.post<String>(this.urlu + "/guardar", u);
  }

  buscarU(u: Usuarios){
    return this.http.post<Usuarios>(this.urlu + "/buscar", u);
  }

  editarU(u:Usuarios){
    return this.http.put<String>(this.urlu + "/editar", u);
  }

  eliminarU(u: Usuarios){
    return this.http.delete<void>(this.urlu + "/eliminar", { body: u});
  }

}
