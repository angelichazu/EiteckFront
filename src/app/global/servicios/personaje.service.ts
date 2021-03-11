import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Personaje } from '../interfaces/personaje-interface';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PersonajeService {

  constructor(private http: HttpClient) { }

  buscarPersonajes(query = '', page = 1){
    const filter = `https://rickandmortyapi.com/api/character/?name=${query}&page=${page}`;
    return this.http.get<Personaje[]>(filter);
  }

  obtenerDetalles(id: number) {
    return this.http.get<Personaje>(`https://rickandmortyapi.com/api/character/${id}`);
  }

}
