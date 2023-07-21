import { Component, OnInit } from '@angular/core';
import { UserDataService } from 'src/app/services/user-data.service';
import { data } from 'src/data';
import { PageEvent } from '@angular/material/paginator';
import { Store } from '@ngrx/store';
import { storeUserData, check } from 'src/app/store/action/counter.action';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  userData: data[] = [];
  show: boolean = false;
  page: number = 1;
  filter: string = 'id';
  length: number = 0;
  showPaginate: boolean = false;

  constructor(private service: UserDataService, private userDataStore: Store<{dataStore:data[]}> ) {}
  ngOnInit(): void {
    this.service.getUserData(this.filter, this.page).subscribe((res) => {
      this.userData = res;
      this.userDataStore.dispatch(storeUserData({defaultUserData:res}))
      this.show = true;
    });
    this.service.getCountOfUserData().subscribe((res) => {
      this.length = res;
      this.showPaginate = true;
    });
    setTimeout(() => {
      console.log('now');
      this.userDataStore.dispatch(check());
    }, 2000)
  }
  announceSortChange(e: any) {
    if (e.direction !== '') {
      console.log(e);
      this.filter = e.active;
      const ord = e.direction;
      this.service.getUserData(this.filter, this.page, ord).subscribe((res) => {
        this.userData = res;
        this.show = true;
      });
    } else {
      this.userDataStore.select('dataStore').subscribe((res) => {
        console.log('res', res);
        this.userData = res;
      })
    }
  }
  handlePageEvent(ev: PageEvent) {
    this.page = ev.pageIndex + 1;
    this.service.getUserData(this.filter, this.page).subscribe((res) => {
      this.userData = res;
      this.show = true;
    });
  }
  displayedColumns: string[] = ['id', 'name', 'email', 'gender'];
}





