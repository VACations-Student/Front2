import { Component } from '@angular/core';
import { AppServiceService } from 'src/app/app-service.service';

@Component({
  selector: 'app-lugar-por-coordenadas',
  templateUrl: './lugar-por-coordenadas.component.html',
  styleUrls: ['./lugar-por-coordenadas.component.css']
})
export class LugarPorCoordenadasComponent {
  lugar: any[] = [];
  show: boolean = false;
  latitud: string = "";
  longitud: string = "";

  constructor(private service: AppServiceService) {}
  
  getLugarCoordenadasApi() {
    this.service.lugarCoordenadas(this.latitud, this.longitud).subscribe((response) => {
      console.log('respuesta ', response);
      console.log(response)
      this.lugar = Array.isArray(response) ? response : [response];
      console.log(this.lugar)
    });
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
