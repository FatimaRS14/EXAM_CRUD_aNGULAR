import { Component, OnInit } from '@angular/core';
import { Ws } from '../../Service/ws';
import { Router } from '@angular/router';
import { Roles } from '../Roles/Roles';
import Swal from 'sweetalert2';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-editar',
  imports: [FormsModule],
  templateUrl: './editar.html',
  styleUrl: './editar.css'
})
export class Editar implements OnInit{
  constructor(private service: Ws, private router:Router){}

  r = new Roles;

  ngOnInit(): void {
    this.buscar();
  }

  buscar(){
    this.r.idRol = Number(localStorage.getItem("idRol"));
    this.service.buscarR(this.r).subscribe(data =>{
      console.log(JSON.stringify(data));
      this.r = data;
    })
  }

  editar() {
  this.service.editarR(this.r).subscribe({
    next: data => {
      Swal.fire({
        title: 'Éxito',
        text: 'Rol editado correctamente',
        icon: 'success',
        timer: 2500
      });
      this.router.navigate(['listar']);
    },
    error: err => {
      console.error('Error al editar:', err);

      Swal.fire({
        title: 'Error',
        text: err?.error?.mensaje || 'No se pudo editar el rol. Verifica que exista.',
        icon: 'error',
        timer: 3000
      });
    }
  });
}


}
