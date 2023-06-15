import { Component } from '@angular/core';
import { AppServiceService } from 'src/app/app-service.service';

@Component({
  selector: 'app-get-reportes',
  templateUrl: './get-reportes.component.html',
  styleUrls: ['./get-reportes.component.css']
})
export class GetReportesComponent{
  reporte: any[] = [];
  show: boolean = false;

  constructor(private service : AppServiceService){}

  getReportesApi() {
    this.service.getReportes().subscribe((response) => {
      console.log('respuesta ', response);
      this.reporte = Array.isArray(response) ? response : [response];
      console.log(this.reporte);
    });
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
