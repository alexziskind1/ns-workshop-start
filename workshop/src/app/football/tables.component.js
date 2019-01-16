"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var TablesComponent = /** @class */ (function () {
    function TablesComponent(router) {
        this.router = router;
        this.BundesligaId = 4331;
        this.PremierLeagueId = 4328;
        this.SerieAId = 4332;
        this.Ligue1Id = 4334;
        this.EredivisieId = 4337;
    }
    TablesComponent.prototype.onTeamTap = function (teamId) {
        console.log('::TablesComponent::onTeamTap::' + teamId);
        this.router.navigate(['/football/team', teamId]);
    };
    TablesComponent = __decorate([
        core_1.Component({
            selector: 'my-tables',
            moduleId: module.id,
            templateUrl: './tables.component.html'
        }),
        __metadata("design:paramtypes", [router_1.Router])
    ], TablesComponent);
    return TablesComponent;
}());
exports.TablesComponent = TablesComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGVzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRhYmxlcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsMENBQXlDO0FBU3pDO0lBU0UseUJBQW9CLE1BQWM7UUFBZCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBUDNCLGlCQUFZLEdBQVcsSUFBSSxDQUFDO1FBQzVCLG9CQUFlLEdBQVcsSUFBSSxDQUFDO1FBQy9CLGFBQVEsR0FBVyxJQUFJLENBQUM7UUFDeEIsYUFBUSxHQUFXLElBQUksQ0FBQztRQUN4QixpQkFBWSxHQUFXLElBQUksQ0FBQztJQUluQyxDQUFDO0lBRU8sbUNBQVMsR0FBakIsVUFBa0IsTUFBYztRQUM5QixPQUFPLENBQUMsR0FBRyxDQUFDLGdDQUFnQyxHQUFHLE1BQU0sQ0FBQyxDQUFDO1FBQ3ZELElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsZ0JBQWdCLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBZlUsZUFBZTtRQUwzQixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFdBQVc7WUFDckIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx5QkFBeUI7U0FDdkMsQ0FBQzt5Q0FVNEIsZUFBTTtPQVR2QixlQUFlLENBZ0IzQjtJQUFELHNCQUFDO0NBQUEsQUFoQkQsSUFnQkM7QUFoQlksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgTGVhZ3VlVGFibGUgfSBmcm9tICcuLi9tb2RlbHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdteS10YWJsZXMnLFxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICB0ZW1wbGF0ZVVybDogJy4vdGFibGVzLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBUYWJsZXNDb21wb25lbnQge1xuXG4gIHB1YmxpYyBCdW5kZXNsaWdhSWQ6IG51bWJlciA9IDQzMzE7XG4gIHB1YmxpYyBQcmVtaWVyTGVhZ3VlSWQ6IG51bWJlciA9IDQzMjg7XG4gIHB1YmxpYyBTZXJpZUFJZDogbnVtYmVyID0gNDMzMjtcbiAgcHVibGljIExpZ3VlMUlkOiBudW1iZXIgPSA0MzM0O1xuICBwdWJsaWMgRXJlZGl2aXNpZUlkOiBudW1iZXIgPSA0MzM3O1xuXG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xuICB9XG5cbiAgcHJpdmF0ZSBvblRlYW1UYXAodGVhbUlkOiBudW1iZXIpIHtcbiAgICBjb25zb2xlLmxvZygnOjpUYWJsZXNDb21wb25lbnQ6Om9uVGVhbVRhcDo6JyArIHRlYW1JZCk7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvZm9vdGJhbGwvdGVhbScsIHRlYW1JZF0pO1xuICB9XG59XG4iXX0=