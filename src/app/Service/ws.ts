import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Roles } from '../Componente/Roles/Roles';

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

}
