import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { right } from '@popperjs/core';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  constructor(private http : HttpClient) { }

  headersUpdate(){

  const tokenexample = localStorage.getItem("token")
  
   const header = new HttpHeaders({
      'content-type' : 'application/json',
      'authorization' : String(tokenexample)
    });

    return header
  }

  getLugares(){
    return this.http.get('/api/lugar', {headers : this.headersUpdate()})
  }

  getReportes(){
    return this.http.get('/api/reporte', {headers : this.headersUpdate()})
  }

  signin(bodydata : JSON){
    return this.http.post('/api/usuario/signin', bodydata)
  }

  signup(bodydata : JSON){
    return this.http.post('/api/usuario/signup', bodydata)
  }
}
