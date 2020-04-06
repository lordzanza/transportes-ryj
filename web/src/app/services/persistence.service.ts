import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PersistenceService {

  constructor(private http: HttpClient) { }

  getUsuarios(lista: any[]): Subscription {
    lista.length = 0;
    return this.http.get<any>(environment.baseUrl + '/usuarios')
      .subscribe((items) => lista.push(...items),
        (error) => console.error(error.message));
  }

  postUsuarios(usuario: any, next?: (value: any) => void): Subscription {
    return this.http.post<any>(environment.baseUrl + '/usuarios', usuario)
      .subscribe(next,
        (error) => alert(error.message));
  }

  getVehiculos(lista: any[]): Subscription {
    lista.length = 0;
    return this.http.get<any>(environment.baseUrl + '/vehiculos')
      .subscribe((items) => lista.push(...items),
        (error) => console.error(error.message));
  }

  postVehiculos(vehiculo: any, next?: (value: any) => void): Subscription {
    return this.http.post<any>(environment.baseUrl + '/vehiculos', vehiculo)
      .subscribe(next,
        (error) => alert(error.message));
  }

  getLicencias(lista: any[]): Subscription {
    lista.length = 0;
    return this.http.get<any>(environment.baseUrl + '/licencias')
      .subscribe((items) => lista.push(...items),
        (error) => console.error(error.message));
  }

  postLicencias(licencia: any, next?: (value: any) => void): Subscription {
    return this.http.post<any>(environment.baseUrl + '/licencias', licencia)
      .subscribe(next,
        (error) => alert(error.message));
  }

  getGastos(lista: any[]): Subscription {
    lista.length = 0;
    return this.http.get<any>(environment.baseUrl + '/gastos')
      .subscribe((items) => lista.push(...items),
        (error) => console.error(error.message));
  }

  postGastos(gastos: any, next?: (value: any) => void): Subscription {
    return this.http.post<any>(environment.baseUrl + '/gastos', gastos)
      .subscribe(next,
        (error) => alert(error.message));
  }

  getHistorial(lista: any[]): Subscription {
    lista.length = 0;
    return this.http.get<any>(environment.baseUrl + '/historial')
      .subscribe((items) => lista.push(...items),
        (error) => console.error(error.message));
  }

  putHistorial(historial: any, next?: (value: any) => void): Subscription {
    return this.http.put<any>(environment.baseUrl + '/historial', historial)
      .subscribe(next,
        (error) => alert(error.message));
  }

}
