import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { BlackboardComponent } from './blackboard/blackboard.component';
import { UsersComponent } from './users/users.component';
import { MenuComponent } from './menu/menu.component';
import { RegistroDeConductorComponent } from './registro-de-conductor/registro-de-conductor.component';
import { GastosVehiculoComponent } from './gastos-vehiculo/gastos-vehiculo.component';
import { ReportesComponent } from './reportes/reportes.component';
import { RegistroVehiculosComponent } from './registro-vehiculos/registro-vehiculos.component';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'blackboard', component: BlackboardComponent },
  { path: 'users', component: UsersComponent },
  { path: 'registrarConductor', component: RegistroDeConductorComponent },
  { path: 'gastosVehiculo', component: GastosVehiculoComponent },
  { path: 'reportes', component: ReportesComponent },
  { path: 'registroVehiculo', component: RegistroVehiculosComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BlackboardComponent,
    UsersComponent,
    MenuComponent,
    RegistroDeConductorComponent,
    GastosVehiculoComponent,
    ReportesComponent,
    RegistroVehiculosComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      routes,
      { useHash: true } // <-- debugging purposes only
    ),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
