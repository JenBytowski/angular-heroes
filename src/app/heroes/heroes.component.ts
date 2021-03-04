import { Component, OnInit } from '@angular/core';
import { HeroService } from '../services/hero-service/hero.service';

@Component({
  selector: 'heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];
  selectedHero?: Hero;

  constructor(private heroService: HeroService) { 
    this.heroes = [];
  }

  onSelect(hero: Hero) : void
  {
    this.selectedHero = hero;
  }

  ngOnInit(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

}

export interface Hero {
  id: number;
  name: string;
  age?: number;
}