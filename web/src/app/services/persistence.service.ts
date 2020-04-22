import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PersistenceService {

  constructor(private http: HttpClient) { }

  postTokens(login: any, next?: (value: any) => void): Subscription {
    return this.http.post<any>(environment.baseUrl + '/tokens', login)
      .subscribe(next,
        (error) => alert(error.error));
  }

  getUsuarios(lista: any[]): Subscription {
    lista.length = 0; // limpiar lista
    return this.http.get<any>(environment.baseUrl + '/usuarios')
      .subscribe((items) => lista.push(...items), // agregar a lista
        (error) => console.error(error.error));
  }

  postUsuarios(usuario: any, next?: (value: any) => void): Subscription {
    return this.http.post<any>(environment.baseUrl + '/usuarios', usuario)
      .subscribe(next,
        (error) => alert(error.error));
  }

  getVehiculos(lista: any[]): Subscription {
    lista.length = 0; // limpiar lista
    return this.http.get<any>(environment.baseUrl + '/vehiculos')
      .subscribe((items) => lista.push(...items), // agregar a lista
        (error) => console.error(error.error));
  }

  postVehiculos(vehiculo: any, next?: (value: any) => void): Subscription {
    return this.http.post<any>(environment.baseUrl + '/vehiculos', vehiculo)
      .subscribe(next,
        (error) => alert(error.error));
  }

  getLicencias(lista: any[]): Subscription {
    lista.length = 0; // limpiar lista
    return this.http.get<any>(environment.baseUrl + '/licencias')
      .subscribe((items) => lista.push(...items), // agregar a lista
        (error) => console.error(error.error));
  }

  postLicencias(licencia: any, next?: (value: any) => void): Subscription {
    return this.http.post<any>(environment.baseUrl + '/licencias', licencia)
      .subscribe(next,
        (error) => alert(error.error));
  }

  getGastos(lista: any[]): Subscription {
    lista.length = 0; // limpiar lista
    return this.http.get<any>(environment.baseUrl + '/gastos')
      .subscribe((items) => lista.push(...items), // agregar a lista
        (error) => console.error(error.error));
  }

  postGastos(gasto: any, next?: (value: any) => void): Subscription {
    return this.http.post<any>(environment.baseUrl + '/gastos', gasto)
      .subscribe(next,
        (error) => alert(error.error));
  }

  getHistorial(lista: any[]): Subscription {
    lista.length = 0; // limpiar lista
    return this.http.get<any>(environment.baseUrl + '/historial')
      .subscribe((items) => lista.push(...items), // agregar a lista
        (error) => console.error(error.error));
  }

  putHistorial(historial: any, next?: (value: any) => void): Subscription {
    return this.http.put<any>(environment.baseUrl + '/historial', historial)
      .subscribe(next,
        (error) => alert(error.error));
  }

}
