import { Component } from '@angular/core';
import { AppServiceService } from 'src/app/app-service.service';

@Component({
  selector: 'app-patch-lugar',
  templateUrl: './patch-lugar.component.html',
  styleUrls: ['./patch-lugar.component.css']
})
export class PatchLugarComponent {
  lugarObj: any = {
    id: "",
    nombre: "",
    latitud: "",
    longitud: ""
  };
  lugar: any[] = [];
  id: string = "";
  show: boolean = false;

  constructor(private service: AppServiceService) {}

  patchLugarApi(){
    this.service.patchLugar(this.lugarObj, this.id).subscribe((response) =>{
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
