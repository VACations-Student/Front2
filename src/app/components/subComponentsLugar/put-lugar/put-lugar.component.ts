import { Component } from '@angular/core';
import { AppServiceService } from 'src/app/app-service.service';

@Component({
  selector: 'app-put-lugar',
  templateUrl: './put-lugar.component.html',
  styleUrls: ['./put-lugar.component.css']
})
export class PutLugarComponent{
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

  putLugarApi(){
    if(this.lugarObj.id != "" && this.lugarObj.nombre != "" && this.lugarObj.latitud != "" && this.lugarObj.longitud != ""){
    this.service.putLugar(this.lugarObj, this.id).subscribe((response) =>{
      console.log('respuesta ', response);
      this.getLugaresApi()
    });
  }
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
