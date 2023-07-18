import { HttpClient } from '@angular/common/http';
import { compileNgModule } from '@angular/compiler';
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
  //
  getCountOfUserData() {
    return this.http.get<number>('api/userdata/count');
  }
  addUserData(userData: any, file: any) {
    const formData = new FormData();
    for (const key in userData) {
      if (userData.hasOwnProperty(key)) {
        formData.append(key, userData[key]);
      }
    }
    formData.append('file', file);
    return this.http.post<string>('api/userdata/add', formData);
  }
  deleteUserData(id: number) {
    return this.http.post<string>('api/userdata/delete', {id});
  }
  updateUserData(updateUser: any, id: number) {    
    return this.http.post<string>('api/userdata/update', {...updateUser,  id });
  }
}
