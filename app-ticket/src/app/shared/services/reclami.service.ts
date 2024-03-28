import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Cliente } from '../models/cliente';
import { Reclamo } from '../models/reclamo';
import { Negozio } from '../models/negozio';
import { Regione } from '../models/regione';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ReclamiService {

  constructor(private readonly httpClient: HttpClient) { }

  getClienti(){
    return this.httpClient.get<Cliente[]>('http://localhost:3000/cliente')
  }

  getReclami(){
    return this.httpClient.get<Reclamo[]>('http://localhost:3000/reclamo')
  }

  getNegozi(){
    return this.httpClient.get<Negozio[]>('http://localhost:3000/negozio')
  }

  getRegioni(){
    return this.httpClient.get<Regione[]>('http://localhost:3000/regione')
  }

  getReclamoById(id: string): Observable<any> {
    return this.httpClient.get<Reclamo>('http://localhost:3000/reclamo/' + id);
  }
  getClienteByMail(email: any) : Observable<any>{
    return this.httpClient.get<Cliente>('http://localhost:3000/cliente/' + email);
  }

  getNegozioById(id: string) : Observable<any>{
    return this.httpClient.get<Negozio>('http://localhost:3000/reclamo/' + id);
  }
  
  updateReclamo(reclamo:Reclamo): Observable<any>{
    return this.httpClient.patch(
      `http://localhost:3000/reclamo/${reclamo.id}`,
      reclamo
    );
  }

  deleteReclamo(reclamo: any): Observable<any> {
    return this.httpClient.delete(
      `http://localhost:3000/reclamo/${reclamo.id}`,
      reclamo
    );
  }

  addCliente(cliente: Cliente): Observable<any> {
    return this.httpClient.post('http://localhost:3000/cliente/', cliente);
  }

  addReclamo(cliente: Cliente): Observable<any> {
    return this.httpClient.post('http://localhost:3000/reclamo/', cliente);
  }
}
