export interface Match {
  idEvent: number;
  strSeason: string;
  idHomeTeam?: number;
  idAwayTeam?: number;
  dateEvent: string;
  strHomeTeam: string;
  strAwayTeam: string;
  intHomeScore: number;
  intAwayScore: number;
  intHomeShots?: number;
  intAwayShots?: number;
}
