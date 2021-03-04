import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from '../heroes/heroes.component';
import { HeroDetailsComponent } from '../hero-details/hero-details.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { MessagesComponent } from '../messages/messages.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: "full" },
  { path: 'heroes', component: HeroesComponent },
  { path: 'details/:id', component: HeroDetailsComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'message-log', component: MessagesComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
