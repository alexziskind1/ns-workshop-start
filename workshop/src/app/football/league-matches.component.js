"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var football_service_1 = require("../football.service");
var LeagueMatchesComponent = /** @class */ (function () {
    function LeagueMatchesComponent(footballService, route) {
        this.footballService = footballService;
        this.route = route;
        this.matches = [];
        this.leagueName = '';
    }
    LeagueMatchesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.leagueId = +this.route.snapshot.params['leagueId'];
        this.leagueName = this.route.snapshot.params['leagueName'];
        this.footballService.getMatches(this.leagueId)
            .subscribe(function (matches) { return _this.matches = matches; });
    };
    LeagueMatchesComponent = __decorate([
        core_1.Component({
            selector: 'my-matches',
            moduleId: module.id,
            templateUrl: './league-matches.component.html',
            styleUrls: ['./match.component.css']
        }),
        __metadata("design:paramtypes", [football_service_1.FootballService,
            router_1.ActivatedRoute])
    ], LeagueMatchesComponent);
    return LeagueMatchesComponent;
}());
exports.LeagueMatchesComponent = LeagueMatchesComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGVhZ3VlLW1hdGNoZXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibGVhZ3VlLW1hdGNoZXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBRWxELDBDQUFpRDtBQUdqRCx3REFBc0Q7QUFRdEQ7SUFLRSxnQ0FDVSxlQUFnQyxFQUNoQyxLQUFxQjtRQURyQixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFOeEIsWUFBTyxHQUFZLEVBQUUsQ0FBQztRQUV0QixlQUFVLEdBQVcsRUFBRSxDQUFDO0lBSy9CLENBQUM7SUFFRCx5Q0FBUSxHQUFSO1FBQUEsaUJBTUM7UUFMQyxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3hELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBRTNELElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7YUFDM0MsU0FBUyxDQUFDLFVBQUEsT0FBTyxJQUFJLE9BQUEsS0FBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLEVBQXRCLENBQXNCLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBaEJVLHNCQUFzQjtRQU5sQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFlBQVk7WUFDdEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSxpQ0FBaUM7WUFDOUMsU0FBUyxFQUFFLENBQUMsdUJBQXVCLENBQUM7U0FDckMsQ0FBQzt5Q0FPMkIsa0NBQWU7WUFDekIsdUJBQWM7T0FQcEIsc0JBQXNCLENBaUJsQztJQUFELDZCQUFDO0NBQUEsQUFqQkQsSUFpQkM7QUFqQlksd0RBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IE1hdGNoLCBUZWFtIH0gZnJvbSAnLi4vbW9kZWxzJztcbmltcG9ydCB7IEZvb3RiYWxsU2VydmljZSB9IGZyb20gJy4uL2Zvb3RiYWxsLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdteS1tYXRjaGVzJyxcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgdGVtcGxhdGVVcmw6ICcuL2xlYWd1ZS1tYXRjaGVzLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbWF0Y2guY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIExlYWd1ZU1hdGNoZXNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBwdWJsaWMgbWF0Y2hlczogTWF0Y2hbXSA9IFtdO1xuICBwdWJsaWMgbGVhZ3VlSWQ6IG51bWJlcjtcbiAgcHVibGljIGxlYWd1ZU5hbWU6IHN0cmluZyA9ICcnO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZm9vdGJhbGxTZXJ2aWNlOiBGb290YmFsbFNlcnZpY2UsXG4gICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMubGVhZ3VlSWQgPSArdGhpcy5yb3V0ZS5zbmFwc2hvdC5wYXJhbXNbJ2xlYWd1ZUlkJ107XG4gICAgdGhpcy5sZWFndWVOYW1lID0gdGhpcy5yb3V0ZS5zbmFwc2hvdC5wYXJhbXNbJ2xlYWd1ZU5hbWUnXTtcblxuICAgIHRoaXMuZm9vdGJhbGxTZXJ2aWNlLmdldE1hdGNoZXModGhpcy5sZWFndWVJZClcbiAgICAgIC5zdWJzY3JpYmUobWF0Y2hlcyA9PiB0aGlzLm1hdGNoZXMgPSBtYXRjaGVzKTtcbiAgfVxufVxuIl19