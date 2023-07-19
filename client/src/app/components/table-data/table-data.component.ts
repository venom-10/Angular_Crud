import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { data } from 'src/data';
import { initFlowbite } from 'flowbite';
import { UserDataService } from 'src/app/services/user-data.service';
import { Router } from '@angular/router';

@Component({
  selector: '[app-table-data]',
  templateUrl: './table-data.component.html',
  styleUrls: ['./table-data.component.css'],
})
export class TableDataComponent implements OnInit, OnChanges {
  @Input() userData: data = {
    id: 0,
    name: '',
    email: '',
    gender: '',
    state: '',
    address: '',
    dob: '',
    imagepath: '',
    subjects:''
  };
  array: string[] = ['MATH', 'PHY', 'CHE', 'BIO']
  stringArray: string[] = []
  // @Input() userData:data;  // This will not work dkw
  constructor(private service:UserDataService, private router:Router) { }
  ngOnInit(): void {
    // initFlowbite();
  }
  userDeletion(id: number) {
    this.service.deleteUserData(id).subscribe((res) => {
      console.log(res);
      window.location.replace('/')
    })
  }
  ngOnChanges(): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    const arr = this.userData.subjects.split(',')
    arr.forEach((id:string) => {
      this.stringArray.push(this.array[parseInt(id) - 1]);
    });
  }
}
