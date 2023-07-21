import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDataService } from 'src/app/services/user-data.service';

@Component({
  selector: 'app-paginate-button',
  templateUrl: './paginate-button.component.html',
  styleUrls: ['./paginate-button.component.css'],
})
export class PaginateButtonComponent implements OnInit {
  pages: number = 0;
  constructor(private service: UserDataService, private router: Router) {}
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
  navigateToPage(page: number) {
    // Assuming your current route has a query parameter named 'page'.
    // You can replace 'currentRoute' with the actual path you want to navigate to.
    this.router.navigate([], {
      queryParams: { page: page },
      queryParamsHandling: 'merge',
    });
  }
}
