import { Injectable } from '@angular/core';
import {Ressource} from '../models/ressource';

@Injectable({
  providedIn: 'root'
})
export class CalculationAlgorythmServiceService {

  constructor() { }

  public calculateRessourceChange(baseAmount: number,
                                  percentage: number,
                                  populationWorkForce: number): number {
    return this.roundTwoDigits(((percentage / 100) * populationWorkForce * 5 ) / 50);
   }

  public addValues(baseAmount: number, addition: number): number {
    return this.roundTwoDigits(baseAmount + addition);
  }

   public roundTwoDigits(value: number): number {
     return Math.round(value  * 100) / 100;
    }
}
