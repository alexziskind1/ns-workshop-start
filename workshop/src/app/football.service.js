"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var models_1 = require("./models");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var SEASON_2018_ID = 1819;
exports.DEFAULT_SEASON_ID = SEASON_2018_ID;
var FootballService = /** @class */ (function () {
    function FootballService(http) {
        this.http = http;
        this.baseUrl = 'https://www.thesportsdb.com/api/v1/json/1';
        this.header = this.prepareHeader();
    }
    /**
     * Prepares a header with the API KEY
     */
    FootballService.prototype.prepareHeader = function () {
        var headers = new http_1.HttpHeaders();
        // headers.append('X-Auth-Token', this.apiKey);
        return headers;
    };
    /**
     * List all teams for a certain league.
     * URL Structure: https://www.thesportsdb.com/api/v1/json/1/lookup_all_teams.php?id=4328
     */
    FootballService.prototype.getTeams = function (leagueId) {
        var url = this.baseUrl + "/lookup_all_teams.php?id=" + leagueId;
        return this.http.get(url)
            .pipe(operators_1.map(function (result) { return models_1.FootballFactory.teamsFromRaw(result); }));
    };
    /**
     * Show one team.
     * URL Structure: https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=133604
     */
    FootballService.prototype.getTeam = function (teamId) {
        // 1. construct a url based on https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=133604
        // 2. call http get with the url
        // 3. use FootballFactory.teamFromRaw to convert the output
        // return this.notImplemented('getTeam');
        var url = this.baseUrl + "/lookupteam.php?id=" + teamId;
        return this.http.get(url)
            .pipe(operators_1.map(function (result) { return models_1.FootballFactory.teamFromRaw(result); }));
    };
    /**
     * Show all players for a certain team.
     * URL Structure: https://www.thesportsdb.com/api/v1/json/1/lookup_all_players.php?id=133602
     */
    FootballService.prototype.getPlayers = function (teamId) {
        // 1. construct a url based on https://www.thesportsdb.com/api/v1/json/1/lookup_all_players.php?id=133602
        // 2. call http get with the url
        // 3. use FootballFactory.playersFromRaw to convert the output
        //return this.notImplemented('getPlayers');
        var url = this.baseUrl + "/lookup_all_players.php?id=" + teamId;
        return this.http.get(url)
            .pipe(operators_1.map(function (result) { return models_1.FootballFactory.playersFromRaw(result); }));
    };
    /**
     * Show all matches for a certain team.
     * URL Structure: https://www.thesportsdb.com/api/v1/json/1/eventslast.php?id=133602
     */
    FootballService.prototype.getTeamMatches = function (teamId) {
        // 1. construct a url based on https://www.thesportsdb.com/api/v1/json/1/eventslast.php?id=133602
        // 2. call http get with the url
        // 3. use FootballFactory.matchesFromRaw to convert the output
        //return this.notImplemented('getTeamMatches');
        var url = this.baseUrl + "/eventslast.php?id=" + teamId;
        return this.http.get(url)
            .pipe(operators_1.map(function (result) { return models_1.FootballFactory.matchesFromRaw(result.results); }));
    };
    /**
     * Show League Table / current standing.
     * URL Structure: https://www.thesportsdb.com/api/v1/json/1/lookuptable.php?l=4328&s=1819
     * @param matchday
     */
    FootballService.prototype.getLeagueTable = function (leagueId, seasonId) {
        if (seasonId === void 0) { seasonId = exports.DEFAULT_SEASON_ID; }
        var url = this.baseUrl + "/lookuptable.php?l=" + leagueId + "&s=" + seasonId;
        return this.http.get(url)
            .pipe(operators_1.map(function (result) { return models_1.FootballFactory.leagueTableFromRaw(result); }));
    };
    /**
     * List all matches for a certain league.
     * URL Structure: https://www.thesportsdb.com/api/v1/json/1/eventsseason.php?id=4328&s=1415
     */
    FootballService.prototype.getMatches = function (leagueId, seasonId) {
        // 1. construct a url based on https://www.thesportsdb.com/api/v1/json/1/eventsseason.php?id=4328&s=1415
        // see getLeagueTable as the example
        // 2. call http get with the url and header
        // 2. use FootballFactory.matchesFromRaw to convert the output
        if (seasonId === void 0) { seasonId = exports.DEFAULT_SEASON_ID; }
        // return this.notImplemented('getMatches');
        var url = this.baseUrl + "/eventsseason.php?id=" + leagueId + "&s=" + seasonId;
        return this.http.get(url)
            .pipe(operators_1.map(function (result) { return models_1.FootballFactory.matchesFromRaw(result.events); }));
    };
    FootballService.prototype.notImplemented = function (fname) {
        return rxjs_1.throwError(fname + " Not Implemented");
    };
    FootballService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], FootballService);
    return FootballService;
}());
exports.FootballService = FootballService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9vdGJhbGwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZvb3RiYWxsLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0MsNkNBQStEO0FBQy9ELG1DQUF1RjtBQUN2Riw2QkFBOEM7QUFDOUMsNENBQXFDO0FBRXJDLElBQU0sY0FBYyxHQUFHLElBQUksQ0FBQztBQUNmLFFBQUEsaUJBQWlCLEdBQUcsY0FBYyxDQUFDO0FBS2hEO0lBSUUseUJBQW9CLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7UUFINUIsWUFBTyxHQUFHLDJDQUEyQyxDQUFDO1FBSTVELElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3JDLENBQUM7SUFFRDs7T0FFRztJQUNLLHVDQUFhLEdBQXJCO1FBQ0UsSUFBTSxPQUFPLEdBQUcsSUFBSSxrQkFBVyxFQUFFLENBQUM7UUFDbEMsK0NBQStDO1FBRS9DLE9BQU8sT0FBTyxDQUFDO0lBQ2pCLENBQUM7SUFFRDs7O09BR0c7SUFDSSxrQ0FBUSxHQUFmLFVBQWdCLFFBQWdCO1FBQzlCLElBQU0sR0FBRyxHQUFNLElBQUksQ0FBQyxPQUFPLGlDQUE0QixRQUFVLENBQUM7UUFFbEUsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUM7YUFDdEIsSUFBSSxDQUNILGVBQUcsQ0FBQyxVQUFBLE1BQU0sSUFBSSxPQUFBLHdCQUFlLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxFQUFwQyxDQUFvQyxDQUFDLENBQ3BELENBQUM7SUFDTixDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksaUNBQU8sR0FBZCxVQUFlLE1BQWM7UUFDM0IsaUdBQWlHO1FBQ2pHLGdDQUFnQztRQUNoQywyREFBMkQ7UUFFM0QseUNBQXlDO1FBQ3pDLElBQU0sR0FBRyxHQUFNLElBQUksQ0FBQyxPQUFPLDJCQUFzQixNQUFRLENBQUM7UUFFMUQsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUM7YUFDdEIsSUFBSSxDQUNILGVBQUcsQ0FBQyxVQUFBLE1BQU0sSUFBSSxPQUFBLHdCQUFlLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxFQUFuQyxDQUFtQyxDQUFDLENBQ25ELENBQUM7SUFDTixDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksb0NBQVUsR0FBakIsVUFBa0IsTUFBYztRQUM5Qix5R0FBeUc7UUFDekcsZ0NBQWdDO1FBQ2hDLDhEQUE4RDtRQUU5RCwyQ0FBMkM7UUFFM0MsSUFBTSxHQUFHLEdBQU0sSUFBSSxDQUFDLE9BQU8sbUNBQThCLE1BQVEsQ0FBQztRQUVsRSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQzthQUN0QixJQUFJLENBQ0gsZUFBRyxDQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsd0JBQWUsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLEVBQXRDLENBQXNDLENBQUMsQ0FDdEQsQ0FBQztJQUVOLENBQUM7SUFFRDs7O09BR0c7SUFDSSx3Q0FBYyxHQUFyQixVQUFzQixNQUFjO1FBQ2xDLGlHQUFpRztRQUNqRyxnQ0FBZ0M7UUFDaEMsOERBQThEO1FBRTlELCtDQUErQztRQUUvQyxJQUFNLEdBQUcsR0FBTSxJQUFJLENBQUMsT0FBTywyQkFBc0IsTUFBUSxDQUFDO1FBRTFELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDO2FBQ3RCLElBQUksQ0FDSCxlQUFHLENBQUMsVUFBQyxNQUFXLElBQUssT0FBQSx3QkFBZSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQTlDLENBQThDLENBQUMsQ0FDckUsQ0FBQztJQUVOLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksd0NBQWMsR0FBckIsVUFBc0IsUUFBZ0IsRUFBRSxRQUFvQztRQUFwQyx5QkFBQSxFQUFBLFdBQW1CLHlCQUFpQjtRQUUxRSxJQUFNLEdBQUcsR0FBTSxJQUFJLENBQUMsT0FBTywyQkFBc0IsUUFBUSxXQUFNLFFBQVUsQ0FBQztRQUUxRSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQzthQUN0QixJQUFJLENBQ0gsZUFBRyxDQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsd0JBQWUsQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsRUFBMUMsQ0FBMEMsQ0FBQyxDQUMxRCxDQUFDO0lBQ04sQ0FBQztJQUVEOzs7T0FHRztJQUNJLG9DQUFVLEdBQWpCLFVBQWtCLFFBQWdCLEVBQUUsUUFBb0M7UUFDdEUsd0dBQXdHO1FBQ3hHLG9DQUFvQztRQUNwQywyQ0FBMkM7UUFDM0MsOERBQThEO1FBSjVCLHlCQUFBLEVBQUEsV0FBbUIseUJBQWlCO1FBTXRFLDRDQUE0QztRQUM1QyxJQUFNLEdBQUcsR0FBTSxJQUFJLENBQUMsT0FBTyw2QkFBd0IsUUFBUSxXQUFNLFFBQVUsQ0FBQztRQUU1RSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQzthQUN0QixJQUFJLENBQ0gsZUFBRyxDQUFDLFVBQUMsTUFBVyxJQUFLLE9BQUEsd0JBQWUsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUE3QyxDQUE2QyxDQUFDLENBQ3BFLENBQUM7SUFDTixDQUFDO0lBRU8sd0NBQWMsR0FBdEIsVUFBdUIsS0FBYTtRQUNsQyxPQUFPLGlCQUFVLENBQUksS0FBSyxxQkFBa0IsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUE3SFUsZUFBZTtRQUgzQixpQkFBVSxDQUFDO1lBQ1YsVUFBVSxFQUFFLE1BQU07U0FDbkIsQ0FBQzt5Q0FLMEIsaUJBQVU7T0FKekIsZUFBZSxDQThIM0I7SUFBRCxzQkFBQztDQUFBLEFBOUhELElBOEhDO0FBOUhZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBGb290YmFsbEZhY3RvcnksIExlYWd1ZVRhYmxlLCBTdGFuZGluZywgVGVhbSwgUGxheWVyLCBNYXRjaCB9IGZyb20gJy4vbW9kZWxzJztcbmltcG9ydCB7IE9ic2VydmFibGUsIHRocm93RXJyb3IgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuY29uc3QgU0VBU09OXzIwMThfSUQgPSAxODE5O1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfU0VBU09OX0lEID0gU0VBU09OXzIwMThfSUQ7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEZvb3RiYWxsU2VydmljZSB7XG4gIHByaXZhdGUgYmFzZVVybCA9ICdodHRwczovL3d3dy50aGVzcG9ydHNkYi5jb20vYXBpL3YxL2pzb24vMSc7XG4gIHByaXZhdGUgaGVhZGVyOiBIdHRwSGVhZGVycztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHtcbiAgICB0aGlzLmhlYWRlciA9IHRoaXMucHJlcGFyZUhlYWRlcigpO1xuICB9XG5cbiAgLyoqIFxuICAgKiBQcmVwYXJlcyBhIGhlYWRlciB3aXRoIHRoZSBBUEkgS0VZXG4gICAqL1xuICBwcml2YXRlIHByZXBhcmVIZWFkZXIoKTogSHR0cEhlYWRlcnMge1xuICAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoKTtcbiAgICAvLyBoZWFkZXJzLmFwcGVuZCgnWC1BdXRoLVRva2VuJywgdGhpcy5hcGlLZXkpO1xuXG4gICAgcmV0dXJuIGhlYWRlcnM7XG4gIH1cblxuICAvKipcbiAgICogTGlzdCBhbGwgdGVhbXMgZm9yIGEgY2VydGFpbiBsZWFndWUuXG4gICAqIFVSTCBTdHJ1Y3R1cmU6IGh0dHBzOi8vd3d3LnRoZXNwb3J0c2RiLmNvbS9hcGkvdjEvanNvbi8xL2xvb2t1cF9hbGxfdGVhbXMucGhwP2lkPTQzMjhcbiAgICovXG4gIHB1YmxpYyBnZXRUZWFtcyhsZWFndWVJZDogbnVtYmVyKTogT2JzZXJ2YWJsZTxUZWFtW10+IHtcbiAgICBjb25zdCB1cmwgPSBgJHt0aGlzLmJhc2VVcmx9L2xvb2t1cF9hbGxfdGVhbXMucGhwP2lkPSR7bGVhZ3VlSWR9YDtcblxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHVybClcbiAgICAgIC5waXBlKFxuICAgICAgICBtYXAocmVzdWx0ID0+IEZvb3RiYWxsRmFjdG9yeS50ZWFtc0Zyb21SYXcocmVzdWx0KSlcbiAgICAgICk7XG4gIH1cblxuICAvKipcbiAgICogU2hvdyBvbmUgdGVhbS5cbiAgICogVVJMIFN0cnVjdHVyZTogaHR0cHM6Ly93d3cudGhlc3BvcnRzZGIuY29tL2FwaS92MS9qc29uLzEvbG9va3VwdGVhbS5waHA/aWQ9MTMzNjA0XG4gICAqL1xuICBwdWJsaWMgZ2V0VGVhbSh0ZWFtSWQ6IG51bWJlcik6IE9ic2VydmFibGU8VGVhbT4ge1xuICAgIC8vIDEuIGNvbnN0cnVjdCBhIHVybCBiYXNlZCBvbiBodHRwczovL3d3dy50aGVzcG9ydHNkYi5jb20vYXBpL3YxL2pzb24vMS9sb29rdXB0ZWFtLnBocD9pZD0xMzM2MDRcbiAgICAvLyAyLiBjYWxsIGh0dHAgZ2V0IHdpdGggdGhlIHVybFxuICAgIC8vIDMuIHVzZSBGb290YmFsbEZhY3RvcnkudGVhbUZyb21SYXcgdG8gY29udmVydCB0aGUgb3V0cHV0XG5cbiAgICAvLyByZXR1cm4gdGhpcy5ub3RJbXBsZW1lbnRlZCgnZ2V0VGVhbScpO1xuICAgIGNvbnN0IHVybCA9IGAke3RoaXMuYmFzZVVybH0vbG9va3VwdGVhbS5waHA/aWQ9JHt0ZWFtSWR9YDtcblxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHVybClcbiAgICAgIC5waXBlKFxuICAgICAgICBtYXAocmVzdWx0ID0+IEZvb3RiYWxsRmFjdG9yeS50ZWFtRnJvbVJhdyhyZXN1bHQpKVxuICAgICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTaG93IGFsbCBwbGF5ZXJzIGZvciBhIGNlcnRhaW4gdGVhbS5cbiAgICogVVJMIFN0cnVjdHVyZTogaHR0cHM6Ly93d3cudGhlc3BvcnRzZGIuY29tL2FwaS92MS9qc29uLzEvbG9va3VwX2FsbF9wbGF5ZXJzLnBocD9pZD0xMzM2MDJcbiAgICovXG4gIHB1YmxpYyBnZXRQbGF5ZXJzKHRlYW1JZDogbnVtYmVyKTogT2JzZXJ2YWJsZTxQbGF5ZXJbXT4ge1xuICAgIC8vIDEuIGNvbnN0cnVjdCBhIHVybCBiYXNlZCBvbiBodHRwczovL3d3dy50aGVzcG9ydHNkYi5jb20vYXBpL3YxL2pzb24vMS9sb29rdXBfYWxsX3BsYXllcnMucGhwP2lkPTEzMzYwMlxuICAgIC8vIDIuIGNhbGwgaHR0cCBnZXQgd2l0aCB0aGUgdXJsXG4gICAgLy8gMy4gdXNlIEZvb3RiYWxsRmFjdG9yeS5wbGF5ZXJzRnJvbVJhdyB0byBjb252ZXJ0IHRoZSBvdXRwdXRcblxuICAgIC8vcmV0dXJuIHRoaXMubm90SW1wbGVtZW50ZWQoJ2dldFBsYXllcnMnKTtcblxuICAgIGNvbnN0IHVybCA9IGAke3RoaXMuYmFzZVVybH0vbG9va3VwX2FsbF9wbGF5ZXJzLnBocD9pZD0ke3RlYW1JZH1gO1xuXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodXJsKVxuICAgICAgLnBpcGUoXG4gICAgICAgIG1hcChyZXN1bHQgPT4gRm9vdGJhbGxGYWN0b3J5LnBsYXllcnNGcm9tUmF3KHJlc3VsdCkpXG4gICAgICApO1xuXG4gIH1cblxuICAvKipcbiAgICogU2hvdyBhbGwgbWF0Y2hlcyBmb3IgYSBjZXJ0YWluIHRlYW0uXG4gICAqIFVSTCBTdHJ1Y3R1cmU6IGh0dHBzOi8vd3d3LnRoZXNwb3J0c2RiLmNvbS9hcGkvdjEvanNvbi8xL2V2ZW50c2xhc3QucGhwP2lkPTEzMzYwMlxuICAgKi9cbiAgcHVibGljIGdldFRlYW1NYXRjaGVzKHRlYW1JZDogbnVtYmVyKTogT2JzZXJ2YWJsZTxNYXRjaFtdPiB7XG4gICAgLy8gMS4gY29uc3RydWN0IGEgdXJsIGJhc2VkIG9uIGh0dHBzOi8vd3d3LnRoZXNwb3J0c2RiLmNvbS9hcGkvdjEvanNvbi8xL2V2ZW50c2xhc3QucGhwP2lkPTEzMzYwMlxuICAgIC8vIDIuIGNhbGwgaHR0cCBnZXQgd2l0aCB0aGUgdXJsXG4gICAgLy8gMy4gdXNlIEZvb3RiYWxsRmFjdG9yeS5tYXRjaGVzRnJvbVJhdyB0byBjb252ZXJ0IHRoZSBvdXRwdXRcblxuICAgIC8vcmV0dXJuIHRoaXMubm90SW1wbGVtZW50ZWQoJ2dldFRlYW1NYXRjaGVzJyk7XG5cbiAgICBjb25zdCB1cmwgPSBgJHt0aGlzLmJhc2VVcmx9L2V2ZW50c2xhc3QucGhwP2lkPSR7dGVhbUlkfWA7XG5cbiAgICByZXR1cm4gdGhpcy5odHRwLmdldCh1cmwpXG4gICAgICAucGlwZShcbiAgICAgICAgbWFwKChyZXN1bHQ6IGFueSkgPT4gRm9vdGJhbGxGYWN0b3J5Lm1hdGNoZXNGcm9tUmF3KHJlc3VsdC5yZXN1bHRzKSlcbiAgICAgICk7XG5cbiAgfVxuXG4gIC8qKlxuICAgKiBTaG93IExlYWd1ZSBUYWJsZSAvIGN1cnJlbnQgc3RhbmRpbmcuXHRcbiAgICogVVJMIFN0cnVjdHVyZTogaHR0cHM6Ly93d3cudGhlc3BvcnRzZGIuY29tL2FwaS92MS9qc29uLzEvbG9va3VwdGFibGUucGhwP2w9NDMyOCZzPTE4MTlcbiAgICogQHBhcmFtIG1hdGNoZGF5IFxuICAgKi9cbiAgcHVibGljIGdldExlYWd1ZVRhYmxlKGxlYWd1ZUlkOiBudW1iZXIsIHNlYXNvbklkOiBudW1iZXIgPSBERUZBVUxUX1NFQVNPTl9JRCk6IE9ic2VydmFibGU8TGVhZ3VlVGFibGU+IHtcblxuICAgIGNvbnN0IHVybCA9IGAke3RoaXMuYmFzZVVybH0vbG9va3VwdGFibGUucGhwP2w9JHtsZWFndWVJZH0mcz0ke3NlYXNvbklkfWA7XG5cbiAgICByZXR1cm4gdGhpcy5odHRwLmdldCh1cmwpXG4gICAgICAucGlwZShcbiAgICAgICAgbWFwKHJlc3VsdCA9PiBGb290YmFsbEZhY3RvcnkubGVhZ3VlVGFibGVGcm9tUmF3KHJlc3VsdCkpXG4gICAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIExpc3QgYWxsIG1hdGNoZXMgZm9yIGEgY2VydGFpbiBsZWFndWUuXHRcbiAgICogVVJMIFN0cnVjdHVyZTogaHR0cHM6Ly93d3cudGhlc3BvcnRzZGIuY29tL2FwaS92MS9qc29uLzEvZXZlbnRzc2Vhc29uLnBocD9pZD00MzI4JnM9MTQxNVxuICAgKi9cbiAgcHVibGljIGdldE1hdGNoZXMobGVhZ3VlSWQ6IG51bWJlciwgc2Vhc29uSWQ6IG51bWJlciA9IERFRkFVTFRfU0VBU09OX0lEKTogT2JzZXJ2YWJsZTxNYXRjaFtdPiB7XG4gICAgLy8gMS4gY29uc3RydWN0IGEgdXJsIGJhc2VkIG9uIGh0dHBzOi8vd3d3LnRoZXNwb3J0c2RiLmNvbS9hcGkvdjEvanNvbi8xL2V2ZW50c3NlYXNvbi5waHA/aWQ9NDMyOCZzPTE0MTVcbiAgICAvLyBzZWUgZ2V0TGVhZ3VlVGFibGUgYXMgdGhlIGV4YW1wbGVcbiAgICAvLyAyLiBjYWxsIGh0dHAgZ2V0IHdpdGggdGhlIHVybCBhbmQgaGVhZGVyXG4gICAgLy8gMi4gdXNlIEZvb3RiYWxsRmFjdG9yeS5tYXRjaGVzRnJvbVJhdyB0byBjb252ZXJ0IHRoZSBvdXRwdXRcblxuICAgIC8vIHJldHVybiB0aGlzLm5vdEltcGxlbWVudGVkKCdnZXRNYXRjaGVzJyk7XG4gICAgY29uc3QgdXJsID0gYCR7dGhpcy5iYXNlVXJsfS9ldmVudHNzZWFzb24ucGhwP2lkPSR7bGVhZ3VlSWR9JnM9JHtzZWFzb25JZH1gO1xuXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodXJsKVxuICAgICAgLnBpcGUoXG4gICAgICAgIG1hcCgocmVzdWx0OiBhbnkpID0+IEZvb3RiYWxsRmFjdG9yeS5tYXRjaGVzRnJvbVJhdyhyZXN1bHQuZXZlbnRzKSlcbiAgICAgICk7XG4gIH1cblxuICBwcml2YXRlIG5vdEltcGxlbWVudGVkKGZuYW1lOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aHJvd0Vycm9yKGAke2ZuYW1lfSBOb3QgSW1wbGVtZW50ZWRgKTtcbiAgfVxufVxuIl19