import { NgModule, createComponent } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainTableComponent } from './pages/main-table/main-table.component';
import { SearchUserComponent } from './pages/search-user/search-user.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { CreateComponent } from './pages/create/create.component';
import { UpdateUserComponent } from './pages/update-user/update-user.component';

const routes: Routes = [
  { path: '', component: MainTableComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'add', component: CreateComponent },
  { path: 'search', component: SearchUserComponent },
  { path: 'update', component: UpdateUserComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
