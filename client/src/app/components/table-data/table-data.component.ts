import { Component, Input, OnInit } from '@angular/core';
import { data } from 'src/data';
import { initFlowbite } from 'flowbite';
import { UserDataService } from 'src/app/services/user-data.service';
import { Router } from '@angular/router';

@Component({
  selector: '[app-table-data]',
  templateUrl: './table-data.component.html',
  styleUrls: ['./table-data.component.css'],
})
export class TableDataComponent implements OnInit {
  @Input() userData: data = {
    id: 0,
    name: '',
    email: '',
    gender: '',
    state: '',
    address: '',
    dob: '',
    image: '',
  };
  // @Input() userData:data;  // This will not work dkw
  constructor(private service:UserDataService, private router:Router) { }
  ngOnInit(): void {
    initFlowbite();
  }
  userDeletion(id: number) {
    console.log(id)
    this.service.deleteUserData(id).subscribe((res) => {
      console.log(res);
      this.router.navigate(['/']);
    })
  }

  userUpdation(id: number) {
    console.log(id);
  }
}
