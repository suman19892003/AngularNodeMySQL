import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// HTTP Client Model
import { HttpClientModule } from '@angular/common/http';

import { UsersComponent } from './components/Users/users/users.component';
import {UsersService} from './services/users.service';
import { AddedituserComponent } from './components/Users/addedituser/addedituser.component';
import { DisplayuserComponent } from './components/Users/displayuser/displayuser.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    AddedituserComponent,
    DisplayuserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    //ReactiveFormsModule
  ],
  providers: [UsersService,AddedituserComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
