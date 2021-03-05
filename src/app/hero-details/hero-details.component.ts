import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../services/hero-service/hero.service';
import { Hero } from '../heroes/heroes.component';

@Component({
  selector: 'hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css']
})
export class HeroDetailsComponent implements OnInit {

  hero?: Hero;

  constructor(private route: ActivatedRoute,
    private location: Location,
    private heroService: HeroService) {
  }

  ngOnInit(): void {
    let heroId = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHeroById(heroId).subscribe(hero => this.hero = hero);
  }

  saveChanges(hero: Hero): void {
    this.heroService.updateHero(hero).subscribe(inf => { this.location.back(); })
  }

  goBack(): void {
    this.location.back();
  }
}
