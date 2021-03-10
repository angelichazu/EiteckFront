import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: 'home', loadChildren: () => import('./components/pages/home/home.module').then(m => m.HomeModule) }, { path: 'personaje-detalle/:id', loadChildren: () => import('./components/pages/personajes/personaje-detalle/personaje-detalle.module').then(m => m.PersonajeDetalleModule) }, { path: 'personaje-list', loadChildren: () => import('./components/pages/personajes/personaje-list/personaje-list.module').then(m => m.PersonajeListModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
