import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { FirstCompComponent } from './first-comp/first-comp.component';

const routes: Routes = [
  { path: 'heroes', component:HeroesComponent},
  { path: 'dashboard', component:DashboardComponent},
  { path: 'detail/:id/:name', component:HeroDetailComponent},
  { path: 'message', component:MessagesComponent},
  { path: 'first', component:FirstCompComponent},
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
