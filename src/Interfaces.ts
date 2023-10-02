import {HairColor} from './Enums';

export interface AppContextInterface {
  name: string, 
  age: number,
  isOld: boolean,
}

export interface User {
  name: string,
  age: number,
  isOld?: boolean,
  hairColor: HairColor
}