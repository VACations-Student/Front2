import { Component } from '@angular/core';
import { AppServiceService } from 'src/app/app-service.service';

@Component({
  selector: 'app-put-reporte',
  templateUrl: './put-reporte.component.html',
  styleUrls: ['./put-reporte.component.css']
})
export class PutReporteComponent {
  reporteObj: any = {
    id: "",
    fecha: "",
    estado: "",
    lugar: ""
  };
  reporte: any[] = [];
  id: string = "";
  show: boolean = false;

  constructor(private service: AppServiceService) {}

  putReporteApi(){
    if(this.reporteObj.id != "" && this.reporteObj.fecha != "" && this.reporteObj.estado != "" && this.reporteObj.lugar != ""){
    this.service.putReporte(this.reporteObj, this.id).subscribe((response) =>{
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
