import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../services/auth.service';
import {DataService} from '../../../services/data.service';
import {DialogService, DynamicDialogConfig, DynamicDialogRef} from 'primeng/api';
import {User} from '../../../models/user.model';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  user: User;

  constructor(private authService: AuthService, private dataService: DataService, private dialogService: DialogService, public ref: DynamicDialogRef, public config: DynamicDialogConfig) { }

  ngOnInit() {
      this.user= this.config.data;
  }

  saveUser() {
    this.dataService.editUser(this.user.mail,this.user.name,this.user.role,this.user.company);
    this.ref.close();
  }

  deleteUser() {
    this.dataService.deleteUser(this.user.mail);
    this.ref.close();
  }

}
