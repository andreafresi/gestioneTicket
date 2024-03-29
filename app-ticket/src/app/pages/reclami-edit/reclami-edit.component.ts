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
  reclamoAdd: Reclamo = {};

  constructor(
    private activeRoute: ActivatedRoute,
    private router: Router,
    private reclamiService: ReclamiService,
    private formBuilder: FormBuilder
  ) {}

  detailForm: FormGroup = this.formBuilder.group({
    email: ['', Validators.required],
    nome: [''],
    cognome: [''],
    cellulare: [''],
    telefono: [''],
    indirizzo: [''],
    provincia: [''],
    causale: [''],
    oggettoReclamo: [''],
    shopOnline: [false], // Valore predefinito a false
    regione: [''],
    provinciaTik: [''],
  });

  isEditMode: boolean = false
  id: string = "";

  ngOnInit(): void {

    if (this.activeRoute.toString().includes('edit')) {
      this.isEditMode = true
    let id = this.activeRoute.snapshot.paramMap.get('id') ?? '';
    this.reclamiService.getReclamoById(id).subscribe((reclamoTrovato) => {
      this.reclamo = reclamoTrovato;
    });
    this.detailForm.patchValue({
      email: this.reclamo.customer?.email,
      nome: this.reclamo.customer?.nome,
      cognome: this.reclamo.customer?.cognome,
      cellulare: this.reclamo.customer?.cellulare,
      telefono: this.reclamo.customer?.telefono,
      indirizzo: this.reclamo.customer?.indirizzo,
      provincia: this.reclamo.customer?.provincia,
      causale: this.reclamo.causale,
      oggettoReclamo: this.reclamo.oggettoReclamo,
      shopOnline: this.reclamo.shopOnline,
      regione: this.reclamo.regione,
      provinciaTik: this.reclamo.provinciaTik,
    });
  }else if (this.activeRoute.toString().includes('new')) {
    this.isEditMode = false
  }
}
save() {
  if (this.isEditMode) {
    this.reclamiService.updateReclamo(this.reclamo)
  } else {
    // chiamo logica di aggiunta
    this.reclamiService.addReclamo(this.detailForm.getRawValue()).subscribe(() => {
      this.router.navigate(['reclami'])
    })
  }
//   updateReclamo(): void {
//     const updatedItem = { ...this.teamList, ...this.teamForm.value };
//     this.listService.updateTeam(updatedItem).subscribe(() => {
//       this.router.navigate(['team'])
//     });
//   }
// }
}
  

  deleteReclamo(): void {
    this.reclamiService.deleteReclamo(this.reclamo).subscribe(() =>
      setTimeout(() => {
        window.alert('Reclamo cancellato correttamente');
      }, 2000)
    );

    this.router.navigate(['/reclami']);
  }

  addReclamo(): void {
    if (this.reclamoAdd.customer) {

      this.reclamoAdd.customer.email = this.detailForm.controls['email'].value;
      this.reclamoAdd.customer.nome = this.detailForm.controls['nome'].value;
      this.reclamoAdd.customer.cognome = this.detailForm.controls['cognome'].value;
      this.reclamoAdd.customer.cellulare = this.detailForm.controls['cellulare'].value;
      this.reclamoAdd.customer.telefono = this.detailForm.controls['telefono'].value;
      this.reclamoAdd.customer.indirizzo = this.detailForm.controls['indirizzo'].value;
      this.reclamoAdd.customer.provincia = this.detailForm.controls['provincia'].value;
      this.reclamoAdd.causale=this.detailForm.controls['causale'].value;
      this.reclamoAdd.oggettoReclamo=this.detailForm.controls['oggettoReclamo'].value;
      this.reclamoAdd.shopOnline=this.detailForm.controls['shopOnline'].value;
      this.reclamoAdd.regione=this.detailForm.controls['regione'].value;
      this.reclamoAdd.provinciaTik=this.detailForm.controls['provinciaTik'].value;


      // this.reclamiService.addReclamo(clienteToAdd).subscribe(()=>

      setTimeout(() => {
        window.alert('Cliente aggiunto correttamente');
      }, 2000);

      this.router.navigate(['/reclami']); // navigazione alla pagina iniziale
    }
  }


}
