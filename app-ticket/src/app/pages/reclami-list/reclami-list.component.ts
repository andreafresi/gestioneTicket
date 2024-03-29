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

  regioniItaliane: string[] = [
    "", //vuoto
    "Abruzzo",
    "Basilicata",
    "Calabria",
    "Campania",
    "Emilia-Romagna",
    "Friuli-Venezia Giulia",
    "Lazio",
    "Liguria",
    "Lombardia",
    "Marche",
    "Molise",
    "Piemonte",
    "Puglia",
    "Sardegna",
    "Sicilia",
    "Toscana",
    "Trentino-Alto Adige",
    "Umbria",
    "Valle d'Aosta",
    "Veneto",
];

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
  });

  goToReclamiNew() {
    this.router.navigate(['reclami/new']);
  }

  ngOnInit(): void {
    this.getReclami();
  }
  getReclami() {
    this.reclamiService.getReclami().subscribe((res) => {
      this.listReclamo = res;
    });
  }

  searchFilter(): any {
    const filterData = this.ricercaForm.value;
    let reclamiFiltrati = [...this.listReclamo];

    reclamiFiltrati = reclamiFiltrati.filter(
      (reclamo) =>
        (!filterData.idReclamo || reclamo.id === filterData.idReclamo) &&
        (!filterData.codice || reclamo.negozio?.id === filterData.codice) &&
        (!filterData.descrizioneNegozio || reclamo.negozio?.descrizione === filterData.descrizioneNegozio) &&
        (!filterData.stato || reclamo.stato === filterData.stato) &&
        (!filterData.gestione || reclamo.gestione === filterData.gestione) &&
        (!filterData.data || reclamo.dataApertura === filterData.data) &&
        (!filterData.area || reclamo.provinciaTik === filterData.area) &&
        (!filterData.causale || reclamo.causale === filterData.causale) &&
        (!filterData.nome || reclamo.customer?.nome === filterData.nome) &&
        (!filterData.cognome || reclamo.customer?.cognome === filterData.cognome)
    );

    this.listReclamo = reclamiFiltrati;
  }
  cancellaFiltri() {
    this.getReclami();
    this.ricercaForm.reset();
  }

  Nascondi: boolean = true;
  visible: boolean = false;
  onclick() {
    this.Nascondi = !this.Nascondi;
    this.visible = !this.visible;
  }
}
