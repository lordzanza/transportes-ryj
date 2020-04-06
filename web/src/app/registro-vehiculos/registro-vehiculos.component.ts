import { Component, OnInit } from '@angular/core';
import { PersistenceService } from '../services/persistence.service';

@Component({
  selector: 'app-registro-vehiculos',
  templateUrl: './registro-vehiculos.component.html',
  styleUrls: ['./registro-vehiculos.component.css']
})
export class RegistroVehiculosComponent implements OnInit {
  vehiculos: any = [];
  constructor(private persistService: PersistenceService) { }

  ngOnInit() {
    this.persistService.getVehiculos(this.vehiculos);
  }

  crearVehiculo(descripcion: string, placa: string, cilindraje: number, color: string, modelo: number) {
    this.persistService.postVehiculos({ descripcion, placa, cilindraje, color, modelo }, (value) => {
      this.persistService.getVehiculos(this.vehiculos);
      alert(`El vehiculo con placa ${value.placa} fue registrado con exito!`);
    });
  }

}
