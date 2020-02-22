import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BlackboardComponent } from './blackboard/blackboard.component';
import  { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'blackboard', component: BlackboardComponent },
  { path: 'users', component: UsersComponent },
];



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BlackboardComponent,
    UsersComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      routes,
      {useHash: true} // <-- debugging purposes only
    ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
