import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { data } from 'src/data';
import { ActivatedRoute, Router } from '@angular/router';
import { UserDataService } from 'src/app/services/user-data.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css'],
})
export class UpdateUserComponent {
  selected: number[] = [0, 0, 0, 0]; // for checked state initially all of them are false
  checkedSubjects: Set<number> = new Set(); // for checked subjects
  userData: data = {
    id: 0,
    name: '',
    email: '',
    address: '',
    state: '',
    gender: '',
    dob: '',
  };
  showForm: boolean = false; // Form showing error
  updateUser!: FormGroup;
  constructor(private service: UserDataService, private route: ActivatedRoute) {
    this.route.queryParams.subscribe((param) => {
      const id = param['id'];
      this.service.getUserById(id).subscribe((res) => {
        this.userData = res;
        const arr = this.userData.subjects.split(',');
        // this.checkedSubjects = arr;   // will not work fix need to convert arr to set
        arr.forEach((id: number) => {
          this.selected[id - 1] = 1;
          if(id)
            this.checkedSubjects.add(id);
        });
        this.updateUser = new FormGroup({
          name: new FormControl(this.userData.name, Validators.required),
          state: new FormControl(this.userData.state, Validators.required),
          address: new FormControl(this.userData.address, Validators.required),
          dob: new FormControl(this.userData.dob, Validators.required),
          gender: new FormControl(this.userData.gender, Validators.required),
        });
        this.showForm = true;
      });
    });
  }

  // get edited checked item from update
  multi(event: any) {
    if (event.target.checked) {
      this.checkedSubjects.add(event.target.value);
      console.log(this.checkedSubjects);
    } else {
      this.checkedSubjects.delete(event.target.value);
      console.log(this.checkedSubjects);
    }
  }

  onSubmit() {
    if (this.updateUser.valid) {
      this.route.queryParams.subscribe((param) => {
        const id = param['id'];
        this.service
          .updateUserData(this.updateUser.value, id, this.checkedSubjects)
          .subscribe((res) => {
            console.log(res);
            window.location.replace('/');
          });
      });
    } else {
      console.log('err');
    }
  }
}
