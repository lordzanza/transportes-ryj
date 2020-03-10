import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro-vehiculos',
  templateUrl: './registro-vehiculos.component.html',
  styleUrls: ['./registro-vehiculos.component.css']
})
export class RegistroVehiculosComponent implements OnInit {
  vehiculos: any = [];
  constructor() { }

  creavehiculo(
    Id_vehiculo,
    nombre,
    placaVehiculo,
    Cilindraje,
    color,
    Modelo
  ){
    
  var vehiculoModel = {
    "Id_vehiculo": Id_vehiculo,
    "nombre": nombre,
    "placaVehiculo": placaVehiculo,
    "Cilindraje": Cilindraje,
    "color": color,
    "Modelo": Modelo
    }
    this.vehiculos.push(vehiculoModel)
    console.log(this.vehiculos)
  }
  
  ngOnInit() {
  }

}
