import { Component, OnInit } from '@angular/core';
import { User } from '../../interface/user.interface';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

  public title: string = 'hello reqRes users!';

  constructor(private usersService: UserService){}
  

  get usersList(): User[]{
    return this.usersService.userList;
  }

  get totalPages(): number {
    return this.usersService.totalPages;
  }

  get onNumberPage(): number {
    return this.usersService.numberPage;
  }

}
