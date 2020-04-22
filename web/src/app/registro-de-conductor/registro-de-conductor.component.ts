import { Component, OnInit } from '@angular/core';
import { PersistenceService } from '../services/persistence.service';

@Component({
  selector: 'app-registro-de-conductor',
  templateUrl: './registro-de-conductor.component.html',
  styleUrls: ['./registro-de-conductor.component.css']
})
export class RegistroDeConductorComponent implements OnInit {
  licencias: any = [];
  constructor(private persistService: PersistenceService) { }

  ngOnInit() {
    this.persistService.getLicencias(this.licencias);
  }

  crearLicencia(idConductor: number, categoria: string, restricciones: string) {
    const licencia = { id_conductor: idConductor, categoria, restricciones };
    this.persistService.postLicencias(licencia, (value) => {
      this.persistService.getLicencias(this.licencias);
      alert(`La licencia con categoria ${value.categoria},
             para el conductor #${value.id_conductor},
             fue registrada con exito!`);
    });
  }

}
