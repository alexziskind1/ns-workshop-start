"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var football_service_1 = require("../football.service");
var LeagueTableComponent = /** @class */ (function () {
    function LeagueTableComponent(footballService) {
        this.footballService = footballService;
    }
    LeagueTableComponent.prototype.ngOnInit = function () {
        this.loadTeamsAndTable();
    };
    /**
     * Get both teams and table info. Teams contains short name for each team
     */
    LeagueTableComponent.prototype.loadTeamsAndTable = function () {
        var _this = this;
        this.footballService.getTeams(this.leagueId)
            .subscribe(function (teams) {
            console.log('got teams');
            console.log(teams);
            _this.teams = teams;
            _this.footballService.getLeagueTable(_this.leagueId)
                .subscribe(function (table) { return _this.table = table; });
        });
    };
    LeagueTableComponent.prototype.getTeamName = function (teamId) {
        var team = this.getTeam(teamId);
        return (team.strTeamShort) ? team.strTeamShort : team.strTeam;
    };
    LeagueTableComponent.prototype.getTeam = function (teamId) {
        return this.teams.filter(function (team) { return team.idTeam === teamId; })[0];
    };
    LeagueTableComponent.prototype.onTeamSelected = function (event) {
        var selectedTeamId = this.table.standings[event.index].teamid;
        console.log('::LeagueTableComponent::onTeamSelect::' + selectedTeamId);
        // Add eventemitter emit call here with the selectedTeamId
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], LeagueTableComponent.prototype, "leagueId", void 0);
    LeagueTableComponent = __decorate([
        core_1.Component({
            selector: 'my-league-table',
            moduleId: module.id,
            templateUrl: './league-table.component.html'
        }),
        __metadata("design:paramtypes", [football_service_1.FootballService])
    ], LeagueTableComponent);
    return LeagueTableComponent;
}());
exports.LeagueTableComponent = LeagueTableComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGVhZ3VlLXRhYmxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxlYWd1ZS10YWJsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBK0U7QUFJL0Usd0RBQXNEO0FBT3REO0lBT0UsOEJBQW9CLGVBQWdDO1FBQWhDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtJQUNwRCxDQUFDO0lBRUQsdUNBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFRDs7T0FFRztJQUNLLGdEQUFpQixHQUF6QjtRQUFBLGlCQVNDO1FBUkMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQzthQUN6QyxTQUFTLENBQUMsVUFBQSxLQUFLO1lBQ2QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUN6QixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ25CLEtBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1lBQ25CLEtBQUksQ0FBQyxlQUFlLENBQUMsY0FBYyxDQUFDLEtBQUksQ0FBQyxRQUFRLENBQUM7aUJBQy9DLFNBQVMsQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxFQUFsQixDQUFrQixDQUFDLENBQUM7UUFDNUMsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU0sMENBQVcsR0FBbEIsVUFBbUIsTUFBYztRQUMvQixJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRWxDLE9BQU8sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDaEUsQ0FBQztJQUVPLHNDQUFPLEdBQWYsVUFBZ0IsTUFBYztRQUM1QixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsSUFBSSxDQUFDLE1BQU0sS0FBSyxNQUFNLEVBQXRCLENBQXNCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBRUQsNkNBQWMsR0FBZCxVQUFlLEtBQUs7UUFDbEIsSUFBTSxjQUFjLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQztRQUNoRSxPQUFPLENBQUMsR0FBRyxDQUFDLHdDQUF3QyxHQUFHLGNBQWMsQ0FBQyxDQUFDO1FBQ3ZFLDBEQUEwRDtJQUM1RCxDQUFDO0lBekNRO1FBQVIsWUFBSyxFQUFFOzswREFBeUI7SUFEdEIsb0JBQW9CO1FBTGhDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsaUJBQWlCO1lBQzNCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsK0JBQStCO1NBQzdDLENBQUM7eUNBUXFDLGtDQUFlO09BUHpDLG9CQUFvQixDQTJDaEM7SUFBRCwyQkFBQztDQUFBLEFBM0NELElBMkNDO0FBM0NZLG9EQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8vIGltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xuXG5pbXBvcnQgeyBMZWFndWVUYWJsZSwgVGVhbSB9IGZyb20gJy4uL21vZGVscyc7XG5pbXBvcnQgeyBGb290YmFsbFNlcnZpY2UgfSBmcm9tICcuLi9mb290YmFsbC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbXktbGVhZ3VlLXRhYmxlJyxcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgdGVtcGxhdGVVcmw6ICcuL2xlYWd1ZS10YWJsZS5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgTGVhZ3VlVGFibGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBwdWJsaWMgbGVhZ3VlSWQ6IG51bWJlcjtcbiAgLy8gQWRkIE91dHB1dCBFdmVudEVtaXR0ZXIgaGVyZVxuXG4gIHB1YmxpYyB0YWJsZTogTGVhZ3VlVGFibGU7XG4gIHB1YmxpYyB0ZWFtczogVGVhbVtdO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZm9vdGJhbGxTZXJ2aWNlOiBGb290YmFsbFNlcnZpY2UpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMubG9hZFRlYW1zQW5kVGFibGUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYm90aCB0ZWFtcyBhbmQgdGFibGUgaW5mby4gVGVhbXMgY29udGFpbnMgc2hvcnQgbmFtZSBmb3IgZWFjaCB0ZWFtXG4gICAqL1xuICBwcml2YXRlIGxvYWRUZWFtc0FuZFRhYmxlKCkge1xuICAgIHRoaXMuZm9vdGJhbGxTZXJ2aWNlLmdldFRlYW1zKHRoaXMubGVhZ3VlSWQpXG4gICAgICAuc3Vic2NyaWJlKHRlYW1zID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ2dvdCB0ZWFtcycpO1xuICAgICAgICBjb25zb2xlLmxvZyh0ZWFtcyk7XG4gICAgICAgIHRoaXMudGVhbXMgPSB0ZWFtcztcbiAgICAgICAgdGhpcy5mb290YmFsbFNlcnZpY2UuZ2V0TGVhZ3VlVGFibGUodGhpcy5sZWFndWVJZClcbiAgICAgICAgICAuc3Vic2NyaWJlKHRhYmxlID0+IHRoaXMudGFibGUgPSB0YWJsZSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRUZWFtTmFtZSh0ZWFtSWQ6IG51bWJlcik6IHN0cmluZyB7XG4gICAgY29uc3QgdGVhbSA9IHRoaXMuZ2V0VGVhbSh0ZWFtSWQpO1xuXG4gICAgcmV0dXJuICh0ZWFtLnN0clRlYW1TaG9ydCkgPyB0ZWFtLnN0clRlYW1TaG9ydCA6IHRlYW0uc3RyVGVhbTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0VGVhbSh0ZWFtSWQ6IG51bWJlcik6IFRlYW0ge1xuICAgIHJldHVybiB0aGlzLnRlYW1zLmZpbHRlcih0ZWFtID0+IHRlYW0uaWRUZWFtID09PSB0ZWFtSWQpWzBdO1xuICB9XG5cbiAgb25UZWFtU2VsZWN0ZWQoZXZlbnQpIHtcbiAgICBjb25zdCBzZWxlY3RlZFRlYW1JZCA9IHRoaXMudGFibGUuc3RhbmRpbmdzW2V2ZW50LmluZGV4XS50ZWFtaWQ7XG4gICAgY29uc29sZS5sb2coJzo6TGVhZ3VlVGFibGVDb21wb25lbnQ6Om9uVGVhbVNlbGVjdDo6JyArIHNlbGVjdGVkVGVhbUlkKTtcbiAgICAvLyBBZGQgZXZlbnRlbWl0dGVyIGVtaXQgY2FsbCBoZXJlIHdpdGggdGhlIHNlbGVjdGVkVGVhbUlkXG4gIH1cbn1cbiJdfQ==