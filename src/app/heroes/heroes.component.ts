import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  hero: Hero = { id: 1, name: 'Windstorm', age: 34};

  constructor() { }

  ngOnInit(): void {
  }

}


export interface Hero {
  id: number;
  name: string;
  age?: number;
}