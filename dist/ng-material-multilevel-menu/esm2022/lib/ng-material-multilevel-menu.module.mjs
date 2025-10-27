import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ListItemComponent } from './list-item/list-item.component';
import { MaterialsModule } from './materials.module';
import { NgMaterialMultilevelMenuComponent } from './ng-material-multilevel-menu.component';
import { ListItemContentComponent } from './list-item/list-item-content/list-item-content.component';
import * as i0 from "@angular/core";
export class NgMaterialMultilevelMenuModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: NgMaterialMultilevelMenuModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.2.14", ngImport: i0, type: NgMaterialMultilevelMenuModule, declarations: [NgMaterialMultilevelMenuComponent,
            ListItemComponent,
            ListItemContentComponent], imports: [CommonModule,
            MaterialsModule,
            RouterModule], exports: [NgMaterialMultilevelMenuComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: NgMaterialMultilevelMenuModule, imports: [CommonModule,
            MaterialsModule,
            RouterModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: NgMaterialMultilevelMenuModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        MaterialsModule,
                        RouterModule,
                    ],
                    declarations: [
                        NgMaterialMultilevelMenuComponent,
                        ListItemComponent,
                        ListItemContentComponent,
                    ],
                    exports: [NgMaterialMultilevelMenuComponent]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctbWF0ZXJpYWwtbXVsdGlsZXZlbC1tZW51Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25nLW1hdGVyaWFsLW11bHRpbGV2ZWwtbWVudS9zcmMvbGliL25nLW1hdGVyaWFsLW11bHRpbGV2ZWwtbWVudS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUM1RixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwyREFBMkQsQ0FBQzs7QUFlckcsTUFBTSxPQUFPLDhCQUE4QjsrR0FBOUIsOEJBQThCO2dIQUE5Qiw4QkFBOEIsaUJBTnZDLGlDQUFpQztZQUNqQyxpQkFBaUI7WUFDakIsd0JBQXdCLGFBUHhCLFlBQVk7WUFDWixlQUFlO1lBQ2YsWUFBWSxhQU9KLGlDQUFpQztnSEFFaEMsOEJBQThCLFlBWHZDLFlBQVk7WUFDWixlQUFlO1lBQ2YsWUFBWTs7NEZBU0gsOEJBQThCO2tCQWIxQyxRQUFRO21CQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLGVBQWU7d0JBQ2YsWUFBWTtxQkFDYjtvQkFDRCxZQUFZLEVBQUU7d0JBQ1osaUNBQWlDO3dCQUNqQyxpQkFBaUI7d0JBQ2pCLHdCQUF3QjtxQkFDekI7b0JBQ0QsT0FBTyxFQUFFLENBQUMsaUNBQWlDLENBQUM7aUJBQzdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuXHJcbmltcG9ydCB7IExpc3RJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9saXN0LWl0ZW0vbGlzdC1pdGVtLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE1hdGVyaWFsc01vZHVsZSB9IGZyb20gJy4vbWF0ZXJpYWxzLm1vZHVsZSc7XHJcbmltcG9ydCB7IE5nTWF0ZXJpYWxNdWx0aWxldmVsTWVudUNvbXBvbmVudCB9IGZyb20gJy4vbmctbWF0ZXJpYWwtbXVsdGlsZXZlbC1tZW51LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IExpc3RJdGVtQ29udGVudENvbXBvbmVudCB9IGZyb20gJy4vbGlzdC1pdGVtL2xpc3QtaXRlbS1jb250ZW50L2xpc3QtaXRlbS1jb250ZW50LmNvbXBvbmVudCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZSxcclxuICAgIE1hdGVyaWFsc01vZHVsZSxcclxuICAgIFJvdXRlck1vZHVsZSxcclxuICBdLFxyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgTmdNYXRlcmlhbE11bHRpbGV2ZWxNZW51Q29tcG9uZW50LFxyXG4gICAgTGlzdEl0ZW1Db21wb25lbnQsXHJcbiAgICBMaXN0SXRlbUNvbnRlbnRDb21wb25lbnQsXHJcbiAgXSxcclxuICBleHBvcnRzOiBbTmdNYXRlcmlhbE11bHRpbGV2ZWxNZW51Q29tcG9uZW50XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmdNYXRlcmlhbE11bHRpbGV2ZWxNZW51TW9kdWxlIHt9XHJcbiJdfQ==