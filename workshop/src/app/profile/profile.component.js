"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ProfileComponent = /** @class */ (function () {
    function ProfileComponent() {
        this.feedback = {
            title: 'Amazing Results',
            score: 5,
            date: new Date(),
            component: 'DataForm',
            note: "This looks really great, \nI was really amazed how little effort it took to implement it.\nI can't wait to see other components",
            test: false
        };
        this.components = [
            'DataForm',
            'SideDrawer',
            'Calendar',
            'ListView',
            'Gauge',
            'AutoComplete'
        ];
        this.profile = {
            name: 'Joe',
            password: 'bl0gs',
            angularPro: false,
            dob: new Date(),
            codingPower: 1
        };
    }
    ProfileComponent.prototype.save = function () {
        console.log(JSON.stringify(this.profile, null, 2));
    };
    ProfileComponent.prototype.clear = function () {
        this.profile.name = '';
        this.profile.password = '';
        this.profile.angularPro = false;
        this.profile.dob = new Date();
        this.profile.codingPower = 1;
    };
    ProfileComponent.prototype.clearForm = function () {
        this.profile = {
            name: '',
            password: '',
            angularPro: false,
            dob: new Date(),
            codingPower: 1
        };
    };
    ProfileComponent = __decorate([
        core_1.Component({
            selector: 'my-profile',
            moduleId: module.id,
            templateUrl: './profile.component.html',
            styleUrls: ['./profile.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], ProfileComponent);
    return ProfileComponent;
}());
exports.ProfileComponent = ProfileComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZmlsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwcm9maWxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwQztBQVExQztJQXVCRTtRQXBCTyxhQUFRLEdBQUc7WUFDaEIsS0FBSyxFQUFFLGlCQUFpQjtZQUN4QixLQUFLLEVBQUUsQ0FBQztZQUNSLElBQUksRUFBRSxJQUFJLElBQUksRUFBRTtZQUNoQixTQUFTLEVBQUUsVUFBVTtZQUNyQixJQUFJLEVBQUUsaUlBRTJCO1lBQ2pDLElBQUksRUFBRSxLQUFLO1NBQ1osQ0FBQTtRQUVNLGVBQVUsR0FBYTtZQUM1QixVQUFVO1lBQ1YsWUFBWTtZQUNaLFVBQVU7WUFDVixVQUFVO1lBQ1YsT0FBTztZQUNQLGNBQWM7U0FDZixDQUFDO1FBR0EsSUFBSSxDQUFDLE9BQU8sR0FBRztZQUNiLElBQUksRUFBRSxLQUFLO1lBQ1gsUUFBUSxFQUFFLE9BQU87WUFDakIsVUFBVSxFQUFFLEtBQUs7WUFDakIsR0FBRyxFQUFFLElBQUksSUFBSSxFQUFFO1lBQ2YsV0FBVyxFQUFFLENBQUM7U0FDZixDQUFBO0lBQ0gsQ0FBQztJQUVELCtCQUFJLEdBQUo7UUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBRUQsZ0NBQUssR0FBTDtRQUNFLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFDM0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7UUFDOUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFFRCxvQ0FBUyxHQUFUO1FBQ0UsSUFBSSxDQUFDLE9BQU8sR0FBRztZQUNiLElBQUksRUFBRSxFQUFFO1lBQ1IsUUFBUSxFQUFFLEVBQUU7WUFDWixVQUFVLEVBQUUsS0FBSztZQUNqQixHQUFHLEVBQUUsSUFBSSxJQUFJLEVBQUU7WUFDZixXQUFXLEVBQUUsQ0FBQztTQUNmLENBQUE7SUFDSCxDQUFDO0lBckRVLGdCQUFnQjtRQU41QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFlBQVk7WUFDdEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSwwQkFBMEI7WUFDdkMsU0FBUyxFQUFFLENBQUMseUJBQXlCLENBQUM7U0FDdkMsQ0FBQzs7T0FDVyxnQkFBZ0IsQ0FzRDVCO0lBQUQsdUJBQUM7Q0FBQSxBQXRERCxJQXNEQztBQXREWSw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbXktcHJvZmlsZScsXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHRlbXBsYXRlVXJsOiAnLi9wcm9maWxlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcHJvZmlsZS5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgUHJvZmlsZUNvbXBvbmVudCB7XG4gIHByb2ZpbGU6IFByb2ZpbGU7XG5cbiAgcHVibGljIGZlZWRiYWNrID0ge1xuICAgIHRpdGxlOiAnQW1hemluZyBSZXN1bHRzJyxcbiAgICBzY29yZTogNSxcbiAgICBkYXRlOiBuZXcgRGF0ZSgpLFxuICAgIGNvbXBvbmVudDogJ0RhdGFGb3JtJyxcbiAgICBub3RlOiBgVGhpcyBsb29rcyByZWFsbHkgZ3JlYXQsIFxuSSB3YXMgcmVhbGx5IGFtYXplZCBob3cgbGl0dGxlIGVmZm9ydCBpdCB0b29rIHRvIGltcGxlbWVudCBpdC5cbkkgY2FuJ3Qgd2FpdCB0byBzZWUgb3RoZXIgY29tcG9uZW50c2AsXG4gICAgdGVzdDogZmFsc2VcbiAgfVxuXG4gIHB1YmxpYyBjb21wb25lbnRzOiBzdHJpbmdbXSA9IFtcbiAgICAnRGF0YUZvcm0nLFxuICAgICdTaWRlRHJhd2VyJyxcbiAgICAnQ2FsZW5kYXInLFxuICAgICdMaXN0VmlldycsXG4gICAgJ0dhdWdlJyxcbiAgICAnQXV0b0NvbXBsZXRlJ1xuICBdO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMucHJvZmlsZSA9IHtcbiAgICAgIG5hbWU6ICdKb2UnLFxuICAgICAgcGFzc3dvcmQ6ICdibDBncycsXG4gICAgICBhbmd1bGFyUHJvOiBmYWxzZSxcbiAgICAgIGRvYjogbmV3IERhdGUoKSxcbiAgICAgIGNvZGluZ1Bvd2VyOiAxXG4gICAgfVxuICB9XG5cbiAgc2F2ZSgpIHtcbiAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh0aGlzLnByb2ZpbGUsIG51bGwsIDIpKTtcbiAgfVxuXG4gIGNsZWFyKCkge1xuICAgIHRoaXMucHJvZmlsZS5uYW1lID0gJyc7XG4gICAgdGhpcy5wcm9maWxlLnBhc3N3b3JkID0gJyc7XG4gICAgdGhpcy5wcm9maWxlLmFuZ3VsYXJQcm8gPSBmYWxzZTtcbiAgICB0aGlzLnByb2ZpbGUuZG9iID0gbmV3IERhdGUoKTtcbiAgICB0aGlzLnByb2ZpbGUuY29kaW5nUG93ZXIgPSAxO1xuICB9XG5cbiAgY2xlYXJGb3JtKCkge1xuICAgIHRoaXMucHJvZmlsZSA9IHtcbiAgICAgIG5hbWU6ICcnLFxuICAgICAgcGFzc3dvcmQ6ICcnLFxuICAgICAgYW5ndWxhclBybzogZmFsc2UsXG4gICAgICBkb2I6IG5ldyBEYXRlKCksXG4gICAgICBjb2RpbmdQb3dlcjogMVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFByb2ZpbGUge1xuICBuYW1lOiBzdHJpbmc7XG4gIHBhc3N3b3JkOiBzdHJpbmc7XG4gIGFuZ3VsYXJQcm86IGJvb2xlYW47XG4gIGRvYjogRGF0ZTtcbiAgY29kaW5nUG93ZXI6IG51bWJlcjtcbn1cbiJdfQ==