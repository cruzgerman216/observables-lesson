import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

// same way as registering it under the app module
// allows this service to get injected into components
@Injectable({providedIn: 'root'})
export class UsersService{

    // notify other components when an event happens
    // I want to pass data to components

    searchSubject = new Subject<string>()

}