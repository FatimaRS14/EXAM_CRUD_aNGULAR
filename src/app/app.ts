import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'RolesUsuariosCRUD';

  constructor(private router:Router){

  }

  listar(){
    this.router.navigate(['listar']);
  }

  listarU(){
    this.router.navigate(['listarU']);
  }
}
