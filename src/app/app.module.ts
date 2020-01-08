import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { ProductionComponent } from './production/production.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSliderModule, MatSlideToggleModule} from '@angular/material';
import { RessourceDisplayComponent } from './templates/ressource-display/ressource-display.component';
import { ProductionRessourceTemplateComponent } from './templates/production-ressource-template/production-ressource-template.component';
import {GameLoopManagerService} from './services/game-loop-manager.service';
import { EventsComponent } from './events/events.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ProductionComponent,
    RessourceDisplayComponent,
    ProductionRessourceTemplateComponent,
    EventsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSliderModule,
    MatSlideToggleModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgbModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
