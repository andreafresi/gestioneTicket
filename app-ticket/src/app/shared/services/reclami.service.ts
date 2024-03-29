import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Cliente } from '../models/cliente';
import { Reclamo } from '../models/reclamo';
import { Negozio } from '../models/negozio';
import { Regione } from '../models/regione';
import { Observable } from 'rxjs';
import { OggettoFiltro } from '../models/oggettoFiltro';
import { ReclamiListComponent } from 'src/app/pages/reclami-list/reclami-list.component';


@Injectable({
  providedIn: 'root'
})
export class ReclamiService {

  constructor(private readonly httpClient: HttpClient) {}

  

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

  getNegozioById(id: string) : Observable<any>{
    return this.httpClient.get<Negozio>('http://localhost:3000/reclamo/' + id);
  }

  getReclamiByFilter(filterObject: OggettoFiltro,reclamiList:Reclamo[]){

    // let reclamiFiltrati : Reclamo={}
    // reclamiList.forEach(reclamo => {
    //   if (
    //     reclamo.negozio?.id == filterObject.codice &&
    //     reclamo.negozio?.descrizione?.includes(filterObject.descNegozio!) &&
    //     reclamo.stato == filterObject.stato &&
    //     reclamo.gestione == filterObject.gestione &&
    //     reclamo.dataApertura == filterObject.data &&
    //     reclamo.regione == filterObject.area &&
    //     reclamo.causale?.includes(filterObject.causale!) &&
    //     reclamo.id == filterObject.idReclamo &&
    //     reclamo.customer?.nome == filterObject.nome &&
    //     reclamo.customer?.cognome == filterObject.cognome
    // ) {
    //     reclamiFiltrati=(reclamo);
    //     return reclamiFiltrati;
    // }
      
    // });

    
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

  addReclamo(reclamo: Reclamo): Observable<any> {
    return this.httpClient.post('http://localhost:3000/reclamo/', reclamo);
  }
}
