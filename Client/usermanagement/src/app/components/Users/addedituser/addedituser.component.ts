import { Component, OnInit, Input } from '@angular/core';
import {Users} from '../../../models/users.model';
import {UsersService} from '../../../services/users.service';

@Component({
  selector: 'app-addedituser',
  templateUrl: './addedituser.component.html',
  styleUrls: ['./addedituser.component.css']
})
export class AddedituserComponent implements OnInit {

  @Input() userEditData = {} as Users;
  adduser: boolean = true;
  userData = {} as Users;
  //public userData ={} as any;
  constructor(private service: UsersService) {
  }

  ngOnInit() {
  }
  submit(){
    this.service.addUser(this.userData).subscribe(item=>{
      console.log('Users added to DB.');
    })
  }

  update(){
    debugger;
    this.service.updateUser(this.userEditData).subscribe(item=>{
      console.log('User Updated.');
    })
  }

  change(){
    this.adduser=true
  }


}
