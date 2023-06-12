import { Component } from '@angular/core';
import { AppServiceService } from 'src/app/app-service.service';

@Component({
  selector: 'app-post-lugar',
  templateUrl: './post-lugar.component.html',
  styleUrls: ['./post-lugar.component.css']
})
export class PostLugarComponent{
  lugarObj: any = {
    id: "",
    nombre: "",
    latitud: "",
    longitud: ""
  };
  lugar: any[] = [];
  show: boolean = false;

  constructor(private service: AppServiceService) {}

  postLugarApi(){
    if(this.lugarObj.id != "" && this.lugarObj.nombre != "" && this.lugarObj.latitud != "" && this.lugarObj.longitud != ""){
    this.service.postLugar(this.lugarObj).subscribe((response) =>{
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
