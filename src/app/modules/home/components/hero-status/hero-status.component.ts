import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, HostListener, Input } from '@angular/core';
import { HeroPowerstats } from 'src/app/core/models/hero.model';

@Component({
  selector: 'hero-status',
  templateUrl: './hero-status.component.html',
  styleUrls: ['./hero-status.component.scss'],
  animations: [
    trigger('hoverEffect', [
      state(
        'in',
        style({
          height: '30rem',
          width: '30rem',
          opacity: 1,
          zIndex: 10,
        })
      ),
      state(
        'out',
        style({
          height: '0',
          width: '30rem',
          opacity: 0,
          zIndex: 0,
        })
      ),
      transition('in <=> out', [animate('1s')]),
    ]),
  ],
})
export class HeroStatusComponent {
  @Input() stats!: HeroPowerstats;
  @Input() state = 'out';

  getTotal(): number {
    let value = 0;
    for (const key in this.stats) {
      if (this.stats[key]) {
        value += +this.stats[key];
      }
    }

    return value;
  }
}
