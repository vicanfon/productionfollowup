import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';
import {AuthService} from '../../services/auth.service';
import {Warning} from '../../models/warning.model';

@Component({
  selector: 'app-warnings',
  templateUrl: './warnings.component.html',
  styleUrls: ['./warnings.component.css']
})
export class WarningsComponent implements OnInit {

  warnings: Warning[];
  cols: any[];

  constructor(private dataService: DataService, public authService: AuthService) { }

  ngOnInit() {
    console.log(this.authService.getCompany());
    this.dataService.getWarningsbyCompany(this.authService.getCompany()).subscribe(warnings => {this.warnings = warnings; console.log("warnings: "+JSON.stringify(warnings));});

    this.cols = [
      { field: 'timestamp', header: 'Timestamp' },
      { field: 'indicator', header: 'Indicator' },
      { field: 'value', header: 'Value' }
    ];

  }

}
