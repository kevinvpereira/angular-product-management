import { Component, HostListener, Input } from '@angular/core';
import { Hero } from 'src/app/core/models/hero.model';

@Component({
  selector: 'hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent {
  @Input() hero!: Hero;

  state = 'out';

  @HostListener('mouseenter')
  hoverIn(): void {
    this.state = 'in';
  }

  @HostListener('mouseleave')
  hoverOut(): void {
    this.state = 'out';
  }
}
