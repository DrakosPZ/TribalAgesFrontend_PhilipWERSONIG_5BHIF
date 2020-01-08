import {Component, Input, OnInit} from '@angular/core';
import { Ressource } from '../../models/ressource';

@Component({
  selector: 'app-ressource-display',
  template: `
    <a class="nav-item nav-link" *ngFor="let Ressource of aviableRessources">{{Ressource.name}}: {{Ressource.amount}}</a>
  `,
  styleUrls: ['./ressource-display.component.css']
})
export class RessourceDisplayComponent implements OnInit {

  @Input()aviableRessources: Ressource[];

  constructor() { }

  ngOnInit() {
  }

}
