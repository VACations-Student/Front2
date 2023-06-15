import { Component } from '@angular/core';
import { AppServiceService } from 'src/app/app-service.service';

@Component({
  selector: 'app-incendio-por-lugar',
  templateUrl: './incendio-por-lugar.component.html',
  styleUrls: ['./incendio-por-lugar.component.css']
})
export class IncendioPorLugarComponent {
  reporte: any[] = [];
  show: boolean = false;
  id: string = ""

  constructor(private service : AppServiceService){}

  getReporteLugarApi() {
    if(this.id != ""){
    this.service.incendiosLugar(this.id).subscribe((response) => {
      console.log('respuesta ', response);
      this.reporte = Array.isArray(response) ? response : [response];
      console.log(this.reporte);
    });
  }
  }

  generateTableRow() {
    return this.reporte.map((item) => ({
      _id: item._id,
      id: item.id,
      fecha: item.fecha,
      estado: item.estado,
      id_lugar: item.lugar
    }));
  }

}
