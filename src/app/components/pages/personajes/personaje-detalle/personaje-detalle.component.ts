import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { Personaje } from 'src/app/global/interfaces/personaje-interface';
import { PersonajeService } from 'src/app/global/servicios/personaje.service';

@Component({
  selector: 'app-personaje-detalle',
  templateUrl: './personaje-detalle.component.html',
  styleUrls: ['./personaje-detalle.component.scss']
})
export class PersonajeDetalleComponent implements OnInit {

  personaje$ : Observable<Personaje>;
  constructor(private route: ActivatedRoute, private personajeServicio: PersonajeService) { }

  ngOnInit(): void {
    this.route.params.pipe(take(1))
    .subscribe((params) => {
      const id = params['id'];
      this.personaje$ = this.personajeServicio.obtenerDetalles(id);
    })
  }

  public volver():void{
    window.history.back();
  }
}
