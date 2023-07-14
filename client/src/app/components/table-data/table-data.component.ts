import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { data } from 'src/data';
import { initFlowbite } from 'flowbite';

@Component({
  selector: '[app-table-data]',
  templateUrl: './table-data.component.html',
  styleUrls: ['./table-data.component.css'],
})
export class TableDataComponent implements OnChanges, OnInit {
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

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.userData);
  }

  ngOnInit(): void {
    initFlowbite();
  }
}
