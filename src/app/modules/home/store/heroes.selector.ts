import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Hero } from 'src/app/core/models/hero.model';
import HeroesState from './heroes.state';

// export const selectHeroes = createSelector(
//     (state: HeroesState) => state.heroes,
//     (heroes: Array<Hero>) => heroes
// );

export const selectHeroes = createFeatureSelector<HeroesState>('heroesFeature');

export const selectHeroesProperty = createSelector(
  selectHeroes,
  (state: HeroesState) => state.heroes
);
