import { Component, OnInit } from '@angular/core';
import { Personaje } from 'src/app/global/interfaces/personaje-interface';
import { PersonajeService } from 'src/app/global/servicios/personaje.service';
import { filter, take } from 'rxjs/operators';
import { ActivatedRoute, NavigationEnd, ParamMap, Router } from '@angular/router';

type RequestInfo = {
  pages: string;
  next: string;
};
@Component({
  selector: 'app-personaje-list',
  templateUrl: './personaje-list.component.html',
  styleUrls: ['./personaje-list.component.scss']
})
export class PersonajeListComponent implements OnInit {

  personajes: Personaje[] = [];

  info: RequestInfo = {
    pages: '',
    next: '',
  };
  private pageNum = 1;
  private query: string;

  constructor(private personajeService: PersonajeService, private route: ActivatedRoute, private router:Router) {this.detectarURL(); }

  ngOnInit(): void {
    this.obtenerPersonajes();
  }

  public siguientePage():void{
    if(this.pageNum < parseInt(this.info.pages)){
      this.pageNum++;
      this.obtenerPersonajes('',this.pageNum);
    }
  }

  public anteriorPage():void{
    if(this.pageNum > 1){
      this.pageNum--;
      this.obtenerPersonajes('',this.pageNum);
    }
    
  }

  private detectarURL(): void {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.personajes = [];
        this.pageNum = 1;
        this.obtenerParams();
      });
  }

  private obtenerParams(): void {
    this.route.queryParams.pipe(take(1)).subscribe((params: any) => {
      this.query = params['q'];
      this.obtenerPersonajes(this.query,1);
    });
  }

  public obtenerPersonajes(query='',page = 1): void {
    this.personajeService
      .buscarPersonajes(query, page)
      .pipe(take(1))
      .subscribe((res: any) => {
        if (res?.results?.length) {
          const { info, results } = res;
          this.personajes = [...results];
          this.info = info;
        } else {
          this.personajes = this.personajes;
        }
      });
  }
}
