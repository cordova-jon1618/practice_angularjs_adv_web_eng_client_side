import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {


  isLoggedIn: boolean = false;

  constructor() {

  }

  onLogout() {

    console.log('User logged out');

    this.isLoggedIn = false; 
  }

}
