import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonajeDetalleRoutingModule } from './personaje-detalle-routing.module';
import { PersonajeDetalleComponent } from './personaje-detalle.component';


@NgModule({
  declarations: [PersonajeDetalleComponent],
  imports: [
    CommonModule,
    PersonajeDetalleRoutingModule
  ]
})
export class PersonajeDetalleModule { }
