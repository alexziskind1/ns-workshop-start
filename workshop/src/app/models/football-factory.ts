import { LeagueTable, Team, Match, Player, Standing } from './';

export class FootballFactory {

  static leagueTableFromRaw(rawLeagueTable: any): LeagueTable {
    const table: LeagueTable = {
      standings: []
    };
    if (rawLeagueTable.table) {
      table.standings = rawLeagueTable.table;
    }
    return table;
  }

  static teamFromRaw(rawTeam: any): Team {
    return rawTeam;
  }

  static teamsFromRaw(result: any): Team[] {
    return result.teams.map(rawTeam => this.teamFromRaw(rawTeam));
  }

  static matchFromRaw(rawMatch: any): Match {
    return rawMatch;
  }

  static matchesFromRaw(rawMatches: any[]): Match[] {
    return rawMatches.map(rawMatch => this.matchFromRaw(rawMatch));
  }

  static playerFromRaw(rawPlayer: any): Player {
    return rawPlayer;
  }

  static playersFromRaw(result: any): Player[] {
    return result.player.map(rawPlayer => this.playerFromRaw(rawPlayer));
  }

  static standingFromRaw(rawStanding: any): Standing {

    return rawStanding;
  }

}
