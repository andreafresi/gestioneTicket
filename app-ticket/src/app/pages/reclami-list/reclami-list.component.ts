import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Reclamo } from 'src/app/shared/models/reclamo';
import { ReclamiService } from 'src/app/shared/services/reclami.service';

@Component({
  selector: 'app-reclami-list',
  templateUrl: './reclami-list.component.html',
  styleUrls: ['./reclami-list.component.scss']
})
export class ReclamiListComponent {
  reclamo: Reclamo[] = [];

  constructor(
    private activeRoute:ActivatedRoute,
    private router: Router,
    private reclamiService: ReclamiService,
    private formBuilder: FormBuilder
  ){}


  ricercaForm: FormGroup = this.formBuilder.group({
    codice: [''],
    descrizione: [''],
    stato: [''],
    gestione: [''],
    data: [''],
    area: [''],
    causale: [''],
    idReclamo: [''],
    nome: [''],
    cognome: [''], 
    banner: [''],
  })

  ngOnInit(): void {
    this.reclamiService.getClienti();
    this.reclamiService.getReclami();
  }
/*
  getClienti() {
    this.reclamiService.getClienti().subscribe((res) => {
      this.listClienti = res;
    });
  }

  getReclami() {
    this.reclamiService.getReclami().subscribe((res) => {
      this.listReclami = res;
    });
  } */

}
