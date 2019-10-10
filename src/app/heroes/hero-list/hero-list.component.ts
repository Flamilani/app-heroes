import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { HeroService }  from '../hero.service';
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss']
})
export class HeroListComponent implements OnInit {
heroes$: Observable<Hero[]>;

  constructor(
    private service: HeroService,
    private route: ActivatedRoute    
    ) { }

  ngOnInit() {
    this.heroes$ = this.route.paramMap.pipe(
      switchMap(params => {
        return this.service.getHeroes();
      })
    );
  }

}
