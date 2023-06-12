import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LugarComponent } from './components/lugar/lugar.component';
import { ReporteComponent } from './components/reporte/reporte.component';
import { GetLugaresComponent } from './components/subComponentsLugar/get-lugares/get-lugares.component';
import { GetLugarComponent } from './components/subComponentsLugar/get-lugar/get-lugar.component';
import { PostLugarComponent } from './components/subComponentsLugar/post-lugar/post-lugar.component';
import { DeleteLugarComponent } from './components/subComponentsLugar/delete-lugar/delete-lugar.component';
import { PutLugarComponent } from './components/subComponentsLugar/put-lugar/put-lugar.component';
import { PatchLugarComponent } from './components/subComponentsLugar/patch-lugar/patch-lugar.component';
import { GetReportesComponent } from './components/subComponentsReporte/get-reportes/get-reportes.component';
import { GetReporteComponent } from './components/subComponentsReporte/get-reporte/get-reporte.component';
import { PostReporteComponent } from './components/subComponentsReporte/post-reporte/post-reporte.component';
import { DeleteReporteComponent } from './components/subComponentsReporte/delete-reporte/delete-reporte.component';
import { PutReporteComponent } from './components/subComponentsReporte/put-reporte/put-reporte.component';
import { PatchReporteComponent } from './components/subComponentsReporte/patch-reporte/patch-reporte.component';
import { LugarPorCoordenadasComponent } from './components/subComponentsLugar/lugar-por-coordenadas/lugar-por-coordenadas.component';
import { IncendioPorLugarComponent } from './components/subComponentsReporte/incendio-por-lugar/incendio-por-lugar.component';
import { CantIncendiosFechaComponent } from './components/subComponentsReporte/cant-incendios-fecha/cant-incendios-fecha.component';

const routes: Routes = [
      {path: '', component: HomeComponent},
      {path: 'login', component: LogInComponent},
      {path: 'signin', component: SignInComponent},
      {path: 'lugar', component: LugarComponent},
      {path: 'reporte', component:ReporteComponent}
      ];

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    LogInComponent,
    HomeComponent,
    LugarComponent,
    ReporteComponent,
    GetLugaresComponent,
    GetLugarComponent,
    PostLugarComponent,
    DeleteLugarComponent,
    PutLugarComponent,
    PatchLugarComponent,
    GetReportesComponent,
    GetReporteComponent,
    PostReporteComponent,
    DeleteReporteComponent,
    PutReporteComponent,
    PatchReporteComponent,
    LugarPorCoordenadasComponent,
    IncendioPorLugarComponent,
    CantIncendiosFechaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
