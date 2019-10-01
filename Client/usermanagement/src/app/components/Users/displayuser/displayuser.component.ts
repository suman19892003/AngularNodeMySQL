import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {UsersService} from '../../../services/users.service';
import {Users} from '../../../models/users.model';

@Component({
  selector: 'app-displayuser',
  templateUrl: './displayuser.component.html',
  styleUrls: ['./displayuser.component.css']
})
export class DisplayuserComponent implements OnInit {

  username='Suman Test'
  @Output() UserValue = new EventEmitter<Object>();
  alluser: Users;
  constructor(private userService: UsersService) { }

  ngOnInit() {
    this.userService.getAllUsers().subscribe(user => {
      this.alluser = user;
    });
  }

  editUser(user){
    debugger
    this.UserValue.emit(user);
  }
}
