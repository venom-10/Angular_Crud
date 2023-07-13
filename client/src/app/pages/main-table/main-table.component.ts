import { Component } from '@angular/core';
import { data } from 'src/data';

@Component({
  selector: 'app-main-table',
  templateUrl: './main-table.component.html',
  styleUrls: ['./main-table.component.css'],
})
export class MainTableComponent {
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
}
