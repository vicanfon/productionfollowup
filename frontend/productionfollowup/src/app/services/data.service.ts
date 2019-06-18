import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {Machine} from '../models/machine.model';
import {User} from '../models/user.model';
import { environment } from '../../environments/environment';
import {MachineData} from '../models/machine-data.model';
import {Warning} from '../models/warning.model';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {
  }

  getMeasuresbyMachine(machineId: number, company: string, initDate: Date, endDate: Date): Observable<MachineData> {
    return this.http.get<MachineData>(environment.apiUrl + '/measures?idmachine=' + machineId + "&company=" + company + "&initdate=" + initDate + "&enddate=" + endDate); // need to add initDate and endDate to the query
  }



  getWarningsbyCompany(company: string): Observable<Warning[]> {
    return this.http.get<Warning[]>(environment.apiUrl + '/warnings?company=' + company);
  }

  // get machines

  getMachines(company: string): Observable<Machine[]> {
    return this.http.get<Machine[]>(environment.apiUrl + '/machines?company='+company);
  }

  getMachine(id: number, company: string): Observable<Machine> {
    return this.http.get<Machine>(environment.apiUrl + '/machines?id=' + id +'&company=' + company);
  }

  createMachine(id: string, name: string, performancemin: number, qualitymin: number, availabilitymin: number, oeemin: number, company: string) {
    return this.http.post(environment.apiUrl + '/machines',{id: id, name: name, performance: performancemin, availability: availabilitymin, quality: qualitymin, oee: oeemin, company: company});
  }

  editMachine(id: string, name: string, performancemin: number, qualitymin: number, availabilitymin: number, oeemin: number, company: string) {
    return this.http.patch(environment.apiUrl + '/machines?id='+id, {name: name, performance: performancemin, availability: availabilitymin, quality: qualitymin, oee: oeemin, company: company});
  }

  deleteMachine(id: number, company: string) {
    return this.http.delete(environment.apiUrl + '/machines?id='+id+'&company='+company);
  }

  // get users

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(environment.apiUrl + '/users');
  }

  getUser(mail: string): Observable<User> {
    return this.http.get<User>(environment.apiUrl + '/users?mail=' + encodeURI(mail));
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
