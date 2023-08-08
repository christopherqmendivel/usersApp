import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { User, UserResponse } from '../interface/user.interface';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private serviceUrl: string = 'https://reqres.in/api/users';
  public userList : User[] = [];
  public totalPages: number = 1;
  public numberPage: number = 1;
  
  constructor(private http: HttpClient) { }


  get AllUsers() {

    let params = new HttpParams()
      .set("page", this.numberPage);

   return  this.http.get<UserResponse>(`${this.serviceUrl}`, { params })
      .pipe(
        map( resp => {
          this.userList = resp.data;
          this.totalPages = resp.total_pages;
          this.numberPage = resp.page;
        })
      )
  }


  nextPage(event: any) {
    var target = event.target || event.srcElement || event.currentTarget;
    var idAttr = target.attributes.id;
    var value = parseInt(idAttr.nodeValue);

    this.numberPage = this.numberPage + 1;
    return this.numberPage;
  }
}
