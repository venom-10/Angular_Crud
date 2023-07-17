import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { data } from 'src/data';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  usersData: data[] = [];
  constructor(private http: HttpClient) {}

  getUserData(filter: string, page: number) {
    return this.http.get<data[]>(
      `api/userdata/allData?filter=${filter}&page=${page}`
    );
  }
  getSearchUserData(name: string, page: number) {
    return this.http.get<data[]>(
      `api/userdata/search?name=${name}&page=${page}`
    );
  }
  getCountOfUserData() {
    return this.http.get<number>('api/userdata/count');
  }
}
