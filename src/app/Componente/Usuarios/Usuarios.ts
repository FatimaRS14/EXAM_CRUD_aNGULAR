import { Roles } from "../Roles/Roles";

export class Usuarios{
    idUsuario !: number;
    nombre !: String;
    apellidoP !: String;
    apellidoM !: String;
    sexo !: String;
    correo !: String;
    fechaNacimiento !: Date;
    fechaCreacion !: Date;
    rolId !: Roles;
}