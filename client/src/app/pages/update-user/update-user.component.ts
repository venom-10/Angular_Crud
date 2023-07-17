import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserDataService } from 'src/app/services/user-data.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css'],
})
export class UpdateUserComponent {
  constructor(
    private service: UserDataService,
    private route: ActivatedRoute,
    private router:Router
  ) {}
  female: string = 'female';
  updateUser = new FormGroup({
    name: new FormControl('', Validators.required),
    state: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    dob: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required),
  });
  onSubmit() {
    if (this.updateUser.valid) {
      this.route.queryParams.subscribe((param) => {
        const id = param['id'];
        this.service.updateUserData(this.updateUser.value, id).subscribe((res) => {
          console.log(res);
          this.router.navigate(['/']);
        });
      });
    }
    else {
      console.log('err')
    }
  }
}
