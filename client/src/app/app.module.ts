import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavComponent } from './components/nav/nav.component';
import { ProfileComponent } from './partials/profile/profile.component';
import { TableDataComponent } from './components/table-data/table-data.component';
import { CreateComponent } from './pages/create/create.component';
import { LoginComponent } from './pages/login/login.component';
import { MainTableComponent } from './pages/main-table/main-table.component';
import { RegisterComponent } from './pages/register/register.component';
import { UpdateUserComponent } from './pages/update-user/update-user.component';
import { SearchUserComponent } from './pages/search-user/search-user.component';
import { ManipulateNavComponent } from './partials/manipulate-nav/manipulate-nav.component';
import { SearchComponent } from './partials/search/search.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PaginateButtonComponent } from './partials/paginate-button/paginate-button.component';
import { StoreModule } from '@ngrx/store';
import { userDataReducer, userReducer } from './store/reducers/counter.reducer';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
import { PaginateComponent } from './partials/paginate/paginate.component';
import { TableComponent } from './components/table/table.component';
import { MatTableModule } from '@angular/material/table';
import { PageEvent } from '@angular/material/paginator';
import { JsonPipe } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavComponent,
    ProfileComponent,
    TableDataComponent,
    CreateComponent,
    LoginComponent,
    MainTableComponent,
    RegisterComponent,
    UpdateUserComponent,
    SearchUserComponent,
    ManipulateNavComponent,
    SearchComponent,
    PaginateButtonComponent,
    PaginateComponent,
    TableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ user: userReducer }),
    StoreModule.forRoot({dataStore:userDataReducer}) ,
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatSlideToggleModule,
    MatPaginatorModule,
    JsonPipe,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
