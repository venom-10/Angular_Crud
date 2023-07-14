import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserDataService } from 'src/app/services/user-data.service';
import { data } from 'src/data';

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.css'],
})
export class SearchUserComponent implements OnInit {
  searchedUsers: data[] = [];
  constructor(
    private route: ActivatedRoute,
    private service: UserDataService
  ) {}
  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      const searchName = params['search'];

      this.service.getSearchUserData(searchName).subscribe((searchedUsers) => {
        this.searchedUsers = searchedUsers;
      });
    });
  }
}
