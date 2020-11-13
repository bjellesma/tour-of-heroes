import { ActivatedRoute } from '@angular/router'; // used to get the current route
import { Location } from '@angular/common'; // angular service used for interacting with the browser
import { Component, OnInit, Input } from '@angular/core';
import {Hero} from '../models/hero'
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  @Input() hero: Hero;

  constructor(private heroService:HeroService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit(): void {
    this.getHero();
  }

  // get the hero whose id matches
  getHero(): void {
    //+ converts the returned string to a number
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  // go back to the previous route
  goBack(): void {
    this.location.back();
  }

  // save the hero information back to the database
  save(): void {
    this.heroService.updateHero(this.hero)
      .subscribe(() => this.goBack());
  }

}
