import { Component, OnInit } from '@angular/core';
import { ExpertService } from '../../../core/services/expertos.service';

@Component({
  selector: 'app-experto',
  templateUrl: './experto.component.html',
  styleUrls: ['./experto.component.css']
})
export class ExpertoComponent implements OnInit {
  expertos: any[] = [];
  searchText: string = '';
  selectedEspecialidad: string = '';
  
  especialidades: string[] = ['Especialidad 1', 'Especialidad 2', 'Especialidad 3']; // Ejemplo de especialidades
  
  constructor(private expertoService: ExpertService) {}

  ngOnInit(): void {
    // Llama al servicio para obtener la lista de expertos
    this.getExpertos();
  }

  getExpertos(): void {
    this.expertoService.getExpertos().subscribe((data: any[]) => {
      this.expertos = data;
    });
  }
}
