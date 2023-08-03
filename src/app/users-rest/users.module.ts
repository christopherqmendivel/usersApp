import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListUsersComponent } from './components/list-users/list-users.component';
import { HomePageComponent } from './pages/home/home-page.component';
import { PaginationComponent } from './components/pagination/pagination.component';



@NgModule({
  declarations: [
    PaginationComponent,
    ListUsersComponent,
    HomePageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomePageComponent
  ]
})
export class UsersModule { }
