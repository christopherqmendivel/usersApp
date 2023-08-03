import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { UserResponse } from '../interface/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private http: HttpClient ) { }



  private serviceUrl:   string = 'https://reqres.in/api/users';

get AllUsers() {
  return this.http.get<UserResponse>(`${ this.serviceUrl }`)
    .pipe(
      map( resp => resp )
    )
}
  
}
