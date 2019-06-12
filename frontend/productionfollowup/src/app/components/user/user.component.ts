import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';
import {AuthService} from '../../services/auth.service';
import {DialogService} from 'primeng/api';
import {UserDetailComponent} from './user-detail/user-detail.component';
import {User} from '../../models/user.model';
import {UserNewComponent} from './user-new/user-new.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: User[];
  cols: any[];
  selectedUser: User;
  display: boolean;

  constructor(private dataService: DataService, private authService: AuthService, public dialogService: DialogService) { }

  ngOnInit() {
    this.getUsers();

    this.cols = [
      { field: 'name', header: 'Name' },
      { field: 'mail', header: 'Mail' },
      { field: 'company', header: 'Company' },
      { field: 'role', header: 'Role' }
    ];
  }

  show(event) {
    const ref = this.dialogService.open(UserDetailComponent, {
      data: event.data,
      header: 'User Detail'
    });
    ref.onClose.subscribe(x => console.log(x));
  }

  getUsers(): void {
    this.dataService.getUsers().subscribe(users => this.users = users);
  }
  createUser(event):void {
    const ref = this.dialogService.open(UserNewComponent, {
      header: 'New User',
      width: '85%',
      contentStyle: {'max-height': '95vw', 'overflow': 'auto'}
    });
    ref.onClose.subscribe(x => console.log(x));
  }

}
