import { Component,Input } from '@angular/core';
import { hero } from '../hero';


@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css']
})
export class HeroDetailsComponent {
  @Input() hero?: hero;
}
