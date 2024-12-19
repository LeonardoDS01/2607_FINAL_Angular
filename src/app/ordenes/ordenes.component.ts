import { Component } from '@angular/core';
import { OrdenesService } from '../services/ordenes.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-ordenes',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './ordenes.component.html',
  styleUrl: './ordenes.component.css',
})
export class OrdenesComponent {
  ordenes: any[] = [];

  constructor(private ordenesService: OrdenesService) {}

  ngOnInit(): void {
    this.cargarOrdenes();
  }

  cargarOrdenes(): void {
    this.ordenesService.getOrdenes().subscribe(
      (data) => {
        this.ordenes = data;
      },
      (error) => {
        console.error('Error al cargar órdenes:', error);
      }
    );
  }

  eliminarOrden(id: string): void {
    if (confirm('¿Estás seguro de que quieres eliminar esta orden?')) {
      this.ordenesService.eliminarOrden(id).subscribe(
        () => {
          this.cargarOrdenes(); // Recargar la lista después de eliminar
        },
        (error) => {
          console.error('Error al eliminar orden:', error);
        }
      );
    }
  }
}
