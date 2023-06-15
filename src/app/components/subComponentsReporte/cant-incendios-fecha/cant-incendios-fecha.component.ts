import { Component } from '@angular/core';
import { AppServiceService } from 'src/app/app-service.service';

@Component({
  selector: 'app-cant-incendios-fecha',
  templateUrl: './cant-incendios-fecha.component.html',
  styleUrls: ['./cant-incendios-fecha.component.css']
})
export class CantIncendiosFechaComponent {
  cantidad: string = "";
  show: boolean = false;
  fecha: Date = new Date("0000-00-00");

  constructor(private service : AppServiceService){}

  getReporteFechaApi() {
    if(String(this.fecha) != "0000-00-00"){
    this.service.incendiosFecha(this.fecha).subscribe((response) => {
      console.log('respuesta ', response);
      this.cantidad = String(response)
    });
  }
  }

}
