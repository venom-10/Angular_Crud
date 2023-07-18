import { Component, OnInit } from '@angular/core';
import { UserDataService } from 'src/app/services/user-data.service';

@Component({
  selector: 'app-paginate-button',
  templateUrl: './paginate-button.component.html',
  styleUrls: ['./paginate-button.component.css'],
})
export class PaginateButtonComponent implements OnInit {
  pages: number = 0;
  constructor(private service: UserDataService) {}
  ngOnInit(): void {
    this.service.getCountOfUserData().subscribe((count) => {
      this.pages = Math.ceil(count / 4);
    });
  }
  getRange(n: number): number[] {
    return Array(n)
      .fill(0)
      .map((_, index) => index + 1);
  }
}
