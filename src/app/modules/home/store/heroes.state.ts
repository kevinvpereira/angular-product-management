import { Hero } from 'src/app/core/models/hero.model';

export default interface HeroesState {
  heroes: ReadonlyArray<Hero>;
}
