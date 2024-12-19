import { Component } from '@angular/core';
import { ClientesService } from '../services/clientes.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-clientes',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './clientes.component.html',
  styleUrl: './clientes.component.css',
})
export class ClientesComponent {
  clientes: any[] = [];

  constructor(private clientesService: ClientesService) {}

  ngOnInit(): void {
    this.cargarClientes();
  }

  cargarClientes(): void {
    this.clientesService.getClientes().subscribe(
      (data) => {
        this.clientes = data;
      },
      (error) => {
        console.error('Error al cargar clientes:', error);
      }
    );
  }

  eliminarCliente(id: string): void {
    if (confirm('¿Estás seguro de que quieres eliminar este cliente?')) {
      this.clientesService.eliminarCliente(id).subscribe(
        () => {
          this.cargarClientes(); // Recargar la lista después de eliminar
        },
        (error) => {
          console.error('Error al eliminar cliente:', error);
        }
      );
    }
  }
}
