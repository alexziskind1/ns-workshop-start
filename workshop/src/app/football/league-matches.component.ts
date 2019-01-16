import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import { Match, Team } from '../models';
import { FootballService } from '../football.service';

@Component({
  selector: 'my-matches',
  moduleId: module.id,
  templateUrl: './league-matches.component.html',
  styleUrls: ['./match.component.css']
})
export class LeagueMatchesComponent implements OnInit {
  public matches: Match[] = [];
  public leagueId: number;
  public leagueName: string = '';

  constructor(
    private footballService: FootballService,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.leagueId = +this.route.snapshot.params['leagueId'];
    this.leagueName = this.route.snapshot.params['leagueName'];

    this.footballService.getMatches(this.leagueId)
      .subscribe(matches => this.matches = matches);
  }
}
