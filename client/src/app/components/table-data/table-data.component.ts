import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { data } from 'src/data';

@Component({
  selector: '[app-table-data]',
  templateUrl: './table-data.component.html',
  styleUrls: ['./table-data.component.css']
})
export class TableDataComponent implements OnChanges{
  @Input() userData:data = {name:'', email:'', gender:'', state:'', address:'',dob:'',image:''}
  // @Input() userData:data;  // This will not work dkw
  
  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.userData);
  }
}
