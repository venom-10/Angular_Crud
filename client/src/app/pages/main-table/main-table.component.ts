import { Component, OnInit } from '@angular/core';
import { data } from 'src/data';
import { UserDataService } from 'src/app/services/user-data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main-table',
  templateUrl: './main-table.component.html',
  styleUrls: ['./main-table.component.css'],
})
export class MainTableComponent implements OnInit {
  usersData: data[] = [];

  constructor(
    private route: ActivatedRoute,
    private usersDataService: UserDataService
  ) {}
  ngOnInit(): void {
    this.usersDataService.getUserData().subscribe((usersData) => {
      this.usersData = usersData;
    });
    this.route.queryParams.subscribe((param) => {
      const filter = param['filter'];
      console.log(filter);
    });
  }
}
