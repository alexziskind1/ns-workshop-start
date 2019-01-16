export interface LeagueTable {
  standings: Standing[];
}

export interface Standing {
  /** needs to be extracted from _links.team.href */
  name: string;
  teamid: number;
  played: number;
  goalsfor: number;
  goalsagainst: number;
  goalsdifference: number;
  win: number;
  draw: number;
  loss: number;
  total: number;
}

export interface HomeAway {
  goals: number;
  goalsAgainst: number;
  wins: number;
  draws: number;
  losses: number;
}

export interface GroupStanding {
  group: string;
  rank: number;
  team: string;
  teamId: number;
  playedGames: number;
  crestURI: string;
  points: number;
  goals: number;
  goalsAgainst: number;
  goalDifference: number;
}

export interface Standings {
  A: GroupStanding[];
  B: GroupStanding[];
  C: GroupStanding[];
  D: GroupStanding[];
  E: GroupStanding[];
  F: GroupStanding[];
  G: GroupStanding[];
  H: GroupStanding[];
}
