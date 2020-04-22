import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { decode } from 'jsonwebtoken';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  user: any;
  constructor(private router: Router) { }

  ngOnInit() {
    // this.user = decode(sessionStorage.getItem('token-val'));
  }

  logout() {
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }

}
