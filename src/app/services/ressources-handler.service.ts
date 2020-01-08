import { Injectable } from '@angular/core';
import {CalculationAlgorythmServiceService} from '../services/calculation-algorythm-service.service';
import {Ressource} from '../models/ressource';

@Injectable({
  providedIn: 'root'
})
export class RessourcesHandlerService {

  private calculationAlgorythm = new CalculationAlgorythmServiceService();

  constructor() { }

  /**
   * Calls the calculation method and changes the old to the new values
   * @param populationWorkForce
   * @param ressources
   * @constructor
   */
  public CheckForRessourceUpdate(populationWorkForce: number, ressources: Ressource[]) {
    ressources.forEach(x => {
      x.amount = this.calculationAlgorythm.addValues( x.amount,
        this.calculationAlgorythm.calculateRessourceChange(
          x.amount, x.growthFocus, populationWorkForce
        ));
    });
  }

  /**
   * Adjusts the values if they are over 100 so that they are proportionally spread
   *
   * @param ressources
   * @constructor
   */
  public RelativateGrowthFocuses(ressources: Ressource[]) {
    let allPercentage = 0;
    ressources.forEach(x => allPercentage += x.savedPercentage);
    if (allPercentage < 100) {
      ressources.forEach(x => x.growthFocus = 100 / (allPercentage / x.savedPercentage));
    } else {
      ressources.forEach(x => x.growthFocus = x.savedPercentage );
    }
  }

  /**
   * Add a ceratin amount to one ressource in the List
   *
   * @param ressourceName
   * @param amount
   * @param ressources
   * @constructor
   */
  public AddspecificRessource(ressourceName, amount, ressources: Ressource[]) {
    ressources.forEach(item => {
      if (item.name === ressourceName) {
        item.amount += amount;
      }
    });
  }
}
