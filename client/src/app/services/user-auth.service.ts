import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
  constructor(private http: HttpClient) { }
  
  register(registerUser:any) {
    return this.http.post<string>('/api/user/register', registerUser);
  }
  login(loginUser: any) {
    return this.http.post<object>('api/user/login', loginUser);
  }
}
