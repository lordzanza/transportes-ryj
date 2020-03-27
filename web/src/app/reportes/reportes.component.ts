import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})
export class ReportesComponent implements OnInit {
  reportes: any = [];
  constructor() { }
  crearreporte(
    acpm: any,
    peajes: any,
    seguro_carro: any,
    seguro_trabajadores: any,
    liquidacion_anual: any,
    plan_celular: any,
    sueldo_trabajador: any,
    cotas_llantas: any,
    cambio_aceite: any,
    dotacion_trabajadores: any,
    prima_6meses: any,
    seguro_tecnomecanica: any,

  ){
    
  var gastomensual = {
    "acpm": acpm,
    "peajes": peajes,
    "seguro_carro": seguro_carro,
    "liquidacion_anual": liquidacion_anual,
    "plan_celular": plan_celular,
    "sueldo_trabajador": sueldo_trabajador,
    "cotas_llantas": cotas_llantas,
    "cambio_aceite": cambio_aceite,
    "dotacion_trabajadores": dotacion_trabajadores,
    "prima_6meses": prima_6meses,
    "seguro_tecnomecanica": seguro_tecnomecanica,
    }
    this.reportes.push(gastomensual)
    console.log(this.reportes)
  }
  
  ngOnInit() {
  }

}
