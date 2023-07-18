import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserAuthService } from 'src/app/services/user-auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {

  constructor(private authService:UserAuthService, private router:Router) {}

  registerUser = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    cpassword: new FormControl('', [Validators.required]),
  });

  onSubmit() {
    if (!this.registerUser.valid)
      return;
    this.authService.register(this.registerUser.value).subscribe((res) => {
      console.log(res)
      this.router.navigate(['/login'])
    })
  }
}
