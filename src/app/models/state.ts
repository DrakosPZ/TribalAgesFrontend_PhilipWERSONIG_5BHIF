import {Ressources} from './ressources';
import {Ressource} from './ressource';

export class State {
  constructor(public identifier: string, public name: string, public population: Ressource,
              public speedmultiplier: number, public dateDay: number, public dateMonth: number, public dateYear: number,
              public storage: Ressources) {}
}
