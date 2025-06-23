import { Component, OnInit } from '@angular/core';
import { Ws } from '../../Service/ws';
import { Usuarios } from '../Usuarios/Usuarios';
import { CommonModule } from '@angular/common';
import { Route, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listar-u',
  imports: [CommonModule],
  templateUrl: './listar-u.html',
  styleUrl: './listar-u.css'
})
export class ListarU implements OnInit{
    constructor(private service:Ws, private router:Router){}
    u = new Usuarios;
    //usuario != Usuarios[];

    ngOnInit(): void {
      this.activarPeticionListar();
    }

    trackByUsuarioId(index: number, usuario: Usuarios): number {
      return usuario.idUsuario;
    }

    usuario !: Usuarios[];

    activarPeticionListar(){
      this.service.listarU().subscribe(respuesta =>{
        console.log(JSON.stringify(respuesta));
        this.usuario = respuesta;
      })
    }

    guardarU(){
      this.router.navigate(['guardarU']);
    }

    editar(idUsuario: number){
      console.log("ID recibido al hacer clic en editar:", idUsuario);
      localStorage.setItem("idUsuario", idUsuario.toString());
      this.router.navigate(['editarU']);
    }

    eliminar(idUsuario: number){
      this.u.idUsuario = idUsuario;
      const swalWithBootstrapButtons = Swal.mixin({
                customClass: {
                  confirmButton: "btn btn-success",
                  cancelButton: "btn btn-danger"
                },
                buttonsStyling: false
              });
      
              swalWithBootstrapButtons.fire({
                title: "Eliminar",
                text: "¿Seguro que quieres eliminar el usuario?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonText: "Sí, eliminar!",
                cancelButtonText: "No, cancelar!",
                reverseButtons: true
              }).then((result) => {
                if (result.isConfirmed) {
                  this.service.eliminarU(this.u).subscribe({
                  next: () => {
                    this.activarPeticionListar();
                    swalWithBootstrapButtons.fire({
                     title: "¡Eliminado!",
                     text: "El usuario se eliminó correctamente.",
                     icon: "success"
                     });
                      },
                      error: (err) => {
                      console.error("Error al eliminar el usuario:", err);
                      Swal.fire("Error", "No se pudo eliminar el usuario.", "error");
                      }
                      });
                      } else if (result.dismiss === Swal.DismissReason.cancel) {
                      swalWithBootstrapButtons.fire({
                        title: "Cancelado",
                        text: "Tu lista sigue normal :)",
                        icon: "error"
                      });
                    }
                  });   

    }
}
