import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-pagination-users',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  constructor(private usersService: UserService) { }

  public totalPages: number[] = [];
  private pages: number = 0;

  ngOnInit(): void {
    this.usersService.AllUsers
      .subscribe(resp => {
        this.totalPages.length = resp.total_pages;

      })
  }
}
