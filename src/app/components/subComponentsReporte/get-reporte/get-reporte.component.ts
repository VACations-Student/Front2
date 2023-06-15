import { Component } from '@angular/core';
import { AppServiceService } from 'src/app/app-service.service';

@Component({
  selector: 'app-get-reporte',
  templateUrl: './get-reporte.component.html',
  styleUrls: ['./get-reporte.component.css']
})
export class GetReporteComponent {
  reporte: any[] = [];
  show: boolean = false;
  id: string = ""

  constructor(private service : AppServiceService){}

  getReporteApi() {
    if(this.id != ""){
    this.service.getReporte(this.id).subscribe((response) => {
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
