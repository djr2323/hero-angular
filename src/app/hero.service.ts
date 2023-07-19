import { Injectable } from '@angular/core';
import { hero,HEROES } from './hero';


@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHeroes(): hero[]{
    return HEROES;
  }
}
