import { Component } from '@angular/core';
import { MeserosService } from '../services/meseros.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-meseros',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './meseros.component.html',
  styleUrl: './meseros.component.css'
})
export class MeserosComponent {
  meseros: any[] = [];

  constructor(private meserosService: MeserosService) { }

  ngOnInit(): void {
    this.cargarMeseros();
  }

  cargarMeseros(): void {
    this.meserosService.getMeseros().subscribe(
      (data) => {
        this.meseros = data;
      },
      (error) => {
        console.error('Error al cargar meseros:', error);
      }
    );
  }

  eliminarMesero(id: string): void {
    if(confirm('¿Estás seguro de que quieres eliminar este mesero?')) {
      this.meserosService.eliminarMesero(id).subscribe(
        () => {
          this.cargarMeseros(); // Recargar la lista después de eliminar
        },
        (error) => {
          console.error('Error al eliminar mesero:', error);
        }
      );
    }
  }
}
