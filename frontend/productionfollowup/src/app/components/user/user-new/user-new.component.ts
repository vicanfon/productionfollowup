import { Component, OnInit } from '@angular/core';
import {User} from '../../../models/user.model';
import {AuthService} from '../../../services/auth.service';
import {DataService} from '../../../services/data.service';
import {DialogService, DynamicDialogConfig, DynamicDialogRef} from 'primeng/api';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-user-new',
  templateUrl: './user-new.component.html',
  styleUrls: ['./user-new.component.css']
})
export class UserNewComponent implements OnInit {

  user: User;

  constructor(private authService: AuthService, private dataService: DataService, private dialogService: DialogService, public ref: DynamicDialogRef, public config: DynamicDialogConfig) { }

  ngOnInit() {
    this.user = {mail:"",name:"", role:"", company:""};
  }

  createUser(form: NgForm) {
    this.dataService.createUser(form.value.mail, form.value.name,form.value.role, form.value.company);
    this.ref.close();
  }
  cancel() {
    this.ref.close();
  }
}
