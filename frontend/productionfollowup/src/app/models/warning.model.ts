export class Warning {
  // composed of data coming from type of alarm, type of failure, etc
  constructor(public id: number, public timestamp: Date, public indicator: string, public value: number, public company: string, public machine: string){}
}
export interface Warning {
  id: number;
  timestamp: Date;
  indicator: string;
  value: number;
  company: string;
  machine: string
}
