import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  isLoggedIn: boolean = localStorage.getItem('__token') ? true : false;
  name: string = '';
  ngOnInit(): void {
    console.log(this.isLoggedIn);
    const token: string = localStorage.getItem('__token') ?? '';
    const tokenParts: any = token.split('.');
    const user: any = atob(tokenParts[1]);
  }
  onSubmit() {
    localStorage.removeItem('__token');
    this.isLoggedIn = true;
    window.location.replace('/login');
    this.isLoggedIn = false;
  }
}
