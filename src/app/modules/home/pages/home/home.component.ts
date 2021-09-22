import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { HeroService } from 'src/app/core/services/hero.service';
import { addHeroes } from '../../store/heroes.actions';
import { selectHeroesProperty } from '../../store/heroes.selector';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  heroes$ = this._store.pipe(select(selectHeroesProperty));

  constructor(private _heroService: HeroService, private _store: Store) {}

  ngOnInit(): void {
    this._heroService.list().subscribe((heroes) => {
      this._store.dispatch(addHeroes({ heroes }));
    });
  }
}
