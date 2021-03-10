import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonajeListRoutingModule } from './personaje-list-routing.module';
import { PersonajeListComponent } from './personaje-list.component';


@NgModule({
  declarations: [PersonajeListComponent],
  imports: [
    CommonModule,
    PersonajeListRoutingModule
  ]
})
export class PersonajeListModule { }
