import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users/users.service';
import {map, filter} from "rxjs/operators"
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  homeSearch = ""
  constructor(private usersService:UsersService) { }

  ngOnInit(): void {
    this.usersService.searchSubject.pipe(
      filter((data)=>{
        // string == 1 => false
        return +data === 1
      }),
      map((data)=>{
        return data + " <- this is what you searched for!";
      })
    ).subscribe((data)=>{
      this.homeSearch = data;
    })
  }



}
