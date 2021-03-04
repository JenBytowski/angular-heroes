import { Component, OnInit } from '@angular/core';
import { HeroService } from '../services/hero-service/hero.service';
import { MessageService } from '../services/message-service/message.service';

@Component({
  selector: 'heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];
  selectedHero?: Hero;

  constructor(private heroService: HeroService, private messageService: MessageService) { 
    this.heroes = [];
    this.messageService.addMessage('heroes initialized in heroes component')
  }

  onSelect(hero: Hero) : void
  {
    this.selectedHero = hero;
    this.messageService.addMessage(`selected hero with id ${hero.id} in heroes component`);
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