import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[] = HEROES;
  selectedHero?: Hero;

  constructor() { }

  onSelect(hero: Hero) : void
  {
    this.selectedHero = hero;
  }

  ngOnInit(): void {
  }

}

export interface Hero {
  id: number;
  name: string;
  age?: number;
}

export const HEROES: Hero[] = [
{id: 1, name: 'Windstorm', age:10},
{id: 2, name: 'Mr Someone', age:100},
{id: 3, name: 'Tornado'},
{id: 4, name: 'Lizzard king', age:27},
];