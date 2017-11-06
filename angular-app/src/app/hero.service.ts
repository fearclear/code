import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Hero } from './hero';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class HeroService {
    private heroesUrl = 'api/heroes';
    private headers = new Headers({'Content-Type': 'application/json'});
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
    constructor(
        private http: Http
    ) {}
    getHeroes(): Promise<Hero[]> {
        return this.http.get(this.heroesUrl)
            .toPromise()
            .then(response => response.json() as Hero)
            .catch(this.handleError)
    }
    getHeroesSlowly(): Promise<Hero[]> {
        return new Promise(resolve => {
            setTimeout(() => resolve(this.getHeroes()), 2000)
        })
    }
    getHero(id: number): Promise<Hero> {
        const url = `${this.heroesUrl}/${id}`;
        return this.http.get(url)
          .toPromise()
          .then(response => response.json() as Hero)
          .catch(this.handleError);
    }
    update(hero: Hero): Promise<Hero> {
        const url = `${this.heroesUrl}/${hero.id}`;
        return this.http
            .put(this.heroesUrl, JSON.stringify(hero))
            .toPromise()
            .then(() => hero)
            .catch(this.handleError)
    }
}
