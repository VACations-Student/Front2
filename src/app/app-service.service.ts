import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

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

  getLugar(id : string){
    return this.http.get('/api/lugar/' + id, {headers : this.headersUpdate()})
  }

  postLugar(bodydata : JSON){
    return this.http.post('/api/lugar', bodydata, {headers : this.headersUpdate()})
  }

  putLugar(bodydata : JSON, id : string){
    return this.http.put('/api/lugar/' + id, bodydata, {headers : this.headersUpdate()})
  }

  patchLugar(bodydata : JSON, id : string){
    return this.http.put('/api/lugar/' + id, bodydata, {headers : this.headersUpdate()})
  }

  deleteLugar(id: string){
    return this.http.delete('/api/lugar/' + id, {headers : this.headersUpdate()})
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
