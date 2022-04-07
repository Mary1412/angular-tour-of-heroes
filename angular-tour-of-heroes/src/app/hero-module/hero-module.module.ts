import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroSearchComponent } from './hero-search/hero-search.component';

import { FirstCompComponent } from './first-comp/first-comp.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';



@NgModule({
  declarations: [
    HeroesComponent,
    HeroSearchComponent,
    HeroDetailComponent,
    FirstCompComponent 
  ],
  imports: [
    CommonModule
  ]
})
export class HeroModuleModule { }
