import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { Alfajor } from './alfajor-list/Alfajor';

const URL = "https://687478f4dd06792b9c93f8f7.mockapi.io/Aldina/alfajores";

@Injectable({
  providedIn: 'root'
})
export class AlfajorData {
  private cachedAlfajores: Alfajor[] | null = null;

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Alfajor[]> {
    // Si ya tengo los datos en memoria, los devuelvo directamente
    if (this.cachedAlfajores) {
      return of(this.cachedAlfajores);
    }
    // Si no, los busco y los guardo
    return this.http.get<Alfajor[]>(URL).pipe(
      tap(data => this.cachedAlfajores = data)
    );
  }

}

