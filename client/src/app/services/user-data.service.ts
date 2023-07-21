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
  getUserData(filter: string, page: number, ord:string='asc') {
    const header = this.setHeader();
    return this.http.get<data[]>(
      `api/userdata/allData?filter=${filter}&page=${page}&ord=${ord}`,
      { headers: header }
    );
  }
  getSearchUserData(name: string, page: number) {
    const header = this.setHeader();
    return this.http.get<data[]>(
      `api/userdata/search?name=${name}&page=${page}`,
      { headers: header }
    );
  }
  //
  getCountOfUserData() {
    const header = this.setHeader();
    return this.http.get<number>('api/userdata/count', { headers: header });
  }
  addUserData(userData: any, file: any, checkedSubjects: Set<number>) {
    const formData = new FormData();
    const subjects = Array.from(checkedSubjects).join(',');

    for (const key in userData) {
      if (userData.hasOwnProperty(key)) {
        formData.append(key, userData[key]);
      }
    }
    formData.append('file', file);
    formData.append('subjects', subjects);
    const header = this.setHeader();
    return this.http.post<string>('api/userdata/add', formData, {
      headers: header,
    });
  }
  deleteUserData(id: number) {
    const header = this.setHeader();
    return this.http.post<string>(
      'api/userdata/delete',
      { id },
      { headers: header }
    );
  }
  updateUserData(updateUser: any, id: number, checkedSubjects: Set<number>) {
    const header = this.setHeader();
    const subjects = Array.from(checkedSubjects).join(',');
    console.log(subjects);
    console.log({ ...updateUser, id, subjects });
    return this.http.post<string>(
      'api/userdata/update',
      { ...updateUser, id, subjects },
      { headers: header }
    );
  }

  getUserById(id: number) {
    const header = this.setHeader();
    return this.http.get<any>(`api/userdata/${id}`, { headers: header });
  }
}
