import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Reclamo } from 'src/app/shared/models/reclamo';
import { ReclamiService } from 'src/app/shared/services/reclami.service';
import { OggettoFiltro } from 'src/app/shared/models/oggettoFiltro';

@Component({
  selector: 'app-reclami-list',
  templateUrl: './reclami-list.component.html',
  styleUrls: ['./reclami-list.component.scss'],
})
export class ReclamiListComponent {
  listReclamo: Reclamo[] = [];
  oggettoFiltro: OggettoFiltro = {};

  constructor(
    private activeRoute: ActivatedRoute,
    private router: Router,
    private reclamiService: ReclamiService,
    private formBuilder: FormBuilder
  ) {}

  ricercaForm: FormGroup = this.formBuilder.group({
    codice: [''],
    descrizioneNegozio: [''],
    stato: [''],
    gestione: [''],
    data: [''],
    area: [''],
    causale: [''],
    idReclamo: [''],
    nome: [''],
    cognome: [''],
    banner: [''],
  });

  goToReclamiNew() {
    this.router.navigate(['reclami/new']);
  }

  ngOnInit(): void {
    this.reclamiService.getReclami();
  }
  getReclami() {
    this.reclamiService.getReclami().subscribe((res) => {
      this.listReclamo = res;
    });
  }

  searchFilter(): any {
    this.oggettoFiltro.codice = this.ricercaForm.controls['codice'].value;
    this.oggettoFiltro.descNegozio =
      this.ricercaForm.controls['descrizioneNegozio'].value;
    this.oggettoFiltro.stato = this.ricercaForm.controls['stato'].value;
    this.oggettoFiltro.gestione = this.ricercaForm.controls['gestione'].value;
    this.oggettoFiltro.data = this.ricercaForm.controls['data'].value;
    this.oggettoFiltro.area = this.ricercaForm.controls['area'].value;
    this.oggettoFiltro.causale = this.ricercaForm.controls['causale'].value;
    this.oggettoFiltro.idReclamo = this.ricercaForm.controls['idReclamo'].value;
    this.oggettoFiltro.nome = this.ricercaForm.controls['nome'].value;
    this.oggettoFiltro.cognome = this.ricercaForm.controls['cognome'].value;

    this.getReclami;

    let reclami = this.reclamiService.getReclamiByFilter(
      this.oggettoFiltro,
      this.listReclamo
    );
  }

  Nascondi:boolean = true
  visible:boolean = false
  onclick()
  {
    this.Nascondi = !this.Nascondi;
    this.visible = !this.visible
  }

}
