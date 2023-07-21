import { Component } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-paginate',
  templateUrl: './paginate.component.html',
  styleUrls: ['./paginate.component.css'],
})
export class PaginateComponent {
  
  handlePageEvent(ev: PageEvent) {
    console.log(ev.pageIndex);
  }
}
