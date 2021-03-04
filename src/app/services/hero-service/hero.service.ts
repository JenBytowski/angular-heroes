import { Injectable } from '@angular/core';
import { Hero } from '../../heroes/heroes.component';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  public getHeroes(): Observable<Hero[]>
  {
    return of(HEROES) ?? [];
  }

  constructor() { }
}

export const HEROES: Hero[] = [
  {id: 1, name: 'Windstorm', age:10},
  {id: 2, name: 'Mr Someone', age:100},
  {id: 3, name: 'Tornado'},
  {id: 4, name: 'Lizzard king', age:27},
  ];
