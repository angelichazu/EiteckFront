import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonajeDetalleComponent } from './personaje-detalle.component';

const routes: Routes = [{ path: '', component: PersonajeDetalleComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonajeDetalleRoutingModule { }
