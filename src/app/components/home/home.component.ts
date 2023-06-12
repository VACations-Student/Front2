import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private router:Router){}

  irSignIn(){
    this.router.navigate(['signin']);
  }

  irLogIn(){
    this.router.navigate(['login']);
  }

  irLugar(){
    this.router.navigate(['lugar']);
  }

  irReporte(){
    this.router.navigate(['reporte']);
  }

  logOut(){
    localStorage.clear()
    console.log(localStorage)
  }

}
