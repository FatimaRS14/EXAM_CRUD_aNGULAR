import { Component, OnInit } from '@angular/core';
import { Ws } from '../../Service/ws';
import { Router } from '@angular/router';
import { Usuarios } from '../Usuarios/Usuarios';
import { Roles } from '../Roles/Roles';
import Swal from 'sweetalert2';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-guardar-u',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './guardar-u.html',
  styleUrl: './guardar-u.css'
})
export class GuardarU implements OnInit {
  constructor(private service: Ws, private router: Router) {}

  roles: Roles[] = [];
  u = new Usuarios();

  rolIdSolo: number = 0;

  ngOnInit(): void {
    this.service.listarR().subscribe({
      next: (data) => {
        console.log('Roles cargados:', data);
        this.roles = data;
      },
      error: (error) => {
        console.error('Error al cargar roles:', error);
      }
    });
  }

  guardarU() {
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

    this.service.guardarU(this.u).subscribe({
      next: () => {
        Swal.fire({
          title: 'GUARDADO',
          text: 'Usuario registrado correctamente',
          icon: 'success',
          timer: 2000,
          showConfirmButton: false
        });
        this.router.navigate(['listarU']);
      },
      error: (error) => {
        console.error('Error al guardar usuario:', error);
        Swal.fire({
          title: 'Error',
          icon: 'error',
          text: error?.error?.mensaje || 'Ocurrió un error al guardar el usuario.',
          showConfirmButton: true
        });
      }
    });
  }
}
