import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductionComponent } from './production/production.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {GameLoopManagerService} from './services/game-loop-manager.service';
import {EventsComponent} from './events/events.component';

const routes: Routes = [
  { path: 'production', component: ProductionComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'events', component: EventsComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
