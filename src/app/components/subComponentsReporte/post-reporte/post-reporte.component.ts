import { Component } from '@angular/core';
import { AppServiceService } from 'src/app/app-service.service';

@Component({
  selector: 'app-post-reporte',
  templateUrl: './post-reporte.component.html',
  styleUrls: ['./post-reporte.component.css']
})
export class PostReporteComponent {
  reporteObj: any = {
    id: "",
    fecha: "",
    estado: "",
    lugar: ""
  };
  reporte: any[] = [];
  show: boolean = false;

  constructor(private service: AppServiceService) {}

  postReporteApi(){
    if(this.reporteObj.id != "" && this.reporteObj.fecha != "" && this.reporteObj.estado != "" && this.reporteObj.lugar != ""){
    this.service.postReporte(this.reporteObj).subscribe((response) =>{
      console.log('respuesta ', response);
      this.getReportesApi()
    });
  }
}

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
