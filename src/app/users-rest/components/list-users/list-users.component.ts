import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../interface/user.interface';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent {
  
  @Input()
  public usersList: User[] = [];
  //public totalPage : number = 1;

  constructor( private usersService: UserService ){}

  ngOnInit(): void {
    this.usersService.AllUsers.subscribe(); 
  }
    
  

  
}
