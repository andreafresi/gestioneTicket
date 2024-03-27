import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Cliente } from '../models/cliente';
import { Reclamo } from '../models/reclamo';
import { Negozio } from '../models/negozio';
import { Regione } from '../models/regione';

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

  

}
