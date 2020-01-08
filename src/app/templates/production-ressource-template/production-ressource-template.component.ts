import {Component, Input, OnInit} from '@angular/core';
import {Ressource} from '../../models/ressource';
import {CalculationAlgorythmServiceService} from '../../services/calculation-algorythm-service.service';
import {GameLoopManagerService} from '../../services/game-loop-manager.service';
import {debug} from 'util';

@Component({
  selector: 'app-production-ressource-template',
  template: `
    <div *ngFor="let Ressource of aviableRessources">
      <!--<p>
        <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#{{Ressource.name}}1"
                aria-expanded="false" aria-controls="{{Ressource.name}}1">{{Ressource.name}}</button>
      </p>-->
      <div class="row mb-4">
        <div class="col-lg-12">
          <!--<div class="collapse multi-collapse" id="{{Ressource.name}}1">-->
            <div class="card card-body bg-dark border-top-0 border-left-0 border-right-0">
              <h3 class="text-info" >{{Ressource.name}}</h3>
              <mat-slider class=" visibility: visible" min="0" max="100" step="1"
                          value="{{Ressource.savedPercentage}}" (input)="Ressource.savedPercentage = $event.value"></mat-slider>
              <table class="table text-light">
                <thead>
                <tr>
                  <td scope="col">Current State</td>
                  <td scope="col">Picked Percentage</td>
                  <td scope="col">To be Produced</td>
                  <td scope="col">Total State</td>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td>{{Ressource.amount}}</td>
                  <td>{{Ressource.savedPercentage}}</td>
                  <td>{{
                    this.calculationAlgorythm.roundTwoDigits(
                    this.calculationAlgorythm.calculateRessourceChange(Ressource.amount,
                    Ressource.growthFocus,
                    gameLoopManagerService.gameState.population.amount))}}
                  </td>
                  <td>{{
                    this.calculationAlgorythm.addValues( Ressource.amount,
                    this.calculationAlgorythm.calculateRessourceChange(Ressource.amount,
                    Ressource.growthFocus,
                    gameLoopManagerService.gameState.population.amount))}}</td>
                </tr>
                </tbody>
              </table>
            </div>
          <!--</div>-->
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./production-ressource-template.component.css']
})
export class ProductionRessourceTemplateComponent implements OnInit {

  @Input()aviableRessources: Ressource[];
  @Input()gameLoopManagerService: GameLoopManagerService;

  ressource: number;

  constructor(private calculationAlgorythm: CalculationAlgorythmServiceService) { }

  ngOnInit() {
  }

}
