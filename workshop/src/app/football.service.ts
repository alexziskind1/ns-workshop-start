import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FootballFactory, LeagueTable, Standing, Team, Player, Match } from './models';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';

const SEASON_2018_ID = 1819;
export const DEFAULT_SEASON_ID = SEASON_2018_ID;

@Injectable({
  providedIn: 'root'
})
export class FootballService {
  private baseUrl = 'https://www.thesportsdb.com/api/v1/json/1';
  private header: HttpHeaders;

  constructor(private http: HttpClient) {
    this.header = this.prepareHeader();
  }

  /** 
   * Prepares a header with the API KEY
   */
  private prepareHeader(): HttpHeaders {
    const headers = new HttpHeaders();
    // headers.append('X-Auth-Token', this.apiKey);

    return headers;
  }

  /**
   * List all teams for a certain league.
   * URL Structure: https://www.thesportsdb.com/api/v1/json/1/lookup_all_teams.php?id=4328
   */
  public getTeams(leagueId: number): Observable<Team[]> {
    const url = `${this.baseUrl}/lookup_all_teams.php?id=${leagueId}`;

    return this.http.get(url)
      .pipe(
        map(result => FootballFactory.teamsFromRaw(result))
      );
  }

  /**
   * Show one team.
   * URL Structure: https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=133604
   */
  public getTeam(teamId: number): Observable<Team> {
    // 1. construct a url based on https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=133604
    // 2. call http get with the url
    // 3. use FootballFactory.teamFromRaw to convert the output

    return this.notImplemented('getTeam');
  }

  /**
   * Show all players for a certain team.
   * URL Structure: https://www.thesportsdb.com/api/v1/json/1/lookup_all_players.php?id=133602
   */
  public getPlayers(teamId: number): Observable<Player[]> {
    // 1. construct a url based on https://www.thesportsdb.com/api/v1/json/1/lookup_all_players.php?id=133602
    // 2. call http get with the url
    // 3. use FootballFactory.playersFromRaw to convert the output

    return this.notImplemented('getPlayers');
  }

  /**
   * Show all matches for a certain team.
   * URL Structure: https://www.thesportsdb.com/api/v1/json/1/eventslast.php?id=133602
   */
  public getTeamMatches(teamId: number): Observable<Match[]> {
    // 1. construct a url based on https://www.thesportsdb.com/api/v1/json/1/eventslast.php?id=133602
    // 2. call http get with the url
    // 3. use FootballFactory.matchesFromRaw to convert the output

    return this.notImplemented('getTeamMatches');
  }

  /**
   * Show League Table / current standing.	
   * URL Structure: https://www.thesportsdb.com/api/v1/json/1/lookuptable.php?l=4328&s=1819
   * @param matchday 
   */
  public getLeagueTable(leagueId: number, seasonId: number = DEFAULT_SEASON_ID): Observable<LeagueTable> {

    const url = `${this.baseUrl}/lookuptable.php?l=${leagueId}&s=${seasonId}`;

    return this.http.get(url)
      .pipe(
        map(result => FootballFactory.leagueTableFromRaw(result))
      );
  }

  /**
   * List all matches for a certain league.	
   * URL Structure: https://www.thesportsdb.com/api/v1/json/1/eventsseason.php?id=4328&s=1415
   */
  public getMatches(leagueId: number, seasonId: number = DEFAULT_SEASON_ID): Observable<Match[]> {
    // 1. construct a url based on https://www.thesportsdb.com/api/v1/json/1/eventsseason.php?id=4328&s=1415
    // see getLeagueTable as the example
    // 2. call http get with the url and header
    // 2. use FootballFactory.matchesFromRaw to convert the output

    return this.notImplemented('getMatches');
  }

  private notImplemented(fname: string): Observable<any> {
    return throwError(`${fname} Not Implemented`);
  }
}
