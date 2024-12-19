import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PlatillosService {
  private apiUrl = 'http://localhost:3000/api/platillos'; // Ajusta esta URL a tu backend

  constructor(private http: HttpClient) {}

  getPlatillos(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getPlatillo(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  crearPlatillo(platillo: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, platillo);
  }

  actualizarPlatillo(id: string, platillo: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, platillo);
  }

  eliminarPlatillo(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
