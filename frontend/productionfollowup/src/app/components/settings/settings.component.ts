import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';
import {Machine} from '../../models/machine.model';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  machines: Machine[];
  cols_m: any[];
  selectedMachine: Machine;
  newMachine: boolean;
  machine: any;

  displayDialog_m: boolean;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getMachines().subscribe(machines => this.machines = machines);

    this.cols_m = [
      { field: 'id', header: 'Id' },
      { field: 'name', header: 'Name' },
      { field: 'performancemin', header: 'Performance Min' },
      { field: 'qualitymin', header: 'Quality Min' },
      { field: 'availabilitymin', header: 'Availability Min' },
      { field: 'oeemin', header: 'OEE Min' }
    ];
  }


  showDialogToAdd_m() {
    this.newMachine = true;
    this.machine = {};
    this.displayDialog_m = true;
  }
  create_m() {
    this.dataService.createMachine(this.machine.name, +this.machine.performancemin, +this.machine.availabilitymin, +this.machine.qualitymin, +this.machine.oeemin);
    this.displayDialog_m = false;
  }
  save_m() {
    this.dataService.editMachine(+this.machine.id, this.machine.name, +this.machine.performancemin, +this.machine.availabilitymin, +this.machine.qualitymin, +this.machine.oeemin);
    this.displayDialog_m = false;
  }

  delete_m() {
    this.dataService.deleteMachine(+this.machine.id);
    this.displayDialog_m = false;
  }

  onRowSelect_m(event) {
    this.newMachine = false;
    this.machine = this.cloneObject(event.data);
    this.displayDialog_m = true;
  }

  cloneObject(c: any): any {
    let o = {};
    for (let prop in c) {
      o[prop] = c[prop];
    }
    return o;
  }

}
