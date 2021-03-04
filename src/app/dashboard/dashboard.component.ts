import { Component, OnInit } from '@angular/core';
import { Hero } from '../heroes/heroes.component';
import { HeroService } from '../services/hero-service/hero.service';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  heroes: Hero[];

  constructor(private heroService: HeroService) {
    this.heroes = [];
  }

  ngOnInit(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

}
