import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { Cliente } from 'src/app/shared/models/cliente';
import { Reclamo } from 'src/app/shared/models/reclamo';
import { ReclamiService } from 'src/app/shared/services/reclami.service';

@Component({
  selector: 'app-reclami-item',
  templateUrl: './reclami-item.component.html',
  styleUrls: ['./reclami-item.component.scss']
})
export class ReclamiItemComponent {
  listClienti: Cliente[] = []
  @Input() listReclami: Reclamo[] = []

  constructor(private reclamiService: ReclamiService, private readonly router: Router) {
  }

  ngOnInit(): void {
    this.getReclami();
  }

  // getClienti() {
  //   this.reclamiService.getClienti().subscribe((res) => {
  //     this.listClienti = res;
  //   });
  // }

  getReclami() {
    this.reclamiService.getReclami().subscribe((res) => {
      this.listReclami = res;
    });
  }

  openDetail(id: string) {
    this.router.navigate(['reclami/detail', id])
  }

}