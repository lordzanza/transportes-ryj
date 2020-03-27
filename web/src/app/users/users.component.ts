import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  usuarios: any = [];
  constructor() { }

  crearUsuario(
    nombres,
    apellidos,
    tipoDeDocumento,
    documento,
    correo,
    direccion,
    contrasena,
    ciudad,
    tipoDeUsaurio
  ){
   
  var usauriosModel = {
    "nombres": nombres,
    "apellidos": apellidos,
    "tipoDeDocumento": tipoDeDocumento,
    "documento": documento,
    "correo": correo,
    "direccion": direccion,
    "contrasena": contrasena,
    "ciudad": ciudad,
    "tipoDeUsaurio": tipoDeUsaurio
    }
    console.log(usauriosModel)
    this.usuarios.push(usauriosModel)
  }

  ngOnInit() {
  }

}
