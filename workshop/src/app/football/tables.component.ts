import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LeagueTable } from '../models';

@Component({
  selector: 'my-tables',
  moduleId: module.id,
  templateUrl: './tables.component.html'
})
export class TablesComponent {

  public BundesligaId: number = 4331;
  public PremierLeagueId: number = 4328;
  public SerieAId: number = 4332;
  public Ligue1Id: number = 4334;
  public EredivisieId: number = 4337;


  constructor(private router: Router) {
  }

  private onTeamTap(teamId: number) {
    console.log('::TablesComponent::onTeamTap::' + teamId);
    this.router.navigate(['/football/team', teamId]);
  }
}
