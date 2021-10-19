import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import {map} from 'rxjs/operators'
import { UsersService } from './users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user;
  search;
  constructor(private route:ActivatedRoute, private userService:UsersService) { }

  ngOnInit(): void {
    // localhost:4200/users/1 
    // ->
    // localhost:4200/users/2

    // params observable
    // subscribing
    // pipe method - allows us to use one or more operators
    // rxjs - map -> manipulate data anyway we want
    this.route.params.pipe(
      map((params:Params)=>{
        // {id: 1} -> 1
        return +params['id']
        // returning a number, not a params type
      })
    ).subscribe((num:number)=>{
      console.log(num)
    })
  }

  onSearch(){
    // send this info to the home component without using input and output
    // we want to notify the home component that it should be away of an event
    this.userService.searchSubject.next(this.search)
  }
  
}
