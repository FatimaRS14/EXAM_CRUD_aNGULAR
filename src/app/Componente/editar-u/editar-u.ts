import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Ws } from '../../Service/ws';
import { Router } from '@angular/router';
import { Usuarios } from '../Usuarios/Usuarios';
import { Roles } from '../Roles/Roles';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-u',
  imports: [FormsModule, CommonModule],
  templateUrl: './editar-u.html',
  styleUrl: './editar-u.css'
})
export class EditarU implements OnInit{
  constructor(private service:Ws, private router:Router){}
  rol : Roles[] = [];
  u = new Usuarios();
  rolIdSolo: number = 0;
  ngOnInit(): void {
    
  }

  buscarU(){
    this.u.idUsuario = Number(localStorage.getItem("idUsuario"));
    this.service.buscarU(this.u).subscribe(data =>{
      console.log(JSON.stringify(data));
      this.u = data;
      
    })
  }

  editarU() {
  if (!this.rolIdSolo || this.rolIdSolo <= 0) {
    Swal.fire({
      title: 'Error',
      icon: 'warning',
      text: 'Por favor, selecciona un rol válido.',
      showConfirmButton: true
    });
    return;
  }

  this.u.rolId = { idRol: this.rolIdSolo };

  this.service.editarU(this.u).subscribe({
    next: () => {
      Swal.fire({
        title: 'EDITADO',
        text: 'Usuario editado correctamente',
        icon: 'success',
        timer: 2000,
        showConfirmButton: false
      });
      this.router.navigate(['listarU']);
    },
    error: (error) => {
      console.error('Error al editar usuario:', error);
      Swal.fire({
        title: 'Error',
        icon: 'error',
        text: error?.error?.mensaje || 'Ocurrió un error al editar el usuario.',
        showConfirmButton: true
      });
    }
  });
}


}
