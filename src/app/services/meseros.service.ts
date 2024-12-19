import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MeserosService {
  private apiUrl = 'http://localhost:3000/api/meseros'; // Ajusta esta URL a tu backend

  constructor(private http: HttpClient) {}

  getMeseros(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getMesero(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  crearMesero(mesero: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, mesero);
  }

  actualizarMesero(id: string, mesero: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, mesero);
  }

  eliminarMesero(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
