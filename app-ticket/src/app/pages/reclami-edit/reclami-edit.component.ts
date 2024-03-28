import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { Cliente } from 'src/app/shared/models/cliente';
import { Reclamo } from 'src/app/shared/models/reclamo';
import { ReclamiService } from 'src/app/shared/services/reclami.service';



@Component({
  selector: 'app-reclami-edit',
  templateUrl: './reclami-edit.component.html',
  styleUrls: ['./reclami-edit.component.scss']
})
export class ReclamiEditComponent implements OnInit{
  
  reclamo: Reclamo ={}

  constructor(
    private activeRoute:ActivatedRoute,
    private router:Router,
    private reclamiService:ReclamiService,
    private formBuilder:FormBuilder
  ){}

  detailForm: FormGroup = this.formBuilder.group({
    email: [''],
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
      provinciaTik: ['']
  })



  ngOnInit(): void {
    const id = this.activeRoute.snapshot.paramMap.get('id') ?? '';
    this.reclamiService.getReclamoById(id).subscribe((reclamoTrovato)=>{
      this.reclamo = reclamoTrovato
      })
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
        provinciaTik: this.reclamo.provinciaTik

      });


    };

    deleteReclamo():void{
      this.reclamiService.deleteReclamo(this.reclamo).subscribe(()=>
      setTimeout(() => {
        window.alert('Reclamo cancellato correttamente')
      }, 2000))
  
      this.router.navigate(['/reclami'])
      
    }
  
    addReclamo():void{
      let reclamoAdd : Reclamo={}

      // reclamoAdd.customer?.email = this.detailForm.controls['email'].value;
      // this.reclamiService.addReclamo(clienteToAdd).subscribe(()=>
  
      setTimeout(() => {
        window.alert('Cliente aggiunto correttamente')
      }, 2000)
  
      this.router.navigate(['/reclami']); // navigazione alla pagina iniziale
    }
  }

