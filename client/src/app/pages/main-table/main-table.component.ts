import { Component, OnInit } from '@angular/core';
import { data } from 'src/data';
import { UserDataService } from 'src/app/services/user-data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-main-table',
  templateUrl: './main-table.component.html',
  styleUrls: ['./main-table.component.css'],
})
export class MainTableComponent implements OnInit {
  usersData: data[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private usersDataService: UserDataService
  ) {}
  ngOnInit(): void {
    this.route.queryParams.subscribe((param) => {
      const filter = param['filter'] ?? 'id';
      const page = param['page'] ?? 1;
      this.usersDataService.getUserData(filter, page).subscribe(
        (usersData) => {
          this.usersData = usersData;
        },
        (error) => {
          this.router.navigate(['/login']);
          localStorage.removeItem('__token')
        }
      );
    });
  }
}
