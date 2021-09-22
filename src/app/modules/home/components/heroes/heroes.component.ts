import { Component, Input } from '@angular/core';
import { Hero } from 'src/app/core/models/hero.model';

@Component({
  selector: 'heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent {
  @Input() heroes: readonly Hero[] | null = [];
}
