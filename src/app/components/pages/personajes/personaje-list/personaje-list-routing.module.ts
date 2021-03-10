import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonajeListComponent } from './personaje-list.component';

const routes: Routes = [{ path: '', component: PersonajeListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonajeListRoutingModule { }
