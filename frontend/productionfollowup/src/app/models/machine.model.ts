export class Machine {
  constructor(public id: number, public name: string, public performance: number, public availability: number, public quality: number, oee: number){}
}

export interface Machine {
  id: number;
  name: string;
  performance: number;
  availability: number;
  quality: number;
  oee: number;
}
