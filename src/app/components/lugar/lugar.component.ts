import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lugar',
  templateUrl: './lugar.component.html',
  styleUrls: ['./lugar.component.css']
})
export class LugarComponent {

   constructor(private router:Router){}
   
  volverHome(){
    this.router.navigate(['']);
  }
}
