import { Component } from '@angular/core';
import { Observable, throwError } from 'rxjs';

import { Match } from '../models';
import { FootballService } from '../football.service';

const PREMIERE_LEAGUE_ID = 4328;
const SEASON_2018_ID = 1819;
const LIVERPOOL_TEAM_ID = 133602;

@Component({
  selector: 'ns-test',
  moduleId: module.id,
  templateUrl: './service-test.component.html',
})
export class ServiceTestComponent {

  constructor(private footballService: FootballService) { }

  getPLTable() {
    this.footballService.getLeagueTable(PREMIERE_LEAGUE_ID, SEASON_2018_ID)
      .subscribe(
        leagueTable => this.printData(leagueTable),
        error => this.printError(error)
      );
  }

  getPLTeams() {
    this.footballService.getTeams(PREMIERE_LEAGUE_ID)
      .subscribe(
        teams => this.printData(teams),
        error => this.printError(error)
      );
  }

  getPLMatches() {
    this.footballService.getMatches(PREMIERE_LEAGUE_ID, SEASON_2018_ID)
      .subscribe(matches => {
        const matchesEssential = matches.map((match: Match) => {
          return {
            homeTeam: match.strHomeTeam,
            awayTeam: match.strAwayTeam,
            date: match.dateEvent,
            score: match.intHomeScore + ':' + match.intAwayScore
          }
        })

        this.printData(matchesEssential);
      },
        error => this.printError(error)
      );
  }

  getLiverpool() {
    this.footballService.getTeam(LIVERPOOL_TEAM_ID)
      .subscribe(
        team => this.printData(team),
        error => this.printError(error)
      );
  }

  getLiverpoolPlayers() {
    this.footballService.getPlayers(LIVERPOOL_TEAM_ID)
      .subscribe(
        players => this.printData(players),
        error => this.printError(error)
      );
  }


  getLiverpoolMatches() {
    this.footballService.getTeamMatches(LIVERPOOL_TEAM_ID)
      .subscribe(
        matches => this.printData(matches),
        error => this.printError(error)
      );
  }


  printData(item) {
    console.log(JSON.stringify(item, null, 2));
  }

  printError(error): Observable<never> {
    console.log(JSON.stringify(error, null, 2));
    return throwError(error);
  }
}
