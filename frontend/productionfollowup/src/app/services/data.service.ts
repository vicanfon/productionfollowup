import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {Machine} from '../models/machine.model';
import {User} from '../models/user.model';
import { environment } from './../../environments/environment';
import {MachineData} from '../models/machine-data.model';
import {Warning} from '../models/warning.model';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {
  }

  getMachineData(machineId: number, initDate: Date, endDate: Date): Observable<MachineData> {
    return this.http.get<MachineData>(environment.apiUrl + '/machinedata?id=' + machineId); // need to add initDate and endDate to the query
  }


  getWarningsbyCompany(company: string): Observable<Warning[]> {
    return this.http.get<Warning[]>(environment.apiUrl + '/warnings?company=' + company);
  }

  // get machines

  getMachines(): Observable<Machine[]> {
    return this.http.get<Machine[]>(environment.apiUrl + '/machines');
  }

  getMachine(id: number): Observable<Machine> {
    return this.http.get<Machine>(environment.apiUrl + '/machines?id=' + id);
  }

  createMachine(name: string, performancemin: number, availabilitymin: number, qualitymin: number, oeemin: number) {
    return this.http.post(environment.apiUrl + '/machines', {name: name, performancemin: performancemin, availabilitymin: availabilitymin, qualitymin: qualitymin, oeemin: oeemin});
  }

  editMachine(id: number, name: string, performancemin: number, availabilitymin: number, qualitymin: number, oeemin: number) {
    return this.http.patch(environment.apiUrl + '/machines?id='+id, {name: name, performancemin: performancemin, availabilitymin: availabilitymin, qualitymin: qualitymin, oeemin: oeemin});
  }

  deleteMachine(id: number) {
    return this.http.delete(environment.apiUrl + '/machines?id='+id);
  }

  // get users

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(environment.apiUrl + '/users');
  }

  getUser(mail: string): Observable<User> {
    return this.http.get<User>(environment.apiUrl + '/users?mail=' + encodeURIComponent(mail));
  }

  createUser(mail: string, name: string, role: string, company: string) {
    return this.http.post(environment.apiUrl + '/users',{
      mail: mail,
      name: name,
      role: role,
      company: company
    });
  }

  editUser(mail: string, name: string, role: string, company: string) {
    return this.http.patch(environment.apiUrl + '/users?mail=' + mail,{
      mail: mail,
      name: name,
      role: role,
      company: company
    });
  }

  deleteUser(mail: string) {
    return this.http.delete(environment.apiUrl + '/users?mail='+ mail);
  }

}
