import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const URL = "https://687478f4dd06792b9c93f8f7.mockapi.io/Aldina/users"

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {}

  createUser(userData: any): Observable<any> {
    return this.http.post(URL, userData);
  }
}
