import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReclamiListComponent } from './pages/reclami-list/reclami-list.component';
import { ReclamiEditComponent } from './pages/reclami-edit/reclami-edit.component';


const routes: Routes = [

  {
    path: 'reclami',
    children: [
      {
        path: '',
        component: ReclamiListComponent
      },
      {
        path: 'detail/:id',
        component: ReclamiEditComponent
      },
      {
        path: 'new',
        component: ReclamiEditComponent
    },
    ]
  },
  {
    path: '**',
    redirectTo: 'reclami',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
