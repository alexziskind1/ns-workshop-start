import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// import { Observable } from 'rxjs/Observable';

import { LeagueTable, Team } from '../models';
import { FootballService } from '../football.service';

@Component({
  selector: 'my-league-table',
  moduleId: module.id,
  templateUrl: './league-table.component.html'
})
export class LeagueTableComponent implements OnInit {
  @Input() public leagueId: number;
  // Add Output EventEmitter here

  public table: LeagueTable;
  public teams: Team[];

  constructor(private footballService: FootballService) {
  }

  ngOnInit() {
    this.loadTeamsAndTable();
  }

  /**
   * Get both teams and table info. Teams contains short name for each team
   */
  private loadTeamsAndTable() {
    this.footballService.getTeams(this.leagueId)
      .subscribe(teams => {
        console.log('got teams');
        console.log(teams);
        this.teams = teams;
        this.footballService.getLeagueTable(this.leagueId)
          .subscribe(table => this.table = table);
      });
  }

  public getTeamName(teamId: number): string {
    const team = this.getTeam(teamId);

    return (team.strTeamShort) ? team.strTeamShort : team.strTeam;
  }

  private getTeam(teamId: number): Team {
    return this.teams.filter(team => team.idTeam === teamId)[0];
  }

  onTeamSelected(event) {
    const selectedTeamId = this.table.standings[event.index].teamid;
    console.log('::LeagueTableComponent::onTeamSelect::' + selectedTeamId);
    // Add eventemitter emit call here with the selectedTeamId
  }
}
