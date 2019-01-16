"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var football_service_1 = require("../football.service");
var PREMIERE_LEAGUE_ID = 4328;
var SEASON_2018_ID = 1819;
var LIVERPOOL_TEAM_ID = 133602;
var ServiceTestComponent = /** @class */ (function () {
    function ServiceTestComponent(footballService) {
        this.footballService = footballService;
    }
    ServiceTestComponent.prototype.getPLTable = function () {
        var _this = this;
        this.footballService.getLeagueTable(PREMIERE_LEAGUE_ID, SEASON_2018_ID)
            .subscribe(function (leagueTable) { return _this.printData(leagueTable); }, function (error) { return _this.printError(error); });
    };
    ServiceTestComponent.prototype.getPLTeams = function () {
        var _this = this;
        this.footballService.getTeams(PREMIERE_LEAGUE_ID)
            .subscribe(function (teams) { return _this.printData(teams); }, function (error) { return _this.printError(error); });
    };
    ServiceTestComponent.prototype.getPLMatches = function () {
        var _this = this;
        this.footballService.getMatches(PREMIERE_LEAGUE_ID, SEASON_2018_ID)
            .subscribe(function (matches) {
            var matchesEssential = matches.map(function (match) {
                return {
                    homeTeam: match.strHomeTeam,
                    awayTeam: match.strAwayTeam,
                    date: match.dateEvent,
                    score: match.intHomeScore + ':' + match.intAwayScore
                };
            });
            _this.printData(matchesEssential);
        }, function (error) { return _this.printError(error); });
    };
    ServiceTestComponent.prototype.getLiverpool = function () {
        var _this = this;
        this.footballService.getTeam(LIVERPOOL_TEAM_ID)
            .subscribe(function (team) { return _this.printData(team); }, function (error) { return _this.printError(error); });
    };
    ServiceTestComponent.prototype.getLiverpoolPlayers = function () {
        var _this = this;
        this.footballService.getPlayers(LIVERPOOL_TEAM_ID)
            .subscribe(function (players) { return _this.printData(players); }, function (error) { return _this.printError(error); });
    };
    ServiceTestComponent.prototype.getLiverpoolMatches = function () {
        var _this = this;
        this.footballService.getTeamMatches(LIVERPOOL_TEAM_ID)
            .subscribe(function (matches) { return _this.printData(matches); }, function (error) { return _this.printError(error); });
    };
    ServiceTestComponent.prototype.printData = function (item) {
        console.log(JSON.stringify(item, null, 2));
    };
    ServiceTestComponent.prototype.printError = function (error) {
        console.log(JSON.stringify(error, null, 2));
        return rxjs_1.throwError(error);
    };
    ServiceTestComponent = __decorate([
        core_1.Component({
            selector: 'ns-test',
            moduleId: module.id,
            templateUrl: './service-test.component.html',
        }),
        __metadata("design:paramtypes", [football_service_1.FootballService])
    ], ServiceTestComponent);
    return ServiceTestComponent;
}());
exports.ServiceTestComponent = ServiceTestComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZS10ZXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNlcnZpY2UtdGVzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFDMUMsNkJBQThDO0FBRzlDLHdEQUFzRDtBQUV0RCxJQUFNLGtCQUFrQixHQUFHLElBQUksQ0FBQztBQUNoQyxJQUFNLGNBQWMsR0FBRyxJQUFJLENBQUM7QUFDNUIsSUFBTSxpQkFBaUIsR0FBRyxNQUFNLENBQUM7QUFPakM7SUFFRSw4QkFBb0IsZUFBZ0M7UUFBaEMsb0JBQWUsR0FBZixlQUFlLENBQWlCO0lBQUksQ0FBQztJQUV6RCx5Q0FBVSxHQUFWO1FBQUEsaUJBTUM7UUFMQyxJQUFJLENBQUMsZUFBZSxDQUFDLGNBQWMsQ0FBQyxrQkFBa0IsRUFBRSxjQUFjLENBQUM7YUFDcEUsU0FBUyxDQUNSLFVBQUEsV0FBVyxJQUFJLE9BQUEsS0FBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsRUFBM0IsQ0FBMkIsRUFDMUMsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxFQUF0QixDQUFzQixDQUNoQyxDQUFDO0lBQ04sQ0FBQztJQUVELHlDQUFVLEdBQVY7UUFBQSxpQkFNQztRQUxDLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLGtCQUFrQixDQUFDO2FBQzlDLFNBQVMsQ0FDUixVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEVBQXJCLENBQXFCLEVBQzlCLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsRUFBdEIsQ0FBc0IsQ0FDaEMsQ0FBQztJQUNOLENBQUM7SUFFRCwyQ0FBWSxHQUFaO1FBQUEsaUJBZ0JDO1FBZkMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsa0JBQWtCLEVBQUUsY0FBYyxDQUFDO2FBQ2hFLFNBQVMsQ0FBQyxVQUFBLE9BQU87WUFDaEIsSUFBTSxnQkFBZ0IsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQUMsS0FBWTtnQkFDaEQsT0FBTztvQkFDTCxRQUFRLEVBQUUsS0FBSyxDQUFDLFdBQVc7b0JBQzNCLFFBQVEsRUFBRSxLQUFLLENBQUMsV0FBVztvQkFDM0IsSUFBSSxFQUFFLEtBQUssQ0FBQyxTQUFTO29CQUNyQixLQUFLLEVBQUUsS0FBSyxDQUFDLFlBQVksR0FBRyxHQUFHLEdBQUcsS0FBSyxDQUFDLFlBQVk7aUJBQ3JELENBQUE7WUFDSCxDQUFDLENBQUMsQ0FBQTtZQUVGLEtBQUksQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUNuQyxDQUFDLEVBQ0MsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxFQUF0QixDQUFzQixDQUNoQyxDQUFDO0lBQ04sQ0FBQztJQUVELDJDQUFZLEdBQVo7UUFBQSxpQkFNQztRQUxDLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDO2FBQzVDLFNBQVMsQ0FDUixVQUFBLElBQUksSUFBSSxPQUFBLEtBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQXBCLENBQW9CLEVBQzVCLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsRUFBdEIsQ0FBc0IsQ0FDaEMsQ0FBQztJQUNOLENBQUM7SUFFRCxrREFBbUIsR0FBbkI7UUFBQSxpQkFNQztRQUxDLElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLGlCQUFpQixDQUFDO2FBQy9DLFNBQVMsQ0FDUixVQUFBLE9BQU8sSUFBSSxPQUFBLEtBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLEVBQXZCLENBQXVCLEVBQ2xDLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsRUFBdEIsQ0FBc0IsQ0FDaEMsQ0FBQztJQUNOLENBQUM7SUFHRCxrREFBbUIsR0FBbkI7UUFBQSxpQkFNQztRQUxDLElBQUksQ0FBQyxlQUFlLENBQUMsY0FBYyxDQUFDLGlCQUFpQixDQUFDO2FBQ25ELFNBQVMsQ0FDUixVQUFBLE9BQU8sSUFBSSxPQUFBLEtBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLEVBQXZCLENBQXVCLEVBQ2xDLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsRUFBdEIsQ0FBc0IsQ0FDaEMsQ0FBQztJQUNOLENBQUM7SUFHRCx3Q0FBUyxHQUFULFVBQVUsSUFBSTtRQUNaLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVELHlDQUFVLEdBQVYsVUFBVyxLQUFLO1FBQ2QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM1QyxPQUFPLGlCQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQXZFVSxvQkFBb0I7UUFMaEMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxTQUFTO1lBQ25CLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsK0JBQStCO1NBQzdDLENBQUM7eUNBR3FDLGtDQUFlO09BRnpDLG9CQUFvQixDQXdFaEM7SUFBRCwyQkFBQztDQUFBLEFBeEVELElBd0VDO0FBeEVZLG9EQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgdGhyb3dFcnJvciB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBNYXRjaCB9IGZyb20gJy4uL21vZGVscyc7XG5pbXBvcnQgeyBGb290YmFsbFNlcnZpY2UgfSBmcm9tICcuLi9mb290YmFsbC5zZXJ2aWNlJztcblxuY29uc3QgUFJFTUlFUkVfTEVBR1VFX0lEID0gNDMyODtcbmNvbnN0IFNFQVNPTl8yMDE4X0lEID0gMTgxOTtcbmNvbnN0IExJVkVSUE9PTF9URUFNX0lEID0gMTMzNjAyO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICducy10ZXN0JyxcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgdGVtcGxhdGVVcmw6ICcuL3NlcnZpY2UtdGVzdC5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFNlcnZpY2VUZXN0Q29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGZvb3RiYWxsU2VydmljZTogRm9vdGJhbGxTZXJ2aWNlKSB7IH1cblxuICBnZXRQTFRhYmxlKCkge1xuICAgIHRoaXMuZm9vdGJhbGxTZXJ2aWNlLmdldExlYWd1ZVRhYmxlKFBSRU1JRVJFX0xFQUdVRV9JRCwgU0VBU09OXzIwMThfSUQpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICBsZWFndWVUYWJsZSA9PiB0aGlzLnByaW50RGF0YShsZWFndWVUYWJsZSksXG4gICAgICAgIGVycm9yID0+IHRoaXMucHJpbnRFcnJvcihlcnJvcilcbiAgICAgICk7XG4gIH1cblxuICBnZXRQTFRlYW1zKCkge1xuICAgIHRoaXMuZm9vdGJhbGxTZXJ2aWNlLmdldFRlYW1zKFBSRU1JRVJFX0xFQUdVRV9JRClcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIHRlYW1zID0+IHRoaXMucHJpbnREYXRhKHRlYW1zKSxcbiAgICAgICAgZXJyb3IgPT4gdGhpcy5wcmludEVycm9yKGVycm9yKVxuICAgICAgKTtcbiAgfVxuXG4gIGdldFBMTWF0Y2hlcygpIHtcbiAgICB0aGlzLmZvb3RiYWxsU2VydmljZS5nZXRNYXRjaGVzKFBSRU1JRVJFX0xFQUdVRV9JRCwgU0VBU09OXzIwMThfSUQpXG4gICAgICAuc3Vic2NyaWJlKG1hdGNoZXMgPT4ge1xuICAgICAgICBjb25zdCBtYXRjaGVzRXNzZW50aWFsID0gbWF0Y2hlcy5tYXAoKG1hdGNoOiBNYXRjaCkgPT4ge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBob21lVGVhbTogbWF0Y2guc3RySG9tZVRlYW0sXG4gICAgICAgICAgICBhd2F5VGVhbTogbWF0Y2guc3RyQXdheVRlYW0sXG4gICAgICAgICAgICBkYXRlOiBtYXRjaC5kYXRlRXZlbnQsXG4gICAgICAgICAgICBzY29yZTogbWF0Y2guaW50SG9tZVNjb3JlICsgJzonICsgbWF0Y2guaW50QXdheVNjb3JlXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMucHJpbnREYXRhKG1hdGNoZXNFc3NlbnRpYWwpO1xuICAgICAgfSxcbiAgICAgICAgZXJyb3IgPT4gdGhpcy5wcmludEVycm9yKGVycm9yKVxuICAgICAgKTtcbiAgfVxuXG4gIGdldExpdmVycG9vbCgpIHtcbiAgICB0aGlzLmZvb3RiYWxsU2VydmljZS5nZXRUZWFtKExJVkVSUE9PTF9URUFNX0lEKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgdGVhbSA9PiB0aGlzLnByaW50RGF0YSh0ZWFtKSxcbiAgICAgICAgZXJyb3IgPT4gdGhpcy5wcmludEVycm9yKGVycm9yKVxuICAgICAgKTtcbiAgfVxuXG4gIGdldExpdmVycG9vbFBsYXllcnMoKSB7XG4gICAgdGhpcy5mb290YmFsbFNlcnZpY2UuZ2V0UGxheWVycyhMSVZFUlBPT0xfVEVBTV9JRClcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIHBsYXllcnMgPT4gdGhpcy5wcmludERhdGEocGxheWVycyksXG4gICAgICAgIGVycm9yID0+IHRoaXMucHJpbnRFcnJvcihlcnJvcilcbiAgICAgICk7XG4gIH1cblxuXG4gIGdldExpdmVycG9vbE1hdGNoZXMoKSB7XG4gICAgdGhpcy5mb290YmFsbFNlcnZpY2UuZ2V0VGVhbU1hdGNoZXMoTElWRVJQT09MX1RFQU1fSUQpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICBtYXRjaGVzID0+IHRoaXMucHJpbnREYXRhKG1hdGNoZXMpLFxuICAgICAgICBlcnJvciA9PiB0aGlzLnByaW50RXJyb3IoZXJyb3IpXG4gICAgICApO1xuICB9XG5cblxuICBwcmludERhdGEoaXRlbSkge1xuICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGl0ZW0sIG51bGwsIDIpKTtcbiAgfVxuXG4gIHByaW50RXJyb3IoZXJyb3IpOiBPYnNlcnZhYmxlPG5ldmVyPiB7XG4gICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoZXJyb3IsIG51bGwsIDIpKTtcbiAgICByZXR1cm4gdGhyb3dFcnJvcihlcnJvcik7XG4gIH1cbn1cbiJdfQ==