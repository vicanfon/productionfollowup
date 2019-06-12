export class MachineData {
  constructor(public id: number, public dates: string[], public performance: number[], public availability: number[], public quality: number[], oee: number[]){}
}

export interface MachineData {
  id: number;
  dates: string[];
  performance: number[];
  availability: number[];
  quality: number[];
  oee: number[];
}
