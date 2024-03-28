import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
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
      shoponline: [false], // Valore predefinito a false
      regione: [''],
      provinciaTik: ['']
  })



  ngOnInit(): void {
    const id = this.activeRoute.snapshot.paramMap.get('id') ?? '';
    this.reclamiService.getReclamoById(id).subscribe((item)=>{
      this.reclamo = item
      this.detailForm.patchValue(this.reclamo);

    });
  }
  deleteReclamo():void{
    this.reclamiService.deleteReclamo(this.reclamo).subscribe(()=>
    this.router.navigate(['/reclami']))
    
  }

  addCliente():void{
    let clienteToAdd= this.detailForm.getRawValue();
    this.reclamiService.addCliente(clienteToAdd).subscribe(()=>
    this.router.navigate(['/reclami']));

  }

  onEditorCreated(editor: any): void {
    editor.onContentChanged.subscribe(() => {
      this.detailForm.patchValue({
        oggettoReclamo: editor.quillEditor.root.innerHTML
      });
    });
  }

}
