import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const warnings = [
      { id: 1, timestamp: new Date(), indicator: 'performance', value: 77, company: 'sis' },
      { id: 2, timestamp: new Date(), indicator: 'quality', value: 67, company: 'sis' }
    ];

    const machinedata = [
      { id: 1, dates: ['01/01/2019', '02/01/2019', '03/01/2019', '04/01/2019', '05/01/2019', '06/01/2019', '07/01/2019'], performance: [65, 59, 80, 81, 56, 55, 40], availability: [58, 48, 40, 59, 86, 77, 90], quality: [58, 78, 60, 89, 86, 57, 88], oee: [66, 75, 65, 78, 86, 91, 99]}
    ];

    const machines = [
      { id: 1, name: "M1", performancemin: 70, availabilitymin: 80, qualitymin: 75, oeemin: 90 },
      { id: 2, name: "M2", performancemin: 70, availabilitymin: 80, qualitymin: 75, oeemin: 90 },
      { id: 3, name: "M3", performancemin: 70, availabilitymin: 80, qualitymin: 75, oeemin: 90 }
    ];

    const users = [
      { mail: 'antonio@sis.com', name: 'AntonioPerez', role: 'sis', company: 'sis' }
    ];



    return { machines, users, machinedata, warnings};
  }
}
