import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../interface/user.interface';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit{
  
  constructor( private usersService: UserService ){}

  public users: User[] = [];

  ngOnInit(): void {
    this.usersService.AllUsers
      .subscribe( resp => {
        this.users = resp.data;
      })
  }

}
