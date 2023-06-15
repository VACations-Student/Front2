import { Component } from '@angular/core';
import { AppServiceService } from 'src/app/app-service.service';

@Component({
  selector: 'app-delete-reporte',
  templateUrl: './delete-reporte.component.html',
  styleUrls: ['./delete-reporte.component.css']
})
export class DeleteReporteComponent {
  reporte: any[] = [];
  show: boolean = false;
  id: string = ""
  
  constructor(private service : AppServiceService){}

  deleteReporteApi() {
    if(this.id != ""){
    this.service.deleteReporte(this.id).subscribe((response) => {
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
