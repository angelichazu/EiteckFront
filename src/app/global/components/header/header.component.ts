import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonajeListComponent } from 'src/app/components/pages/personajes/personaje-list/personaje-list.component';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  busqueda(value: string){
    if(value && value.length > 2){
      this.router.navigate(['/personaje-list'],{
        queryParams: { q: value},
      });
    }

  }
}
