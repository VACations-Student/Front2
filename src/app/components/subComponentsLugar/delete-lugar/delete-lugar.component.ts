import { Component } from '@angular/core';
import { AppServiceService } from 'src/app/app-service.service';

@Component({
  selector: 'app-delete-lugar',
  templateUrl: './delete-lugar.component.html',
  styleUrls: ['./delete-lugar.component.css']
})
export class DeleteLugarComponent {
  lugar: any[] = [];
  show: boolean = false;
  id: string = ""

  constructor(private service: AppServiceService) {}

  deleteLugarApi(){
    this.service.deleteLugar(this.id).subscribe((response) => {
      console.log('respuesta ', response);
      this.getLugaresApi()
    });
  }

  getLugaresApi() {
    this.service.getLugares().subscribe((response) => {
      console.log('respuesta ', response);
      this.lugar = Array.isArray(response) ? response : [response];
      console.log(this.lugar);
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
