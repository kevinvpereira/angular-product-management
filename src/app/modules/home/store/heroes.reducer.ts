import { Action, createReducer, on, State } from '@ngrx/store';
import { Hero } from 'src/app/core/models/hero.model';
import { addHeroes } from './heroes.actions';

export const initialState: ReadonlyArray<Hero> = [];

export const heroesReducer = createReducer(
  initialState,
  on(addHeroes, (_state, { heroes }) => [...heroes])
);
