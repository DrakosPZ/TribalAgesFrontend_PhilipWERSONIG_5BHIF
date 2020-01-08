import {Ressource} from './ressource';

export class Ressources {

  constructor(public identifier: string, public ressources: Ressource[], public lastMonth: number) {
    this.identifier = identifier;
    this.ressources = ressources;
    this.lastMonth = lastMonth;
  }
}
