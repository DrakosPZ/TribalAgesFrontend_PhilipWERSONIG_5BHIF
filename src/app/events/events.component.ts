import {Component, Input, OnInit} from '@angular/core';
import {EventHandler} from '../models/EventHandler';
import {Event} from '../models/event';
import {GameLoopManagerService} from '../services/game-loop-manager.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  gameLoopManagerService: GameLoopManagerService;
  eventhandler: EventHandler;
  events: Event[];

  constructor() { }

  ngOnInit() {
  }

  public setReferenceGameLoopManager(gameLoopManagerService: GameLoopManagerService) {
    this.gameLoopManagerService = gameLoopManagerService;
    this.eventhandler = gameLoopManagerService.eventHandler;
    this.events = this.eventhandler.activeEvents;
  }

  public eventAnswerButtonClick(eventID, AnswerID) {
    this.events = this.eventhandler.eventAnswerActivated(eventID, AnswerID, this.gameLoopManagerService.gameState.storage);
  }
}
