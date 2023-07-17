import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent {
  user = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    gender: new FormControl('Gender'),
    address: new FormControl(''),
    state: new FormControl(''),
    dob: new FormControl(''),
  });
  onSubmit() {
    console.log(this.user.value);
  }
}
