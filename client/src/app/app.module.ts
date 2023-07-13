import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavComponent } from './components/nav/nav.component';
import { ProfileComponent } from './components/profile/profile.component';
import { TableDataComponent } from './components/table-data/table-data.component';
import { CreateComponent } from './pages/create/create.component';
import { LoginComponent } from './pages/login/login.component';
import { MainTableComponent } from './pages/main-table/main-table.component';
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
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
