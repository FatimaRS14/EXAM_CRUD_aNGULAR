import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Ws } from '../../Service/ws';
import { Router } from '@angular/router';
import { Roles } from '../Roles/Roles';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-guardar',
  imports: [FormsModule],
  templateUrl: './guardar.html',
  styleUrl: './guardar.css'
})
export class Guardar {
   constructor(private service:Ws, private router:Router){}
   r = new Roles;

   guardar(){
    this.service.guardarR(this.r).subscribe(respuesta =>{
      Swal.fire({
          title: "GUARDAR!",
          icon: "success",
          draggable: true,
          text: JSON.stringify(respuesta),
          showConfirmButton: false,
          timer: 2500
        });
        this.router.navigate(['listar']);
      }, error =>{
        Swal.fire({
          title: "Error",
          icon: "error",
          draggable: true,
          text: JSON.stringify(error.error.mensaje),
          showConfirmButton: false,
          timer: 2500
        });
    })
   }
}
