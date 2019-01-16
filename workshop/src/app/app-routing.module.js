"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var service_test_component_1 = require("./service-test/service-test.component");
// Lesson 1
var profile_component_1 = require("./profile/profile.component");
// Lesson 2
var color_1 = require("./color");
// Lesson 3
var tables_component_1 = require("./football/tables.component");
var league_matches_component_1 = require("./football/league-matches.component");
var team_component_1 = require("./football/team.component");
// Lesson 4
var wizard_profile_component_1 = require("./plugins/wizard-profile.component");
var routes = [
    // { path: '', redirectTo: '/profile', pathMatch: 'full' },
    // { path: '', redirectTo: '/color', pathMatch: 'full' },
    // { path: '', redirectTo: '/service-test', pathMatch: 'full' },
    { path: '', redirectTo: '/football', pathMatch: 'full' },
    // { path: '', redirectTo: '/plugins', pathMatch: 'full' },
    // Lesson 1
    { path: 'profile', component: profile_component_1.ProfileComponent },
    // Lesson 2
    {
        path: 'color', children: [
            { path: '', component: color_1.ColorComponent },
            { path: 'blue', component: color_1.BlueComponent },
        ]
    },
    // Lesson 3
    { path: 'service-test', component: service_test_component_1.ServiceTestComponent },
    {
        path: 'football', children: [
            { path: '', component: tables_component_1.TablesComponent },
            { path: 'matches/:leagueId/:leagueName', component: league_matches_component_1.LeagueMatchesComponent },
            { path: 'team/:teamId', component: team_component_1.TeamComponent }
        ]
    },
    // Lesson 4
    { path: 'plugins', component: wizard_profile_component_1.WizardProfileComponent }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.NativeScriptRouterModule.forRoot(routes)],
            exports: [router_1.NativeScriptRouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLXJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlDO0FBQ3pDLHNEQUF1RTtBQUd2RSxnRkFBNkU7QUFFN0UsV0FBVztBQUNYLGlFQUErRDtBQUUvRCxXQUFXO0FBQ1gsaUNBQW1GO0FBR25GLFdBQVc7QUFDWCxnRUFBOEQ7QUFDOUQsZ0ZBQTZFO0FBRTdFLDREQUEwRDtBQUUxRCxXQUFXO0FBQ1gsK0VBQTRFO0FBRTVFLElBQU0sTUFBTSxHQUFXO0lBQ3JCLDJEQUEyRDtJQUMzRCx5REFBeUQ7SUFDekQsZ0VBQWdFO0lBQ2hFLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUU7SUFDeEQsMkRBQTJEO0lBRTNELFdBQVc7SUFDWCxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLG9DQUFnQixFQUFFO0lBRWhELFdBQVc7SUFDWDtRQUNFLElBQUksRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFO1lBQ3ZCLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsc0JBQWMsRUFBRTtZQUN2QyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLHFCQUFhLEVBQUU7U0FFM0M7S0FDRjtJQUVELFdBQVc7SUFDWCxFQUFFLElBQUksRUFBRSxjQUFjLEVBQUUsU0FBUyxFQUFFLDZDQUFvQixFQUFFO0lBQ3pEO1FBQ0UsSUFBSSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUU7WUFDMUIsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxrQ0FBZSxFQUFFO1lBQ3hDLEVBQUUsSUFBSSxFQUFFLCtCQUErQixFQUFFLFNBQVMsRUFBRSxpREFBc0IsRUFBRTtZQUM1RSxFQUFFLElBQUksRUFBRSxjQUFjLEVBQUUsU0FBUyxFQUFFLDhCQUFhLEVBQUU7U0FDbkQ7S0FDRjtJQUVELFdBQVc7SUFDWCxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLGlEQUFzQixFQUFFO0NBQ3ZELENBQUM7QUFNRjtJQUFBO0lBQWdDLENBQUM7SUFBcEIsZ0JBQWdCO1FBSjVCLGVBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRSxDQUFDLGlDQUF3QixDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNuRCxPQUFPLEVBQUUsQ0FBQyxpQ0FBd0IsQ0FBQztTQUNwQyxDQUFDO09BQ1csZ0JBQWdCLENBQUk7SUFBRCx1QkFBQztDQUFBLEFBQWpDLElBQWlDO0FBQXBCLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgU2VydmljZVRlc3RDb21wb25lbnQgfSBmcm9tICcuL3NlcnZpY2UtdGVzdC9zZXJ2aWNlLXRlc3QuY29tcG9uZW50JztcblxuLy8gTGVzc29uIDFcbmltcG9ydCB7IFByb2ZpbGVDb21wb25lbnQgfSBmcm9tICcuL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQnO1xuXG4vLyBMZXNzb24gMlxuaW1wb3J0IHsgQ29sb3JDb21wb25lbnQsIEJsdWVDb21wb25lbnQsIFJlZENvbXBvbmVudCwgUkdCQ29tcG9uZW50IH0gZnJvbSAnLi9jb2xvcidcblxuXG4vLyBMZXNzb24gM1xuaW1wb3J0IHsgVGFibGVzQ29tcG9uZW50IH0gZnJvbSAnLi9mb290YmFsbC90YWJsZXMuY29tcG9uZW50JztcbmltcG9ydCB7IExlYWd1ZU1hdGNoZXNDb21wb25lbnQgfSBmcm9tICcuL2Zvb3RiYWxsL2xlYWd1ZS1tYXRjaGVzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMZWFndWVUYWJsZUNvbXBvbmVudCB9IGZyb20gJy4vZm9vdGJhbGwvbGVhZ3VlLXRhYmxlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUZWFtQ29tcG9uZW50IH0gZnJvbSAnLi9mb290YmFsbC90ZWFtLmNvbXBvbmVudCc7XG5cbi8vIExlc3NvbiA0XG5pbXBvcnQgeyBXaXphcmRQcm9maWxlQ29tcG9uZW50IH0gZnJvbSAnLi9wbHVnaW5zL3dpemFyZC1wcm9maWxlLmNvbXBvbmVudCc7XG5cbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xuICAvLyB7IHBhdGg6ICcnLCByZWRpcmVjdFRvOiAnL3Byb2ZpbGUnLCBwYXRoTWF0Y2g6ICdmdWxsJyB9LFxuICAvLyB7IHBhdGg6ICcnLCByZWRpcmVjdFRvOiAnL2NvbG9yJywgcGF0aE1hdGNoOiAnZnVsbCcgfSxcbiAgLy8geyBwYXRoOiAnJywgcmVkaXJlY3RUbzogJy9zZXJ2aWNlLXRlc3QnLCBwYXRoTWF0Y2g6ICdmdWxsJyB9LFxuICB7IHBhdGg6ICcnLCByZWRpcmVjdFRvOiAnL2Zvb3RiYWxsJywgcGF0aE1hdGNoOiAnZnVsbCcgfSxcbiAgLy8geyBwYXRoOiAnJywgcmVkaXJlY3RUbzogJy9wbHVnaW5zJywgcGF0aE1hdGNoOiAnZnVsbCcgfSxcblxuICAvLyBMZXNzb24gMVxuICB7IHBhdGg6ICdwcm9maWxlJywgY29tcG9uZW50OiBQcm9maWxlQ29tcG9uZW50IH0sXG5cbiAgLy8gTGVzc29uIDJcbiAge1xuICAgIHBhdGg6ICdjb2xvcicsIGNoaWxkcmVuOiBbXG4gICAgICB7IHBhdGg6ICcnLCBjb21wb25lbnQ6IENvbG9yQ29tcG9uZW50IH0sXG4gICAgICB7IHBhdGg6ICdibHVlJywgY29tcG9uZW50OiBCbHVlQ29tcG9uZW50IH0sXG4gICAgICAvLy4uIGFkZCByZWQgYW5kIHJnYiByb3V0ZXMgaGVyZVxuICAgIF1cbiAgfSxcblxuICAvLyBMZXNzb24gM1xuICB7IHBhdGg6ICdzZXJ2aWNlLXRlc3QnLCBjb21wb25lbnQ6IFNlcnZpY2VUZXN0Q29tcG9uZW50IH0sXG4gIHtcbiAgICBwYXRoOiAnZm9vdGJhbGwnLCBjaGlsZHJlbjogW1xuICAgICAgeyBwYXRoOiAnJywgY29tcG9uZW50OiBUYWJsZXNDb21wb25lbnQgfSxcbiAgICAgIHsgcGF0aDogJ21hdGNoZXMvOmxlYWd1ZUlkLzpsZWFndWVOYW1lJywgY29tcG9uZW50OiBMZWFndWVNYXRjaGVzQ29tcG9uZW50IH0sXG4gICAgICB7IHBhdGg6ICd0ZWFtLzp0ZWFtSWQnLCBjb21wb25lbnQ6IFRlYW1Db21wb25lbnQgfVxuICAgIF1cbiAgfSxcblxuICAvLyBMZXNzb24gNFxuICB7IHBhdGg6ICdwbHVnaW5zJywgY29tcG9uZW50OiBXaXphcmRQcm9maWxlQ29tcG9uZW50IH1cbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yUm9vdChyb3V0ZXMpXSxcbiAgZXhwb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZV1cbn0pXG5leHBvcnQgY2xhc3MgQXBwUm91dGluZ01vZHVsZSB7IH1cbiJdfQ==