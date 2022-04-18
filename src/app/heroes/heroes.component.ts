import { Component } from '@angular/core';
import { HEROES } from '../mocks/mock-heroes';
import { Hero } from '../models/hero.model';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent {

  hero: Hero = {
    id: 1,
    name: 'Wolverine',
    dt_nascimento: Date.now()
  }

  heroes = HEROES;
  selectedHero?: Hero;

  onSelectHero(hero: Hero): void {
    this.selectedHero = hero;
  }
}
