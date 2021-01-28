import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ServicoPrestado } from './servico-prestado/servicoPrestado';
import { environment } from '../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ServicoPrestadoService {

  apiUrl: string = environment.apiURLBase + "/api/servicos-prestados"

  constructor(
    private http: HttpClient
  ) { }

  salvar(servicoPrestado: ServicoPrestado): Observable<ServicoPrestado>{
    return this.http.post<ServicoPrestado>(this.apiUrl,servicoPrestado);
  }

  buscar(nome: string, mes: number){
    const httpParams = new HttpParams()
            .set("nome",nome)
            .set("mes",mes ? mes.toString():'');
    /*if(!nome){
      nome=""
    }

    httpParams.set("nome",nome);

    if(mes){
      httpParams.set("mes", mes.toString());
    }*/
    console.log(httpParams);
    
    const url = this.apiUrl + "?" + httpParams.toString();
    console.log(url);
    return this.http.get<any>(url);
  }
}
