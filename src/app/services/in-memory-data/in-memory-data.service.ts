import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Hero } from '../../heroes/heroes.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  heroes: Hero[];

  constructor() {
    this.heroes = [
      { id: 1, name: 'Windstorm', age: 10 },
      { id: 2, name: 'Mr Someone', age: 100 },
      { id: 3, name: 'Tornado' },
      { id: 4, name: 'Lizzard king', age: 27 },
    ];
  }

  createDb(reqInfo?: RequestInfo): {} | Observable<{}> | Promise<{}> {
    let heroes = this.heroes;

    return { heroes };
  }
}
