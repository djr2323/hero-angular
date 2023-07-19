import { Component } from '@angular/core';
import { HEROES, hero } from '../hero';
import { HeroService } from '../hero.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
  heroes:hero[]=[];
  selectedHero?: hero;
  onSelect(hero:hero):void{
    this.selectedHero = hero;
  }
  constructor(
    private heroService: HeroService
  ){}

  getHeroes(): void{
    this.heroes = this.heroService.getHeroes();
  }
  ngOnInit(): void {
    this.getHeroes();
  }
}
