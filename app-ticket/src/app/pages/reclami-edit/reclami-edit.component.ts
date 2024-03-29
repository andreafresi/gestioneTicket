import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { EditorChangeContent, EditorChangeSelection } from 'ngx-quill';
import { Cliente } from 'src/app/shared/models/cliente';
import { Reclamo } from 'src/app/shared/models/reclamo';
import { ReclamiService } from 'src/app/shared/services/reclami.service';

@Component({
  selector: 'app-reclami-edit',
  templateUrl: './reclami-edit.component.html',
  styleUrls: ['./reclami-edit.component.scss'],
})
export class ReclamiEditComponent implements OnInit {
  reclamo: Reclamo = {};

  constructor(
    private activeRoute: ActivatedRoute,
    private router: Router,
    private reclamiService: ReclamiService,
    private formBuilder: FormBuilder
  ) { }

  detailForm: FormGroup = this.formBuilder.group({
    email: [''],
    nome: [''],
    cognome: [''],
    cellulare: [''],
    telefono: [''],
    indirizzo: [''],
    data: [''],
    provincia: [''],
    causale: [''],
    oggettoReclamo: [''],
    shopOnline: [''], // Valore predefinito a false
    regione: [''],
    provinciaTik: [''],
    codiceNegozio: [''],
    polo: [''],
  });

  isDetailMode: boolean = false;
  id: string = '';
  reclamoAdd: Reclamo = {
    customer: {},
    negozio: {}
  };

  ngOnInit(): void {
    if (this.activeRoute.toString().includes('detail')) {
      this.isDetailMode = true;
      let id = this.activeRoute.snapshot.paramMap.get('id') ?? '';
      this.reclamiService.getReclamoById(id).subscribe((reclamoTrovato) => {
        this.reclamo = reclamoTrovato;
        this.detailForm.patchValue({
          // mod strana
          email: this.reclamo.customer?.email,
          nome: this.reclamo.customer?.nome,
          cognome: this.reclamo.customer?.cognome,
          cellulare: this.reclamo.customer?.cellulare,
          telefono: this.reclamo.customer?.telefono,
          indirizzo: this.reclamo.customer?.indirizzo,
          data: this.reclamo.dataApertura,
          provincia: this.reclamo.customer?.provincia,
          causale: this.reclamo.causale,
          oggettoReclamo: this.reclamo.oggettoReclamo,
          shopOnline: this.reclamo.shopOnline,
          regione: this.reclamo.regione,
          provinciaTik: this.reclamo.provinciaTik,
          codiceNegozio: this.reclamo.negozio?.id,
          polo: this.reclamo.polo
        });
      });
    } else if (this.activeRoute.toString().includes('new')) {
      this.isDetailMode = false;
    }
  }
  save() {
    if (this.isDetailMode) {
      this.reclamiService.updateReclamo(this.reclamo);
    } else {
      this.reclamoAdd.customer!.nome = this.detailForm.get('nome')?.value;
      this.reclamoAdd.customer!.cognome = this.detailForm.get('cognome')?.value;
      this.reclamoAdd.customer!.fullname = (this.detailForm.get('nome')?.value + " " + this.detailForm.get('cognome')?.value);
      this.reclamoAdd.customer!.email = this.detailForm.get('email')?.value;
      this.reclamoAdd.customer!.cellulare = this.detailForm.get('cellulare')?.value;
      this.reclamoAdd.customer!.telefono = this.detailForm.get('telefono')?.value;
      this.reclamoAdd.customer!.indirizzo = this.detailForm.get('indirizzo')?.value;
      this.reclamoAdd.customer!.provincia = this.detailForm.get('provincia')?.value;
      this.reclamoAdd.causale = this.detailForm.get('causale')?.value;
      this.reclamoAdd.oggettoReclamo = this.detailForm.get('oggettoReclamo')?.value;
      this.reclamoAdd.shopOnline = this.detailForm.get('shopOnline')?.value;
      this.reclamoAdd.regione = this.detailForm.get('regione')?.value;
      this.reclamoAdd.provinciaTik = this.detailForm.get('provinciaTik')?.value;
      this.reclamoAdd.dataApertura = this.detailForm.get('data')?.value;
      this.reclamoAdd.stato = "Non assegnato";
      this.reclamoAdd.gestione = "Aperto";

      this.reclamiService.getNegozioById(this.detailForm.get('codiceNegozio')?.value).subscribe((item) => {
        console.log('item', item)
        this.reclamoAdd.negozio = item

        this.reclamiService
          .addReclamo(this.reclamoAdd)
          .subscribe(() => {
            this.router.navigate(['reclami']);
          });
      })
    }
  }

  deleteReclamo(): void {
    this.reclamiService.deleteReclamo(this.reclamo).subscribe(() =>
      setTimeout(() => {
        window.alert('Reclamo cancellato correttamente');
      }, 2000)
    );

    this.router.navigate(['/reclami']);
  }
}
