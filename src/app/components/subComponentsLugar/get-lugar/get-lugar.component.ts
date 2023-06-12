import { Component } from '@angular/core';
import { AppServiceService } from 'src/app/app-service.service';

@Component({
  selector: 'app-get-lugar',
  templateUrl: './get-lugar.component.html',
  styleUrls: ['./get-lugar.component.css']
})
export class GetLugarComponent {
  lugar: any[] = [];
  show: boolean = false;
  id: string = ""

  constructor(private service: AppServiceService) {}
  
  getLugarApi() {
    if(this.id != ""){
    this.service.getLugar(this.id).subscribe((response) => {
      console.log('respuesta ', response);
      this.lugar = Array.isArray(response) ? response : [response];
      console.log(this.lugar);
    });
  }
  }

  generateTableRows() {
    return this.lugar.map((item) => ({
      _id: item._id,
      id: item.id,
      nombre: item.nombre,
      latitud: item.latitud,
      longitud: item.longitud
    }));
  }

}
