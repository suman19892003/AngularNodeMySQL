import { Component, OnInit } from '@angular/core';
import {Users} from '../../../models/users.model';
import {AddedituserComponent} from "../addedituser/addedituser.component";


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers:[AddedituserComponent]
})


export class UsersComponent implements OnInit {

  public userValue = {} as Users;
  constructor(private addedituserComponent:AddedituserComponent ) { }
  //constructor() { }

  ngOnInit() {
    //this.addedituserComponent.ngOnInit();
  }
  getUserFromChild(user) {
    debugger;
    this.userValue = user;
    this.addedituserComponent.adduser=false;

  }
}
