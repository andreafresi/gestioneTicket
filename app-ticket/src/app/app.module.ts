import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReclamiListComponent } from './pages/reclami-list/reclami-list.component';
import { ReclamiItemComponent } from './pages/reclami-list/reclami-item/reclami-item.component';
import { ReclamiEditComponent } from './pages/reclami-edit/reclami-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    ReclamiListComponent,
    ReclamiItemComponent, 
    ReclamiEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
