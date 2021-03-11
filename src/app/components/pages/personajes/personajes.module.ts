import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonajeDetalleComponent } from './personaje-detalle/personaje-detalle.component';
import { PersonajeListComponent } from './personaje-list/personaje-list.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [PersonajeDetalleComponent, PersonajeListComponent],
  imports: [CommonModule, RouterModule],
  exports: [PersonajeDetalleComponent, PersonajeListComponent]
})
export class PersonajesModule { }
