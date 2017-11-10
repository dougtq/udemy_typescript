import { Component, OnInit } from '@angular/core'
import { HEROES } from '../mock-heroes'
import { Hero } from '../hero'

@Component({
  selector: 'heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  herois = HEROES
  edit = false

  selectedHero : Hero

  onSelect(selHero : Hero) : void {
    this.selectedHero = selHero;
  }
}
