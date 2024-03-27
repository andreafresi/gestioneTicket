import { Component } from '@angular/core';

@Component({
  selector: 'app-reclami-list',
  templateUrl: './reclami-list.component.html',
  styleUrls: ['./reclami-list.component.scss']
})
export class ReclamiListComponent {


  columns = [{ prop: 'ID RECLAMO' }, { name: 'SEGNALATO IL' }, { name: 'PRESO IN CARICO IL' }, { name: 'CHIUSO IL' }, { name: 'NEGOZIO' }, { name: 'MANAGER' }, { name: 'CLIENTE' }, { name: 'STATO' }, { name: 'GESTIONE' }, { name: 'CAUSALE DEL RECLAMO' }, { name: 'SODDISFAZIONE' }, { name: '' }];
}
