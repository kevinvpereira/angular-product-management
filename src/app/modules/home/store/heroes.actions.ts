import { createAction, props } from '@ngrx/store';
import { Hero } from 'src/app/core/models/hero.model';

export const addHeroes = createAction(
  '[Hero] Add Heroes',
  props<{ heroes: Hero[] }>()
);
