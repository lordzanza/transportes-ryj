import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro-de-conductor',
  templateUrl: './registro-de-conductor.component.html',
  styleUrls: ['./registro-de-conductor.component.css']
})
export class RegistroDeConductorComponent implements OnInit {
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
