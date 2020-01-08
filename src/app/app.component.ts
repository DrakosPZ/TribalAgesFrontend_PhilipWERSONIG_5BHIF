import {Component, ViewChild} from '@angular/core';
import { LoadSaveServiceService } from './services/load-save-service.service';
import { GameLoopManagerService } from './services/game-loop-manager.service';
import { State } from './models/state';
import {Subscription, interval} from 'rxjs';
import {Ressource} from './models/ressource';
import {Ressources} from './models/ressources';
import {ProductionComponent} from './production/production.component';
import {EventHandler} from './models/EventHandler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ GameLoopManagerService ]
})
export class AppComponent {
  private firstTimeLoaded = false;
  private continueClicked = false;
  private ContinueStartBTNText = 'Start';
  private speedCounter = 1;
  private ContinueSpeedBTNText = 'Speed ' + this.speedCounter;

  private buttonClickable = false;

  subscription: Subscription;

  constructor(private loadSaveServiceService: LoadSaveServiceService, private gameLoopManagerService: GameLoopManagerService) {
    this.gameLoopManagerService = new GameLoopManagerService();
    this.loadSaveServiceService.loadStandardState().subscribe(state => {
      this.gameLoopManagerService.SetGameState =
        new State(state.identifier, state.name, state.population,
          state.speedmultiplier, state.dateDay, state.dateMonth, state.dateYear,
          new Ressources(state.storage.identifier, state.storage.ressources, state.storage.lastMonth));
      this.transportMultiplierFactor();
      this.buttonClickable = true;
    });
  }

  onActivate(componentReference) {
    console.log('Component Reference');
    console.log(componentReference);
    componentReference.setReferenceGameLoopManager(this.gameLoopManagerService);
  }

  public btnPressContinue() {
    if (!this.firstTimeLoaded) {
      this.firstTimeLoaded = true;
      this.continueClicked = true;
      this.ContinueStartBTNText = 'Pause';
      this.startGameLoop();
    } else {
      if (!this.continueClicked) {
        this.continueClicked = true;
        this.ContinueStartBTNText = 'Pause';
        this.startGameLoop();
      } else {
        this.continueClicked = false;
        this.ContinueStartBTNText = 'Continue';
        this.stopGameLoop();
      }
    }
  }

  public btnPressSpeed() {
    if (this.speedCounter === 8) {
      this.speedCounter = 1;
    } else {
      this.speedCounter = this.speedCounter * 2;
    }
    this.ContinueSpeedBTNText = 'Speed ' + this.speedCounter;
    this.transportMultiplierFactor();
  }

  public btnPressSave() {
    this.loadSaveServiceService.saveDataToServer(
      this.gameLoopManagerService.gameState
      )
      .subscribe(() => { console.log('ObjectSaved'); this.loadSaveServiceService.saved(); });
    console.log(this.getDate());
  }

  public btnPressLoad() {
    this.stopGameLoop();
    this.loadSaveServiceService.loadDataFromServer(this.gameLoopManagerService.gameState.identifier).subscribe(state => {
      this.gameLoopManagerService.SetGameState =
        new State(state.identifier, state.name, state.population,
                  state.speedmultiplier, state.dateDay, state.dateMonth, state.dateYear,
                  new Ressources(state.storage.identifier, state.storage.ressources, state.storage.lastMonth));
      console.log(this.gameLoopManagerService.gameState);
      console.log(this.getDate());
      this.firstTimeLoaded = true;
      this.continueClicked = true;
      this.ContinueStartBTNText = 'Pause';
      this.transportMultiplierFactor();

      this.startGameLoop();
      if (typeof this.subscription !== 'undefined') {
        this.stopGameLoop();
        this.startGameLoop();
      }
    });
  }

  private startGameLoop() {
    this.subscription = interval(this.gameLoopManagerService.timeInterval)
      .subscribe(() => this.gameLoopManagerService.ElapseTime());
  }

  private stopGameLoop() {
    this.subscription.unsubscribe();
  }

  private transportMultiplierFactor() {
    this.gameLoopManagerService.stepMultiplier = this.speedCounter;
  }

  public getDate(): string {
    return this.gameLoopManagerService.GetGameState.dateDay + '.'
      + this.gameLoopManagerService.GetGameState.dateMonth + '.'
      + this.gameLoopManagerService.GetGameState.dateYear;
  }
}
