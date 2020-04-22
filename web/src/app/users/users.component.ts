import { Component, OnInit } from '@angular/core';
import { PersistenceService } from '../services/persistence.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  usuarios: any = [];
  constructor(private persistService: PersistenceService) { }

  ngOnInit() {
    this.persistService.getUsuarios(this.usuarios);
  }

  crearUsuario(
    nombres: string, apellidos: string, tipoDoc: string, documento: string, correo: string, direccion: string, ciudad: string,
    usuario: string, clave: string, tipo: string, estado: string, numId: number
  ) {
    const user: any = {
      nombres, apellidos, tipo_documento: tipoDoc, documento, correo, direccion, ciudad, usuario, clave, tipo, estado, numero_id: numId
    };
    this.persistService.postUsuarios(user, (value) => {
      this.persistService.getUsuarios(this.usuarios);
      alert(`El usuario ${value.nombres} ${value.apellidos},
             con identificacion ${value.tipo_documento} ${value.documento},
             fue registrado con exito!`);
    });
  }

}
