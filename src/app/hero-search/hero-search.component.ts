import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

import { Hero } from '../models/hero';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: [ './hero-search.component.css' ]
})
export class HeroSearchComponent implements OnInit {
  heroes$: Observable<Hero[]>;
  // TODO: don't understand an rxjs subject
  private searchTerms = new Subject<string>();

  constructor(private heroService: HeroService) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    // Pushes a new value onto the searchTerms observable
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.heroes$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes

      // calls the search service for each search term that makes it through debounce() and distinctUntilChanged(). 
      // It cancels and discards previous search observables, returning only the latest search service observable.

      // will preserve the original order of observables while ensure that the latest observable is returned and the previous is discarded
      switchMap((term: string) => this.heroService.searchHeroes(term)),
    );
  }
}