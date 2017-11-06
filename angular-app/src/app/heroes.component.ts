import { Component, OnInit } from '@angular/core';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  providers: [HeroService]
})
export class HeroesComponent implements OnInit {
  title = 'Tour of Heroes';
  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService) {}
  ngOnInit(): void {
    this.getHeros();
  }
  onSelect(hero: Hero): void {
    this.selectedHero = hero
  }
  getHeros(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes)
  }
}
