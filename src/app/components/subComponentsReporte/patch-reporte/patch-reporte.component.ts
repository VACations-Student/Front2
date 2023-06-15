import { Component } from '@angular/core';
import { AppServiceService } from 'src/app/app-service.service';

@Component({
  selector: 'app-patch-reporte',
  templateUrl: './patch-reporte.component.html',
  styleUrls: ['./patch-reporte.component.css']
})
export class PatchReporteComponent {
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

  patchReporteApi(){
    if(this.id != ""){
      if(this.reporteObj.id == ""){
        delete this.reporteObj["id"]
      }
      if(this.reporteObj.fecha == ""){
        delete this.reporteObj["fecha"]
      }
      if(this.reporteObj.estado == ""){
        delete this.reporteObj["estado"]
      }
      if(this.reporteObj.lugar == ""){
        delete this.reporteObj["lugar"]
      }
    this.service.patchReporte(this.reporteObj, this.id).subscribe((response) =>{
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
