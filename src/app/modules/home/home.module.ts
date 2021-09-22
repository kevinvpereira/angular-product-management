import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { HomeRoutingModule } from './home.routing';
import { StoreModule } from '@ngrx/store';
import { heroesReducer } from './store/heroes.reducer';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroComponent } from './components/hero/hero.component';
import { HeroStatusComponent } from './components/hero-status/hero-status.component';

@NgModule({
  declarations: [
    HomeComponent,
    HeroesComponent,
    HeroComponent,
    HeroStatusComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    StoreModule.forFeature('heroesFeature', { heroes: heroesReducer }),
  ],
})
export class HomeModule {}
