
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from '../../heroes/heroes.component';
import { MessageService } from '../message-service/message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private readonly dbUrl: string;

  public getHeroes(): Observable<Hero[]> {
    let heroes = this.httpClient.get<Hero[]>(this.dbUrl).pipe(catchError((err, params) => {
      this.messageService.addMessage(`error: in HeroService.getHeroes method ${err}`);

      return of([]);
    })).pipe(tap(inf => { this.messageService.addMessage('get heroes from server') }));
    this.messageService.addMessage(`hero servise get heroes from api`);

    return heroes;
  }

  getHeroById(id: number): Observable<Hero | undefined> {
    return this.httpClient.get<Hero>(`${this.dbUrl}/${id}`).pipe(
      catchError((err, params) => {
      this.messageService.addMessage(`error: in HeroService.getHeroById method ${err}`);
      return of(undefined);})).pipe( 
      tap(inf => { 
        this.messageService.addMessage(`invoking HeroService.getHeroesById method with hero id ${id}`); 
      }));
  }

  updateHero(hero: Hero): Observable<any>
  {
    return this.httpClient.put(this.dbUrl, hero, { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }).pipe(
      catchError((err, params) => {
      this.messageService.addMessage(`error: in HeroService.updateHero method ${err}`);
      return of(undefined);})).pipe( 
      tap(inf => { 
        this.messageService.addMessage(`invoking HeroService.updateHero method with hero id ${hero.id}`); 
      }));
  }

  constructor(private messageService: MessageService, private httpClient: HttpClient) {
    this.dbUrl = 'api/heroes';
  }
}
