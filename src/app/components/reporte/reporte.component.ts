import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.component.html',
  styleUrls: ['./reporte.component.css']
})
export class ReporteComponent {

 constructor(private router:Router){}

  volverHome(){
    this.router.navigate(['']);
  }
}
