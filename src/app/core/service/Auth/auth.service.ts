import { inject, Injectable } from '@angular/core';
import { HttpService } from '../Http/http.service';
import { iUser } from '../../model/interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}
  httpService = inject(HttpService);
  registerUser(user: iUser): Observable<iUser> {
    return this.httpService.post('/auth', user);
  }
  loginUser(user: { email: string; password: string }): Observable<string> {
    return this.httpService.post('/auth/login', user);
  }
}
