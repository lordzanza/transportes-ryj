import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gastos-vehiculo',
  templateUrl: './gastos-vehiculo.component.html',
  styleUrls: ['./gastos-vehiculo.component.css']
})
export class GastosVehiculoComponent implements OnInit {

  gastosvehiculo: any = [];
  constructor() { }


  guardarReporteVehiculo(
    acpm ,
    peajes,
    seguro_carro,
    cotas_llantas,
    cambio_aceite,
    seguro_tecnomecanica

  ){
    
  var gastosvehiculos = {
    "acpm": acpm,
    "peajes": peajes,
    "seguro_carro": seguro_carro,
    "cotas_llantas": cotas_llantas,
    "cambio_aceite": cambio_aceite,
    "seguro_tecnomecanica": seguro_tecnomecanica,
    }
    this.gastosvehiculo.push(gastosvehiculos)
    console.log(this.gastosvehiculo)
  }
  ngOnInit() {
  }

}
