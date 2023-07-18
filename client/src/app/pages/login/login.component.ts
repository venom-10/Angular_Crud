import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserAuthService } from 'src/app/services/user-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private router: Router, private authService: UserAuthService) {}
  loginUser = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });
  onSubmit() {
    if (!this.loginUser.valid) return;
    this.authService.login(this.loginUser.value).subscribe((res: any) => {
      localStorage.setItem('__token', res.accessToken);
      this.router.navigate(['/'])
    });
  }
}
