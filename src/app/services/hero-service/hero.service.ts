
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from '../../heroes/heroes.component';
import { MessageService } from '../message-service/message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  public getHeroes(): Observable<Hero[]> {
    let heroes = of(HEROES);
    this.messageService.addMessage(`hero servise successfully get heroes`);

    return heroes ?? [];
  }

  //TODO разобраться почему underfind
  /*  getHero(id: number): Observable<Hero | undefined> {
     this.messageService.addMessage(`invoking getHero method with hero id ${id}`);
     return of(HEROES.find(hero => hero.id === id));
   } */

  getHeroByIdSync(id: number): Hero | undefined {
    return HEROES.find(hero => hero.id === id);
  }

  constructor(private messageService: MessageService) {

  }
}

export const HEROES: Hero[] = [
  { id: 1, name: 'Windstorm', age: 10 },
  { id: 2, name: 'Mr Someone', age: 100 },
  { id: 3, name: 'Tornado' },
  { id: 4, name: 'Lizzard king', age: 27 },
];
