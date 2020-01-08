import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {GameLoopManagerService} from '../services/game-loop-manager.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-production',
  templateUrl: './production.component.html',
  styleUrls: ['./production.component.css'],
  providers: [ GameLoopManagerService ]
})
export class ProductionComponent implements OnInit {

  private gameLoopManagerService: GameLoopManagerService;

  constructor() { }

  ngOnInit() {
    console.log(this.gameLoopManagerService);
    // console.log('GameLoop Content: ' + this.gameLoopManagerService.GetGameState.storage);
  }
  public setReferenceGameLoopManager(gameLoopManagerService: GameLoopManagerService) {
    this.gameLoopManagerService = gameLoopManagerService;
  }
}
