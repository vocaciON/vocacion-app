import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExpertService {

  // Simulando una lista de expertos
  private expertos = [
    { nombre: 'Juan Pérez', especialidad: 'Desarrollo Frontend' },
    { nombre: 'Ana Gómez', especialidad: 'Desarrollo Backend' },
    { nombre: 'Luis Sánchez', especialidad: 'Bases de Datos' },
    { nombre: 'Carla Rodríguez', especialidad: 'UX/UI Design' }
  ];

  constructor() { }

  // Método para obtener la lista de expertos
  getExpertos(): Observable<any[]> {
    return of(this.expertos); // Retorna la lista simulada como un Observable
  }
}
