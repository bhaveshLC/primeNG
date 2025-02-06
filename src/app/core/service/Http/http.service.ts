import { inject, Injectable } from '@angular/core';
import { API_URL } from '../../constant';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor() {}
  http = inject(HttpClient);
  get(endPoint: string): Observable<any> {
    return this.http.get(`${API_URL}${endPoint}`);
  }
  post(endPoint: string, data: any): Observable<any> {
    console.log(`${API_URL}${endPoint}`);
    return this.http.post(`${API_URL}${endPoint}`, data);
  }
  put(endPoint: string, data: any): Observable<any> {
    return this.http.put(`${API_URL}${endPoint}`, data);
  }
  delete(endPoint: string): Observable<any> {
    return this.http.delete(`${API_URL}${endPoint}`);
  }
}
