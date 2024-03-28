import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReclamiEditComponent } from './pages/reclami-edit/reclami-edit.component';
import { ReclamiListComponent } from './pages/reclami-list/reclami-list.component';
import { ReclamiItemComponent } from './pages/reclami-list/reclami-item/reclami-item.component';
import { QuillModule } from 'ngx-quill';

@NgModule({
  declarations: [
    AppComponent,
    ReclamiEditComponent,
    ReclamiListComponent,
    ReclamiItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxDatatableModule,
    QuillModule
   
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
