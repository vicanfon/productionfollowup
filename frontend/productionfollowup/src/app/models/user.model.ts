export class User {
  // composed of data coming from type of alarm, type of failure, etc
  constructor(public mail: string, public name: string, public company: string, public role: string){}
}
export interface User {
  name: string;
  mail: string;
  company: string;
  role: string;
}
