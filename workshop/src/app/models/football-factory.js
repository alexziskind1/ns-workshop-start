"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FootballFactory = /** @class */ (function () {
    function FootballFactory() {
    }
    FootballFactory.leagueTableFromRaw = function (rawLeagueTable) {
        var table = {
            standings: []
        };
        if (rawLeagueTable.table) {
            table.standings = rawLeagueTable.table;
        }
        return table;
    };
    FootballFactory.teamFromRaw = function (rawTeam) {
        return rawTeam;
    };
    FootballFactory.teamsFromRaw = function (result) {
        var _this = this;
        return result.teams.map(function (rawTeam) { return _this.teamFromRaw(rawTeam); });
    };
    FootballFactory.matchFromRaw = function (rawMatch) {
        return rawMatch;
    };
    FootballFactory.matchesFromRaw = function (rawMatches) {
        var _this = this;
        return rawMatches.map(function (rawMatch) { return _this.matchFromRaw(rawMatch); });
    };
    FootballFactory.playerFromRaw = function (rawPlayer) {
        return rawPlayer;
    };
    FootballFactory.playersFromRaw = function (result) {
        var _this = this;
        return result.player.map(function (rawPlayer) { return _this.playerFromRaw(rawPlayer); });
    };
    FootballFactory.standingFromRaw = function (rawStanding) {
        return rawStanding;
    };
    return FootballFactory;
}());
exports.FootballFactory = FootballFactory;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9vdGJhbGwtZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZvb3RiYWxsLWZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQTtJQUFBO0lBeUNBLENBQUM7SUF2Q1Esa0NBQWtCLEdBQXpCLFVBQTBCLGNBQW1CO1FBQzNDLElBQU0sS0FBSyxHQUFnQjtZQUN6QixTQUFTLEVBQUUsRUFBRTtTQUNkLENBQUM7UUFDRixJQUFJLGNBQWMsQ0FBQyxLQUFLLEVBQUU7WUFDeEIsS0FBSyxDQUFDLFNBQVMsR0FBRyxjQUFjLENBQUMsS0FBSyxDQUFDO1NBQ3hDO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0lBRU0sMkJBQVcsR0FBbEIsVUFBbUIsT0FBWTtRQUM3QixPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDO0lBRU0sNEJBQVksR0FBbkIsVUFBb0IsTUFBVztRQUEvQixpQkFFQztRQURDLE9BQU8sTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsVUFBQSxPQUFPLElBQUksT0FBQSxLQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxFQUF6QixDQUF5QixDQUFDLENBQUM7SUFDaEUsQ0FBQztJQUVNLDRCQUFZLEdBQW5CLFVBQW9CLFFBQWE7UUFDL0IsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQztJQUVNLDhCQUFjLEdBQXJCLFVBQXNCLFVBQWlCO1FBQXZDLGlCQUVDO1FBREMsT0FBTyxVQUFVLENBQUMsR0FBRyxDQUFDLFVBQUEsUUFBUSxJQUFJLE9BQUEsS0FBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsRUFBM0IsQ0FBMkIsQ0FBQyxDQUFDO0lBQ2pFLENBQUM7SUFFTSw2QkFBYSxHQUFwQixVQUFxQixTQUFjO1FBQ2pDLE9BQU8sU0FBUyxDQUFDO0lBQ25CLENBQUM7SUFFTSw4QkFBYyxHQUFyQixVQUFzQixNQUFXO1FBQWpDLGlCQUVDO1FBREMsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxVQUFBLFNBQVMsSUFBSSxPQUFBLEtBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLEVBQTdCLENBQTZCLENBQUMsQ0FBQztJQUN2RSxDQUFDO0lBRU0sK0JBQWUsR0FBdEIsVUFBdUIsV0FBZ0I7UUFFckMsT0FBTyxXQUFXLENBQUM7SUFDckIsQ0FBQztJQUVILHNCQUFDO0FBQUQsQ0FBQyxBQXpDRCxJQXlDQztBQXpDWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExlYWd1ZVRhYmxlLCBUZWFtLCBNYXRjaCwgUGxheWVyLCBTdGFuZGluZyB9IGZyb20gJy4vJztcblxuZXhwb3J0IGNsYXNzIEZvb3RiYWxsRmFjdG9yeSB7XG5cbiAgc3RhdGljIGxlYWd1ZVRhYmxlRnJvbVJhdyhyYXdMZWFndWVUYWJsZTogYW55KTogTGVhZ3VlVGFibGUge1xuICAgIGNvbnN0IHRhYmxlOiBMZWFndWVUYWJsZSA9IHtcbiAgICAgIHN0YW5kaW5nczogW11cbiAgICB9O1xuICAgIGlmIChyYXdMZWFndWVUYWJsZS50YWJsZSkge1xuICAgICAgdGFibGUuc3RhbmRpbmdzID0gcmF3TGVhZ3VlVGFibGUudGFibGU7XG4gICAgfVxuICAgIHJldHVybiB0YWJsZTtcbiAgfVxuXG4gIHN0YXRpYyB0ZWFtRnJvbVJhdyhyYXdUZWFtOiBhbnkpOiBUZWFtIHtcbiAgICByZXR1cm4gcmF3VGVhbTtcbiAgfVxuXG4gIHN0YXRpYyB0ZWFtc0Zyb21SYXcocmVzdWx0OiBhbnkpOiBUZWFtW10ge1xuICAgIHJldHVybiByZXN1bHQudGVhbXMubWFwKHJhd1RlYW0gPT4gdGhpcy50ZWFtRnJvbVJhdyhyYXdUZWFtKSk7XG4gIH1cblxuICBzdGF0aWMgbWF0Y2hGcm9tUmF3KHJhd01hdGNoOiBhbnkpOiBNYXRjaCB7XG4gICAgcmV0dXJuIHJhd01hdGNoO1xuICB9XG5cbiAgc3RhdGljIG1hdGNoZXNGcm9tUmF3KHJhd01hdGNoZXM6IGFueVtdKTogTWF0Y2hbXSB7XG4gICAgcmV0dXJuIHJhd01hdGNoZXMubWFwKHJhd01hdGNoID0+IHRoaXMubWF0Y2hGcm9tUmF3KHJhd01hdGNoKSk7XG4gIH1cblxuICBzdGF0aWMgcGxheWVyRnJvbVJhdyhyYXdQbGF5ZXI6IGFueSk6IFBsYXllciB7XG4gICAgcmV0dXJuIHJhd1BsYXllcjtcbiAgfVxuXG4gIHN0YXRpYyBwbGF5ZXJzRnJvbVJhdyhyZXN1bHQ6IGFueSk6IFBsYXllcltdIHtcbiAgICByZXR1cm4gcmVzdWx0LnBsYXllci5tYXAocmF3UGxheWVyID0+IHRoaXMucGxheWVyRnJvbVJhdyhyYXdQbGF5ZXIpKTtcbiAgfVxuXG4gIHN0YXRpYyBzdGFuZGluZ0Zyb21SYXcocmF3U3RhbmRpbmc6IGFueSk6IFN0YW5kaW5nIHtcblxuICAgIHJldHVybiByYXdTdGFuZGluZztcbiAgfVxuXG59XG4iXX0=