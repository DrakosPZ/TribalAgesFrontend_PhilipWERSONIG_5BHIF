import { Injectable } from '@angular/core';
import { State } from '../models/state';
import {EventHandler} from '../models/EventHandler';
import {RessourcesHandlerService} from './ressources-handler.service';

@Injectable({
  providedIn: 'root'
})
export class GameLoopManagerService {

  counter: number;
  public stepMultiplier = 1;
  text: string;
  gameState: State;
  eventHandler = new EventHandler();

  private ressourceHandler = new RessourcesHandlerService();

  readonly timeInterval = 1000; // 1sec=1000

  constructor() { }

  get GetGameState(): State {
    return this.gameState;
  }
  set SetGameState(state: State) {
    this.gameState = state;
  }

  /**
   * Checks upon being created on if a full month or year has been acomplished and updates the other values accordingly, also starts the
   * Checking Loop.
   *
   * @constructor
   */
  public ElapseTime() {
    this.gameState.dateDay = this.gameState.dateDay + 1 * this.stepMultiplier;
    if (this.gameState.dateDay > 30) {
      this.gameState.dateDay = this.gameState.dateDay - 30;
      this.gameState.dateMonth++;
      if (this.gameState.dateMonth > 12) {
        this.gameState.dateMonth = this.gameState.dateMonth - 12;
        this.gameState.dateYear++;
      }
    }

    this.CheckForGameUpdate();

  }

  /**
   * Checks for Ressources or Event Changes
   *
   * @constructor
   */
  private CheckForGameUpdate() {
    console.log('Updates To be Checked');
    // console.log(this.gameState.storage.ressources);
    this.ressourceHandler.RelativateGrowthFocuses(this.gameState.storage.ressources);
    // console.log(this.gameState.storage.ressources);
    if (this.gameState.dateDay === 0) {
      return;
    }
    // Monthly Checks
    if (this.gameState.storage.lastMonth !== this.gameState.dateMonth) {
      this.gameState.storage.lastMonth = this.gameState.dateMonth;
      this.ressourceHandler.CheckForRessourceUpdate(this.gameState.population.amount, this.gameState.storage.ressources);
    }

    // Daily Checks
    this.eventHandler.CheckForEventActivation(this.gameState.dateDay, this.gameState.dateMonth, this.gameState.dateYear);
  }

}
