import { Component, OnInit, ResolvedReflectiveFactory, createComponent } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserDataService } from 'src/app/services/user-data.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent {
  constructor(private service:UserDataService, private router:Router) { }
  female: string = 'female';
  user = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    gender: new FormControl('female', Validators.required),
    address: new FormControl('', Validators.required),
    state: new FormControl('', Validators.required),
    dob: new FormControl('', Validators.required),
  });
  onSubmit() {
    if (this.user.valid) {
      this.service.addUserData(this.user.value).subscribe((res) => {
        this.router.navigate(['/']);
      })
    } else console.log(this.user.controls);
  }
}
