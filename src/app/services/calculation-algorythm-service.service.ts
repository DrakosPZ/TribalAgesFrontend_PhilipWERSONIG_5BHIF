import { Injectable } from '@angular/core';
import {Ressource} from '../models/ressource';

@Injectable({
  providedIn: 'root'
})
export class CalculationAlgorythmServiceService {

  constructor() { }

  /**
   * Calculates the amount of how much is being produced with this values
   *
   * @param baseAmount
   * @param percentage
   * @param populationWorkForce
   */
  public calculateRessourceChange(baseAmount: number,
                                  percentage: number,
                                  populationWorkForce: number): number {
    return this.roundTwoDigits(((percentage / 100) * populationWorkForce * 5 ) / 50);
   }

  /**
   * adds two values together and rounds on two decimal digits
   * @param baseAmount
   * @param addition
   */
  public addValues(baseAmount: number, addition: number): number {
    return this.roundTwoDigits(baseAmount + addition);
  }

  /**
   * rounds the value on two decimal digits
   * @param value
   */
   public roundTwoDigits(value: number): number {
     return Math.round(value  * 100) / 100;
    }
}
