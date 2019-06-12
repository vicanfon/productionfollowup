import { Component } from '@angular/core';
import {AuthService} from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private authService: AuthService){}

  formatMain(){
    if (this.authService.isAuthenticated()){
      return "col-md-10";
    }else
      return "col-md-12";
  }
}
