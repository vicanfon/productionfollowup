import { Component, OnInit } from '@angular/core';

import { DataService } from '../../services/data.service';
import {Machine} from '../../models/machine.model';
import {AuthService} from '../../services/auth.service';
import {MachineData} from '../../models/machine-data.model';
import {NgForm} from "@angular/forms";
import {MessageService} from "../../services/message.service";

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
  dates: any =[];
  performance: any=[];
  availability: any=[];
  quality: any =[];
  oee: any=[];

  constructor(private dataService: DataService, public authService: AuthService, public messageService: MessageService) { }


  ngOnInit() {
    this.getMachines();
  }

  getMachines(): void {
    this.dataService.getMachines(this.authService.getCompany()).subscribe(machines => this.machines = machines);
  }

  setChart(measuresdata: any){
    this.dates=new Set();
    this.performance=[];
    this.quality=[];
    this.availability=[];
    this.oee=[];

measuresdata.forEach((element)=>{
      this.dates.add(element.timestamp);
      if (element.type == "performance"){
        this.performance.push(+element.data);
      }else if (element.type == "quality") {
        this.quality.push(+element.data);
      }else if (element.type == "availability") {
        this.availability.push(+element.data);
      } else if (element.type == "oee") {
        this.oee.push(+element.data);
      }
    });
    this.data = {
      labels: Array.from(this.dates),
      datasets: [
        {
          label: 'Performance',
          data: this.performance,
          fill: false,
          borderColor: '#bfc012'
        },
        {
          label: 'Quality',
          data: this.quality,
          fill: false,
          borderColor: '#e13455'
        },
        {
          label: 'Availability',
          data: this.availability,
          fill: false,
          borderColor: '#39d017'
        },
        {
          label: 'OEE',
          data: this.oee,
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
            suggestedMax: 1,
          }
        }]
      }
    };
  }

  search(form: NgForm){
    if(this.selectedMachine && form.value.idate && form.value.edate){
      this.dataService.getMeasuresbyMachine(this.selectedMachine.id, this.authService.getCompany(), form.value.idate.toLocaleString('en-US'), form.value.edate.toLocaleString('en-US')).subscribe(machineData => {this.retrievedMachine = true; console.log("dataretrieved: "+ JSON.stringify(machineData)); this.setChart(machineData);});
    }else{
      this.messageService.add("Missing paramaters");
    }
  }
}
