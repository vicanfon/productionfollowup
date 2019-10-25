import { Injectable } from '@angular/core';

import {MessageService} from './message.service';
import {Router} from '@angular/router';
import {DataService} from './data.service';
import {User} from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token: string;
  role: string;
  company: string;

  constructor(private messageService: MessageService, private router: Router, private dataService: DataService) { }

  signupUser(username: string, password: string){
    // call to storage to create login and password account
    this.messageService.add('User created');
  }

  login(username: string, password: string){
    // call to storage to create login and password account
    this.dataService.getUser(username).subscribe((user)=> {this.validate(user[0], password)});

    /*if (username === "mass" && password === "1234"){
      this.token = "abc";
      this.role = username;
      this.company = username;
      // this.router.navigate(['/dashboard']);
    } else if (username === "sis" && password === "1234"){
      this.token = "abc";
      this.role = username;
      this.company = username;
      this.router.navigate(['/dashboard']);
    }else {
      this.messageService.add('User not registered');
    }*/
  }

  validate(user: User, password: string){
    if(user){
                if(user.password == password){
      // this.token = "abc";
      this.role = user.role;
      this.company = user.company;
      localStorage.setItem('vfostoken', this.company);
      this.router.navigate(['/dashboard']);
      }else{
   this.messageService.add('Incorrect password');   
  }
    }else {
      this.messageService.add('User not registered');
    }
  }

  getToken(){

  }

  logout(){
//    this.token = null;
    this.company = null;
    localStorage.removeItem('vfostoken');
    this.router.navigate(['/signin']);
  }

  isAuthenticated(){
    // console.log("vfostoken:"+ localStorage.getItem('vfostoken'));
    return localStorage.getItem('vfostoken') != null;
  }
  getRole(){
    return localStorage.getItem('vfostoken');
  }
  getCompany(){
    return localStorage.getItem('vfostoken');
  }
}
