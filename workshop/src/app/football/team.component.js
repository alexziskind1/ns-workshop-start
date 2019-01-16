"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var football_service_1 = require("../football.service");
var TeamComponent = /** @class */ (function () {
    // private players: Player[] = [];
    function TeamComponent(route, footballService) {
        this.route = route;
        this.footballService = footballService;
        this.matches = [];
    }
    TeamComponent.prototype.ngOnInit = function () {
        var _this = this;
        var teamId = +this.route.snapshot.params['teamId'];
        this.footballService.getTeam(teamId)
            .subscribe(function (team) { return _this.team = team; });
        this.footballService.getTeamMatches(teamId)
            .subscribe(function (matches) { return _this.matches = matches; });
        // this.footballService.getPlayers(teamId)
        // .subscribe(players => this.players = players);
    };
    TeamComponent.prototype.teamSelected = function (teamId) {
        console.log('::TeamComponent::teamSelected::' + teamId);
    };
    TeamComponent = __decorate([
        core_1.Component({
            selector: 'my-team',
            moduleId: module.id,
            templateUrl: './team.component.html'
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            football_service_1.FootballService])
    ], TeamComponent);
    return TeamComponent;
}());
exports.TeamComponent = TeamComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVhbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0ZWFtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCwwQ0FBaUQ7QUFFakQsd0RBQXNEO0FBUXREO0lBR0Usa0NBQWtDO0lBRWxDLHVCQUNVLEtBQXFCLEVBQ3JCLGVBQWdDO1FBRGhDLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUxsQyxZQUFPLEdBQVksRUFBRSxDQUFDO0lBTTlCLENBQUM7SUFFRCxnQ0FBUSxHQUFSO1FBQUEsaUJBV0M7UUFWQyxJQUFNLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUVyRCxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7YUFDakMsU0FBUyxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsS0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLEVBQWhCLENBQWdCLENBQUMsQ0FBQztRQUV2QyxJQUFJLENBQUMsZUFBZSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUM7YUFDeEMsU0FBUyxDQUFDLFVBQUEsT0FBTyxJQUFJLE9BQUEsS0FBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLEVBQXRCLENBQXNCLENBQUMsQ0FBQTtRQUUvQywwQ0FBMEM7UUFDMUMsaURBQWlEO0lBQ25ELENBQUM7SUFFRCxvQ0FBWSxHQUFaLFVBQWEsTUFBYztRQUN6QixPQUFPLENBQUMsR0FBRyxDQUFDLGlDQUFpQyxHQUFHLE1BQU0sQ0FBQyxDQUFDO0lBQzFELENBQUM7SUF6QlUsYUFBYTtRQUx6QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFNBQVM7WUFDbkIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx1QkFBdUI7U0FDckMsQ0FBQzt5Q0FPaUIsdUJBQWM7WUFDSixrQ0FBZTtPQVAvQixhQUFhLENBMEJ6QjtJQUFELG9CQUFDO0NBQUEsQUExQkQsSUEwQkM7QUExQlksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBGb290YmFsbFNlcnZpY2UgfSBmcm9tICcuLi9mb290YmFsbC5zZXJ2aWNlJztcbmltcG9ydCB7IFRlYW0sIE1hdGNoLCBQbGF5ZXIgfSBmcm9tICcuLi9tb2RlbHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdteS10ZWFtJyxcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgdGVtcGxhdGVVcmw6ICcuL3RlYW0uY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIFRlYW1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBwcml2YXRlIHRlYW06IFRlYW07XG4gIHByaXZhdGUgbWF0Y2hlczogTWF0Y2hbXSA9IFtdO1xuICAvLyBwcml2YXRlIHBsYXllcnM6IFBsYXllcltdID0gW107XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgcHJpdmF0ZSBmb290YmFsbFNlcnZpY2U6IEZvb3RiYWxsU2VydmljZSkge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgY29uc3QgdGVhbUlkID0gK3RoaXMucm91dGUuc25hcHNob3QucGFyYW1zWyd0ZWFtSWQnXTtcblxuICAgIHRoaXMuZm9vdGJhbGxTZXJ2aWNlLmdldFRlYW0odGVhbUlkKVxuICAgICAgLnN1YnNjcmliZSh0ZWFtID0+IHRoaXMudGVhbSA9IHRlYW0pO1xuXG4gICAgdGhpcy5mb290YmFsbFNlcnZpY2UuZ2V0VGVhbU1hdGNoZXModGVhbUlkKVxuICAgICAgLnN1YnNjcmliZShtYXRjaGVzID0+IHRoaXMubWF0Y2hlcyA9IG1hdGNoZXMpXG5cbiAgICAvLyB0aGlzLmZvb3RiYWxsU2VydmljZS5nZXRQbGF5ZXJzKHRlYW1JZClcbiAgICAvLyAuc3Vic2NyaWJlKHBsYXllcnMgPT4gdGhpcy5wbGF5ZXJzID0gcGxheWVycyk7XG4gIH1cblxuICB0ZWFtU2VsZWN0ZWQodGVhbUlkOiBudW1iZXIpIHtcbiAgICBjb25zb2xlLmxvZygnOjpUZWFtQ29tcG9uZW50Ojp0ZWFtU2VsZWN0ZWQ6OicgKyB0ZWFtSWQpO1xuICB9XG59XG4iXX0=