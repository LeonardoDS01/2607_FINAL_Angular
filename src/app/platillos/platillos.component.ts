import { Component, OnInit } from '@angular/core';
import { PlatillosService } from '../services/platillos.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-platillos',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './platillos.component.html',
  styleUrl: './platillos.component.css',
})
export class PlatillosComponent implements OnInit {
  platillos: any[] = [];

  constructor(private platillosService: PlatillosService) {}

  ngOnInit(): void {
    this.cargarPlatillos();
  }

  cargarPlatillos(): void {
    this.platillosService.getPlatillos().subscribe(
      (data) => {
        this.platillos = data;
      },
      (error) => {
        console.error('Error al cargar platillos:', error);
      }
    );
  }

  eliminarPlatillo(id: string): void {
    if (confirm('¿Estás seguro de que quieres eliminar este platillo?')) {
      this.platillosService.eliminarPlatillo(id).subscribe(
        () => {
          this.cargarPlatillos(); // Recargar la lista después de eliminar
        },
        (error) => {
          console.error('Error al eliminar platillo:', error);
        }
      );
    }
  }
}
