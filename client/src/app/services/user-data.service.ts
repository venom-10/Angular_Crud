import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { data } from 'src/data';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  usersData: data[] = [];
  constructor(private http: HttpClient) {}

  getUserData() {
    return this.http.get<data[]>('api/userdata/allData');
  }
  getSearchUserData(name: string) {
    return this.http.get<data[]>(`api/userdata/search?name=${name}`);
  }
}
