import { Component, OnInit } from '@angular/core';

import { DataService } from '../../services/data.service';
import {Machine} from '../../models/machine.model';
import {AuthService} from '../../services/auth.service';
import {MachineData} from '../../models/machine-data.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  initDate: Date;
  endDate: Date;

  machines: Machine[];
  selectedMachine: Machine;
  retrievedMachine: boolean;
  data: any;
  options: any;

  constructor(private dataService: DataService, public authService: AuthService) { }

  ngOnInit() {
    this.getMachines();
  }

  getMachines(): void {
    this.dataService.getMachines().subscribe(machines => this.machines = machines);
  }

  setChart(machineData: MachineData){
    //    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    this.data = {
      labels: machineData.dates,
      datasets: [
        {
          label: 'Performance',
          data: machineData.performance,
          fill: false,
          borderColor: '#bfc012'
        },
        {
          label: 'Quality',
          data: machineData.quality,
          fill: false,
          borderColor: '#e13455'
        },
        {
          label: 'Availability',
          data: machineData.availability,
          fill: false,
          borderColor: '#39d017'
        },
        {
          label: 'OEE',
          data: machineData.oee,
          fill: false,
          borderColor: '#b450dd'
        }
      ]
    };
    this.options = {
      title: {
        display: true,
        text: this.selectedMachine.name,
        fontSize: 16
      },
      legend: {
        position: 'bottom'
      },
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true,
            suggestedMax: 100,
          }
        }]
      }
    };
  }

  search(){
    this.dataService.getMachineData(this.selectedMachine.id, this.initDate, this.endDate).subscribe(machineData => {this.retrievedMachine = true; this.setChart(machineData[0]);});
  }
}
