import { Component, OnInit } from '@angular/core';
import { Ws } from '../../Service/ws';
import { Roles } from '../Roles/Roles';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listar',
  imports: [],
  templateUrl: './listar.html',
  styleUrl: './listar.css'
})
export class Listar implements OnInit{
  constructor(private service: Ws, private router:Router){}

  ngOnInit(): void {
    this.activarPeticionListar();
  }
  r = new Roles();
  rol !: Roles[];

  activarPeticionListar(){
    this.service.listarR().subscribe(respuesta =>{
      console.log(JSON.stringify(respuesta));
      this.rol = respuesta;
    })
  }

  guardar(){
    this.router.navigate(['guardar']);
  }

  editar(idRol: number){
    localStorage.setItem("idRol", idRol.toString());
    this.router.navigate(['editar']);
  }

  eliminar(idRol: number){
    this.r.idRol = idRol;
     const swalWithBootstrapButtons = Swal.mixin({
          customClass: {
            confirmButton: "btn btn-success",
            cancelButton: "btn btn-danger"
          },
          buttonsStyling: false
        });

        swalWithBootstrapButtons.fire({
          title: "Eliminar",
          text: "¿Seguro que quieres eliminar el rol?",
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "Sí, eliminar!",
          cancelButtonText: "No, cancelar!",
          reverseButtons: true
        }).then((result) => {
          if (result.isConfirmed) {
            this.service.eliminarR(this.r).subscribe({
              next: () => {
                this.activarPeticionListar();
                swalWithBootstrapButtons.fire({
                  title: "¡Eliminado!",
                  text: "El rol se eliminó correctamente.",
                  icon: "success"
                });
              },
              error: (err) => {
                console.error("Error al eliminar el rol:", err);
                Swal.fire("Error", "No se pudo eliminar el rol.", "error");
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
