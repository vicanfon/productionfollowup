export class Machine {
  constructor(public id: number, public name: string, public performancemin: number, public availabilitymin: number, public qualitymin: number, oeemin: number){}
}

export interface Machine {
  id: number;
  name: string;
  performancemin: number;
  availabilitymin: number;
  qualitymin: number;
  oeemin: number;
}
