import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class APIService {
  private apiUrl = 'https://api.github.com'


  constructor(private http: HttpClient) { }
  getRepository():Observable<[]> {
    const url = `${this.apiUrl}/users/KangoKishino/repos`;
    return this.http.get<[]>(url)
  }
}
