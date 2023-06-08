import { Component, OnInit } from '@angular/core';
import { AppServiceService } from 'src/app/app-service.service';

@Component({
  selector: 'app-get-lugares',
  templateUrl: './get-lugares.component.html',
  styleUrls: ['./get-lugares.component.css']
})
export class GetLugaresComponent implements OnInit {
  lugar: any[] = [];

  constructor(private service: AppServiceService) {}

  ngOnInit(): void {
    this.getLugaresApi();
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
