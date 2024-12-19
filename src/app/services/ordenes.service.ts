import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OrdenesService {
  private apiUrl = 'http://localhost:3000/api/ordenes'; // Ajusta esta URL a tu backend

  constructor(private http: HttpClient) {}

  getOrdenes(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getOrden(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  crearOrden(orden: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, orden);
  }

  actualizarOrden(id: string, orden: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, orden);
  }

  eliminarOrden(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
