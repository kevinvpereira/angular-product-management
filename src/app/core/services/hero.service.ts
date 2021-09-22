import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Hero, HeroResponse } from '../models/hero.model';
import { map } from 'rxjs/operators';
import { forkJoin, Observable } from 'rxjs';

const apiUrl = `${environment.superHeroApiUrl}/${environment.superHeroApiKey}`;

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  private selectedHeroes: number[] = [70, 644, 720, 263, 432, 38, 194, 315];

  constructor(private httpClient: HttpClient) {}

  get(id: number): Observable<Hero> {
    return this.httpClient.get<HeroResponse>(`${apiUrl}/${id}`).pipe(
      map((hero) => {
        const newHero: Hero = {
          id: +hero.id,
          name: hero.name,
          fullName: hero.biography['full-name'],
          powerstats: hero.powerstats,
          image: hero.image.url,
        };

        return newHero;
      })
    );
  }

  list(): Observable<Hero[]> {
    const heroes: Observable<Hero>[] = this.selectedHeroes.map((x) =>
      this.get(x)
    );

    return forkJoin([...heroes]);
  }
}
