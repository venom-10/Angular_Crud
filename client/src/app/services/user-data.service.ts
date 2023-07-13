import { Injectable } from '@angular/core';
import { data } from 'src/data';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  usersData: data[] = [
    {
      name: 'Rohit',
      email: 'arohit0102@gmail.com',
      gender: 'Male',
      state: 'West Bengal',
      address: 'Kolkata',
      dob: '01/02/2000',
      image: '',
    },
    {
      name: 'Aftab',
      email: 'arohit0102@gmail.com',
      gender: 'Male',
      state: 'West Bengal',
      address: 'Kolkata',
      dob: '01/02/2000',
      image: '',
    },
    {
      name: 'Rion',
      email: 'arohit0102@gmail.com',
      gender: 'Male',
      state: 'West Bengal',
      address: 'Kolkata',
      dob: '01/02/2000',
      image: '',
    },
  ];
  constructor() {}

  getUserData() {
    return this.usersData;
  }
}
