import { Component, OnInit } from '@angular/core';
import { data } from 'src/data';
import { UserDataService } from 'src/app/services/user-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserAuthService } from 'src/app/services/user-auth.service';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { storeUser, check } from 'src/app/store/action/counter.action';
import { userDetails } from 'src/app/store/models/userDetails.model';

@Component({
  selector: 'app-main-table',
  templateUrl: './main-table.component.html',
  styleUrls: ['./main-table.component.css'],
})
export class MainTableComponent implements OnInit {
  usersData: data[] = [];
  user: userDetails = {};
  constructor(
    private route: ActivatedRoute,
    private router:Router,
    private usersDataService: UserDataService,
    private authService: UserAuthService,
    private store: Store<{ user: userDetails }>
  ) {
    this.store.select('user').subscribe((res) => {
      this.user = res;
    })
  }
  ngOnInit(): void {
    this.route.queryParams.subscribe((param) => {
      const filter = param['filter'] ?? 'id';
      const page = param['page'] ?? 1;
      this.usersDataService.getUserData(filter, page).subscribe(
        (usersData) => {
          this.usersData = usersData;
        },
        (error) => {
          localStorage.removeItem('__token');
          this.router.navigate(['/login'])
        }
      );
    });
    this.authService.getUserData().subscribe((res) => {
      this.store.dispatch(storeUser({data:res}))
    })
  }

  click() {
    this.store.dispatch(check());
  }

  // addProduct(name: any, price: any) {
  //   this.store.dispatch({
  //     type: 'ADD_PRODUCT',
  //     payload: <Product>{
  //       name: name,
  //       price: price,
  //     },
  //   });
  //   setTimeout(() => {
  //     console.log(this.store.select((state) => state.product));
  //   }, 1000);
  // }

  // increment() {
  //   this.store.dispatch(increment());
  // }
  // decrement() {
  //   this.store.dispatch(decrement());
  // }
  // reset() {
  //   this.store.dispatch(reset());
  // }
  // add() {
  //   this.store.dispatch(incrementByFive({ value: 5 }));
  // }
}
