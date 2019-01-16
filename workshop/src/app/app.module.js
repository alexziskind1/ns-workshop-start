"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
// Uncomment and add to NgModule imports if you need to use two-way binding
var forms_1 = require("nativescript-angular/forms");
// Uncomment and add to NgModule imports if you need to use the HttpClient wrapper
var http_client_1 = require("nativescript-angular/http-client");
var angular_1 = require("nativescript-ui-dataform/angular");
var profile_component_1 = require("./profile/profile.component");
var color_1 = require("./color");
var service_test_component_1 = require("./service-test/service-test.component");
var tables_component_1 = require("./football/tables.component");
var league_table_component_1 = require("./football/league-table.component");
var league_matches_component_1 = require("./football/league-matches.component");
var match_component_1 = require("./football/match.component");
var team_component_1 = require("./football/team.component");
var player_component_1 = require("./football/player.component");
var wizard_profile_component_1 = require("./plugins/wizard-profile.component");
var offline_football_service_1 = require("./offline-football.service");
var AppModule = /** @class */ (function () {
    /*
    Pass your application module to the bootstrapModule function located in main.ts to start your app
    */
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            bootstrap: [
                app_component_1.AppComponent
            ],
            imports: [
                nativescript_module_1.NativeScriptModule,
                app_routing_module_1.AppRoutingModule,
                forms_1.NativeScriptFormsModule,
                http_client_1.NativeScriptHttpClientModule,
                angular_1.NativeScriptUIDataFormModule
            ],
            declarations: [
                app_component_1.AppComponent,
                //Lesson 1
                profile_component_1.ProfileComponent,
                //Lesson 2
                color_1.ColorComponent,
                color_1.BlueComponent,
                color_1.RedComponent,
                color_1.RGBComponent,
                //Lesson 3
                // Services
                service_test_component_1.ServiceTestComponent,
                // Components
                tables_component_1.TablesComponent,
                league_table_component_1.LeagueTableComponent,
                league_matches_component_1.LeagueMatchesComponent,
                match_component_1.MatchComponent,
                team_component_1.TeamComponent,
                player_component_1.PlayerComponent,
                //Lesson 4
                wizard_profile_component_1.WizardProfileComponent,
            ],
            providers: [
                offline_football_service_1.OfflineFootballService
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
        /*
        Pass your application module to the bootstrapModule function located in main.ts to start your app
        */
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0QsZ0ZBQThFO0FBRTlFLDJEQUF3RDtBQUN4RCxpREFBK0M7QUFFL0MsMkVBQTJFO0FBQzNFLG9EQUFxRTtBQUVyRSxrRkFBa0Y7QUFDbEYsZ0VBQWdGO0FBRWhGLDREQUFnRjtBQUVoRixpRUFBK0Q7QUFDL0QsaUNBQW9GO0FBQ3BGLGdGQUE2RTtBQUM3RSxnRUFBOEQ7QUFDOUQsNEVBQXlFO0FBQ3pFLGdGQUE2RTtBQUM3RSw4REFBNEQ7QUFDNUQsNERBQTBEO0FBQzFELGdFQUE4RDtBQUM5RCwrRUFBNEU7QUFDNUUsdUVBQW9FO0FBbURwRTtJQUhBOztNQUVFO0lBQ0Y7SUFBeUIsQ0FBQztJQUFiLFNBQVM7UUFqRHJCLGVBQVEsQ0FBQztZQUNOLFNBQVMsRUFBRTtnQkFDUCw0QkFBWTthQUNmO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHdDQUFrQjtnQkFDbEIscUNBQWdCO2dCQUVoQiwrQkFBdUI7Z0JBQ3ZCLDBDQUE0QjtnQkFFNUIsc0NBQTRCO2FBQy9CO1lBQ0QsWUFBWSxFQUFFO2dCQUNWLDRCQUFZO2dCQUVaLFVBQVU7Z0JBQ1Ysb0NBQWdCO2dCQUVoQixVQUFVO2dCQUNWLHNCQUFjO2dCQUNkLHFCQUFhO2dCQUNiLG9CQUFZO2dCQUNaLG9CQUFZO2dCQUVaLFVBQVU7Z0JBQ1YsV0FBVztnQkFDWCw2Q0FBb0I7Z0JBQ3BCLGFBQWE7Z0JBQ2Isa0NBQWU7Z0JBQ2YsNkNBQW9CO2dCQUNwQixpREFBc0I7Z0JBQ3RCLGdDQUFjO2dCQUNkLDhCQUFhO2dCQUNiLGtDQUFlO2dCQUVmLFVBQVU7Z0JBQ1YsaURBQXNCO2FBQ3pCO1lBQ0QsU0FBUyxFQUFFO2dCQUNQLGlEQUFzQjthQUN6QjtZQUNELE9BQU8sRUFBRTtnQkFDTCx1QkFBZ0I7YUFDbkI7U0FDSixDQUFDO1FBQ0Y7O1VBRUU7T0FDVyxTQUFTLENBQUk7SUFBRCxnQkFBQztDQUFBLEFBQTFCLElBQTBCO0FBQWIsOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZSc7XG5cbmltcG9ydCB7IEFwcFJvdXRpbmdNb2R1bGUgfSBmcm9tICcuL2FwcC1yb3V0aW5nLm1vZHVsZSc7XG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tICcuL2FwcC5jb21wb25lbnQnO1xuXG4vLyBVbmNvbW1lbnQgYW5kIGFkZCB0byBOZ01vZHVsZSBpbXBvcnRzIGlmIHlvdSBuZWVkIHRvIHVzZSB0d28td2F5IGJpbmRpbmdcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXMnO1xuXG4vLyBVbmNvbW1lbnQgYW5kIGFkZCB0byBOZ01vZHVsZSBpbXBvcnRzIGlmIHlvdSBuZWVkIHRvIHVzZSB0aGUgSHR0cENsaWVudCB3cmFwcGVyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvaHR0cC1jbGllbnQnO1xuXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSURhdGFGb3JtTW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LXVpLWRhdGFmb3JtL2FuZ3VsYXInO1xuXG5pbXBvcnQgeyBQcm9maWxlQ29tcG9uZW50IH0gZnJvbSAnLi9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50JztcbmltcG9ydCB7IENvbG9yQ29tcG9uZW50LCBCbHVlQ29tcG9uZW50LCBSZWRDb21wb25lbnQsIFJHQkNvbXBvbmVudCB9IGZyb20gJy4vY29sb3InO1xuaW1wb3J0IHsgU2VydmljZVRlc3RDb21wb25lbnQgfSBmcm9tICcuL3NlcnZpY2UtdGVzdC9zZXJ2aWNlLXRlc3QuY29tcG9uZW50JztcbmltcG9ydCB7IFRhYmxlc0NvbXBvbmVudCB9IGZyb20gJy4vZm9vdGJhbGwvdGFibGVzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMZWFndWVUYWJsZUNvbXBvbmVudCB9IGZyb20gJy4vZm9vdGJhbGwvbGVhZ3VlLXRhYmxlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMZWFndWVNYXRjaGVzQ29tcG9uZW50IH0gZnJvbSAnLi9mb290YmFsbC9sZWFndWUtbWF0Y2hlcy5jb21wb25lbnQnO1xuaW1wb3J0IHsgTWF0Y2hDb21wb25lbnQgfSBmcm9tICcuL2Zvb3RiYWxsL21hdGNoLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUZWFtQ29tcG9uZW50IH0gZnJvbSAnLi9mb290YmFsbC90ZWFtLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQbGF5ZXJDb21wb25lbnQgfSBmcm9tICcuL2Zvb3RiYWxsL3BsYXllci5jb21wb25lbnQnO1xuaW1wb3J0IHsgV2l6YXJkUHJvZmlsZUNvbXBvbmVudCB9IGZyb20gJy4vcGx1Z2lucy93aXphcmQtcHJvZmlsZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgT2ZmbGluZUZvb3RiYWxsU2VydmljZSB9IGZyb20gJy4vb2ZmbGluZS1mb290YmFsbC5zZXJ2aWNlJztcblxuQE5nTW9kdWxlKHtcbiAgICBib290c3RyYXA6IFtcbiAgICAgICAgQXBwQ29tcG9uZW50XG4gICAgXSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcbiAgICAgICAgQXBwUm91dGluZ01vZHVsZSxcblxuICAgICAgICBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0SHR0cENsaWVudE1vZHVsZSxcblxuICAgICAgICBOYXRpdmVTY3JpcHRVSURhdGFGb3JtTW9kdWxlXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgQXBwQ29tcG9uZW50LFxuXG4gICAgICAgIC8vTGVzc29uIDFcbiAgICAgICAgUHJvZmlsZUNvbXBvbmVudCxcblxuICAgICAgICAvL0xlc3NvbiAyXG4gICAgICAgIENvbG9yQ29tcG9uZW50LFxuICAgICAgICBCbHVlQ29tcG9uZW50LFxuICAgICAgICBSZWRDb21wb25lbnQsXG4gICAgICAgIFJHQkNvbXBvbmVudCxcblxuICAgICAgICAvL0xlc3NvbiAzXG4gICAgICAgIC8vIFNlcnZpY2VzXG4gICAgICAgIFNlcnZpY2VUZXN0Q29tcG9uZW50LFxuICAgICAgICAvLyBDb21wb25lbnRzXG4gICAgICAgIFRhYmxlc0NvbXBvbmVudCxcbiAgICAgICAgTGVhZ3VlVGFibGVDb21wb25lbnQsXG4gICAgICAgIExlYWd1ZU1hdGNoZXNDb21wb25lbnQsXG4gICAgICAgIE1hdGNoQ29tcG9uZW50LFxuICAgICAgICBUZWFtQ29tcG9uZW50LFxuICAgICAgICBQbGF5ZXJDb21wb25lbnQsXG5cbiAgICAgICAgLy9MZXNzb24gNFxuICAgICAgICBXaXphcmRQcm9maWxlQ29tcG9uZW50LFxuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIE9mZmxpbmVGb290YmFsbFNlcnZpY2VcbiAgICBdLFxuICAgIHNjaGVtYXM6IFtcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxuICAgIF1cbn0pXG4vKlxuUGFzcyB5b3VyIGFwcGxpY2F0aW9uIG1vZHVsZSB0byB0aGUgYm9vdHN0cmFwTW9kdWxlIGZ1bmN0aW9uIGxvY2F0ZWQgaW4gbWFpbi50cyB0byBzdGFydCB5b3VyIGFwcFxuKi9cbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUgeyB9XG4iXX0=