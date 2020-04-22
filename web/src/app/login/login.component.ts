import { Component, OnInit } from '@angular/core';
import { PersistenceService } from '../services/persistence.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private persistService: PersistenceService, private router: Router) { }

  ngOnInit() {
  }

  login(usuario: string, clave: string) {
    this.persistService.postTokens({ usuario, clave }, (value) => {
      sessionStorage.setItem('token-key', value.type);
      sessionStorage.setItem('token-val', value.token);
      this.router.navigate(['/blackboard']);
    });
  }

}
