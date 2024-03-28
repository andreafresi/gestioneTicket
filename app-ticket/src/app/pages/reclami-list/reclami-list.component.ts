import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Reclamo } from 'src/app/shared/models/reclamo';
import { ReclamiService } from 'src/app/shared/services/reclami.service';

@Component({
  selector: 'app-reclami-list',
  templateUrl: './reclami-list.component.html',
  styleUrls: ['./reclami-list.component.scss']
})
export class ReclamiListComponent implements OnInit{
  reclamo: Reclamo[] = [];

  constructor(
    private activeRoute:ActivatedRoute,
    private router:Router,
    private reclamiService:ReclamiService,
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
    const id = this.activeRoute.snapshot.paramMap.get('id') ?? '';
    this.reclamiService.getReclamoById(id).subscribe((item)=>{
      this.reclamo = item
      this.ricercaForm.patchValue(this.reclamo);

    });

    this.reclamiService.getReclami;
  }

  ricerca(event: Event): void {
    const reclami =this.reclamiService.getReclami;

    this.ricercaForm.value.nome
    //this.ricercaForm.addControl
  }

  getRecla() {
    this.reclamiService.getReclami().subscribe((res) => {
      this.reclamo = res;
    });
  }

}
