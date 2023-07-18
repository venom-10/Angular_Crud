import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { data } from 'src/data';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  constructor(private http: HttpClient) {}
  setHeader() {
    const token: string = localStorage.getItem('__token') ?? 'none';
    return new HttpHeaders({ token: token });
  }
  getUserData(filter: string, page: number) {
    const header = this.setHeader();
    return this.http.get<data[]>(
      `api/userdata/allData?filter=${filter}&page=${page}`,
      {headers:header}
    );
  }
  getSearchUserData(name: string, page: number) {
    const header = this.setHeader();
    return this.http.get<data[]>(
      `api/userdata/search?name=${name}&page=${page}`, {headers:header}
    );
  }
  //
  getCountOfUserData() {
    const header = this.setHeader();
    return this.http.get<number>('api/userdata/count', {headers:header});
  }
  addUserData(userData: any, file: any) {
    const formData = new FormData();
    for (const key in userData) {
      if (userData.hasOwnProperty(key)) {
        formData.append(key, userData[key]);
      }
    }
    formData.append('file', file);
    const header = this.setHeader();
    return this.http.post<string>('api/userdata/add', formData, {headers:header});
  }
  deleteUserData(id: number) {
    const header = this.setHeader();
    return this.http.post<string>('api/userdata/delete', { id }, {headers:header});
  }
  updateUserData(updateUser: any, id: number) {
    const header = this.setHeader();
    return this.http.post<string>('api/userdata/update', { ...updateUser, id }, {headers:header});
  }
}
