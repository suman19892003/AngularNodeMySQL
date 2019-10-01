import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {Users} from '../models/users.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }
  getAllUsers(): Observable<Users> {
    return this.http.get<Users>('http://localhost:5000/emp/allusers');
  }
  addUser(item): Observable<Users[]>{
    return this.http.post<Users[]>('http://localhost:5000/emp/addUser', item);
  }
  updateUser(item): Observable<Users[]>{
    return this.http.post<Users[]>(`http://localhost:5000/emp/updateUser/${item.id}`, item);
  }
  getSelectedUser(item){
    return item;
  }
}
