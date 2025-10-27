import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ListItemComponent } from './list-item/list-item.component';
import { MaterialsModule } from './materials.module';
import { NgMaterialMultilevelMenuComponent } from './ng-material-multilevel-menu.component';
import { ListItemContentComponent } from './list-item/list-item-content/list-item-content.component';
import { MultilevelMenuService } from './multilevel-menu.service';
import * as i0 from "@angular/core";
export class NgMaterialMultilevelMenuModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: NgMaterialMultilevelMenuModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.2.14", ngImport: i0, type: NgMaterialMultilevelMenuModule, declarations: [NgMaterialMultilevelMenuComponent,
            ListItemComponent,
            ListItemContentComponent], imports: [CommonModule,
            MaterialsModule,
            RouterModule], exports: [NgMaterialMultilevelMenuComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: NgMaterialMultilevelMenuModule, providers: [MultilevelMenuService], imports: [CommonModule,
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
                    providers: [MultilevelMenuService],
                    exports: [NgMaterialMultilevelMenuComponent]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctbWF0ZXJpYWwtbXVsdGlsZXZlbC1tZW51Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25nLW1hdGVyaWFsLW11bHRpbGV2ZWwtbWVudS9zcmMvbGliL25nLW1hdGVyaWFsLW11bHRpbGV2ZWwtbWVudS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUM1RixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwyREFBMkQsQ0FBQztBQUNyRyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQzs7QUFnQmxFLE1BQU0sT0FBTyw4QkFBOEI7K0dBQTlCLDhCQUE4QjtnSEFBOUIsOEJBQThCLGlCQVB2QyxpQ0FBaUM7WUFDakMsaUJBQWlCO1lBQ2pCLHdCQUF3QixhQVB4QixZQUFZO1lBQ1osZUFBZTtZQUNmLFlBQVksYUFRSixpQ0FBaUM7Z0hBRWhDLDhCQUE4QixhQUg5QixDQUFDLHFCQUFxQixDQUFDLFlBVGhDLFlBQVk7WUFDWixlQUFlO1lBQ2YsWUFBWTs7NEZBVUgsOEJBQThCO2tCQWQxQyxRQUFRO21CQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLGVBQWU7d0JBQ2YsWUFBWTtxQkFDYjtvQkFDRCxZQUFZLEVBQUU7d0JBQ1osaUNBQWlDO3dCQUNqQyxpQkFBaUI7d0JBQ2pCLHdCQUF3QjtxQkFDekI7b0JBQ0QsU0FBUyxFQUFFLENBQUMscUJBQXFCLENBQUM7b0JBQ2xDLE9BQU8sRUFBRSxDQUFDLGlDQUFpQyxDQUFDO2lCQUM3QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcblxyXG5pbXBvcnQgeyBMaXN0SXRlbUNvbXBvbmVudCB9IGZyb20gJy4vbGlzdC1pdGVtL2xpc3QtaXRlbS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBNYXRlcmlhbHNNb2R1bGUgfSBmcm9tICcuL21hdGVyaWFscy5tb2R1bGUnO1xyXG5pbXBvcnQgeyBOZ01hdGVyaWFsTXVsdGlsZXZlbE1lbnVDb21wb25lbnQgfSBmcm9tICcuL25nLW1hdGVyaWFsLW11bHRpbGV2ZWwtbWVudS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBMaXN0SXRlbUNvbnRlbnRDb21wb25lbnQgfSBmcm9tICcuL2xpc3QtaXRlbS9saXN0LWl0ZW0tY29udGVudC9saXN0LWl0ZW0tY29udGVudC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBNdWx0aWxldmVsTWVudVNlcnZpY2UgfSBmcm9tICcuL211bHRpbGV2ZWwtbWVudS5zZXJ2aWNlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1xyXG4gICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgTWF0ZXJpYWxzTW9kdWxlLFxyXG4gICAgUm91dGVyTW9kdWxlLFxyXG4gIF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBOZ01hdGVyaWFsTXVsdGlsZXZlbE1lbnVDb21wb25lbnQsXHJcbiAgICBMaXN0SXRlbUNvbXBvbmVudCxcclxuICAgIExpc3RJdGVtQ29udGVudENvbXBvbmVudCxcclxuICBdLFxyXG4gIHByb3ZpZGVyczogW011bHRpbGV2ZWxNZW51U2VydmljZV0sXHJcbiAgZXhwb3J0czogW05nTWF0ZXJpYWxNdWx0aWxldmVsTWVudUNvbXBvbmVudF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE5nTWF0ZXJpYWxNdWx0aWxldmVsTWVudU1vZHVsZSB7fVxyXG4iXX0=