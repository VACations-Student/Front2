import { Component, OnInit } from '@angular/core';
import { AppServiceService } from 'src/app/app-service.service';

@Component({
  selector: 'app-get-reportes',
  templateUrl: './get-reportes.component.html',
  styleUrls: ['./get-reportes.component.css']
})
export class GetReportesComponent implements OnInit{

  reporte : any []=[]

  constructor(private service : AppServiceService){

  }

  ngOnInit(): void {
    this.getReportesApi();
  }

  getReportesApi(){
    this.service.getReportes().subscribe((response) => {
      console.log('respuesta ', response)
      this.reporte = Array.isArray(response) ? response : [response];
    })
  }

}
