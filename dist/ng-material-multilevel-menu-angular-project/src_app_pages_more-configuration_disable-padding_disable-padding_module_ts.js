"use strict";
(self["webpackChunkng_material_multilevel_menu_angular_project"] = self["webpackChunkng_material_multilevel_menu_angular_project"] || []).push([["src_app_pages_more-configuration_disable-padding_disable-padding_module_ts"],{

/***/ 7436:
/*!********************************************************************************************!*\
  !*** ./src/app/pages/more-configuration/disable-padding/disable-padding-routing.module.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DisablePaddingRoutingModule: () => (/* binding */ DisablePaddingRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _disable_padding_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./disable-padding.component */ 3994);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);




const routes = [{
  path: '',
  component: _disable_padding_component__WEBPACK_IMPORTED_MODULE_0__.DisablePaddingComponent
}, {
  path: '',
  redirectTo: '/',
  pathMatch: 'full'
}];
class DisablePaddingRoutingModule {
  static {
    this.ɵfac = function DisablePaddingRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || DisablePaddingRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: DisablePaddingRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](DisablePaddingRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 3994:
/*!***************************************************************************************!*\
  !*** ./src/app/pages/more-configuration/disable-padding/disable-padding.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DisablePaddingComponent: () => (/* binding */ DisablePaddingComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _projects_ng_material_multilevel_menu_src_lib_ng_material_multilevel_menu_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../projects/ng-material-multilevel-menu/src/lib/ng-material-multilevel-menu.component */ 2518);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 4175);




const _c0 = () => ["/pages/layout-variations/demo-six/version-three"];
const _c1 = () => ["/pages/more-configuration/disable-routing"];
class DisablePaddingComponent {
  constructor() {
    this.appitems = [{
      label: 'Item 1 (with Font awesome icon)',
      faIcon: 'fab fa-500px',
      items: [{
        label: 'Item 1.1',
        faIcon: 'fab fa-accusoft'
      }, {
        label: 'Item 1.2',
        faIcon: 'fab fa-accessible-icon',
        items: [{
          label: 'Item 1.2.1',
          faIcon: 'fas fa-allergies'
        }, {
          label: 'Item 1.2.2',
          faIcon: 'fas fa-ambulance',
          items: [{
            label: 'Item 1.2.2.1',
            faIcon: 'fas fa-anchor'
          }]
        }]
      }]
    }, {
      label: 'Item 2',
      icon: 'alarm',
      items: [{
        label: 'Item 2.1',
        icon: 'favorite'
      }, {
        label: 'Item 2.2',
        icon: 'favorite_border'
      }]
    }, {
      label: 'Item 3',
      icon: 'offline_pin'
    }, {
      label: 'Item 4',
      icon: 'star_rate',
      hidden: true
    }];
    this.config = {
      paddingAtStart: false
    };
  }
  ngOnInit() {}
  selectedItem($event) {
    console.log($event);
  }
  static {
    this.ɵfac = function DisablePaddingComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || DisablePaddingComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: DisablePaddingComponent,
      selectors: [["app-disable-padding"]],
      decls: 9,
      vars: 6,
      consts: [[1, "module-demo"], [3, "selectedItem", "configuration", "items"], [1, "switch-demo"], ["mat-button", "", 1, "prev-demo", 3, "routerLink"], ["mat-button", "", 1, "next-demo", 3, "routerLink"]],
      template: function DisablePaddingComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Enable/Disable Padding of the Menu");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ng-material-multilevel-menu", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("selectedItem", function DisablePaddingComponent_Template_ng_material_multilevel_menu_selectedItem_3_listener($event) {
            return ctx.selectedItem($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2)(5, "a", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Previous Demo");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "a", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Next Demo");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("configuration", ctx.config)("items", ctx.appitems);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](4, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](5, _c1));
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _projects_ng_material_multilevel_menu_src_lib_ng_material_multilevel_menu_component__WEBPACK_IMPORTED_MODULE_0__.NgMaterialMultilevelMenuComponent, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatAnchor],
      styles: [".module-demo[_ngcontent-%COMP%] {\n  position: relative;\n  margin: auto;\n  width: 600px;\n}\n\nh2[_ngcontent-%COMP%] {\n  margin-top: 2%;\n  margin-bottom: 2%;\n}\n\n.switch-demo[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: flex-start;\n  justify-content: space-between;\n  padding-top: 10%;\n  width: 600px;\n  margin: auto;\n}\n.module-demo[_ngcontent-%COMP%] {\n  position: relative;\n  margin: auto;\n  width: 600px;\n}\n\nh2[_ngcontent-%COMP%] {\n  margin-top: 2%;\n  margin-bottom: 2%;\n}\n\n.switch-demo[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: flex-start;\n  justify-content: space-between;\n  padding-top: 10%;\n  width: 600px;\n  margin: auto;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvbW9yZS1jb25maWd1cmF0aW9uL2Rpc2FibGUtcGFkZGluZy9kaXNhYmxlLXBhZGRpbmcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osWUFBWTtBQUNkOztBQUVBO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiwwQkFBMEI7RUFDMUIsOEJBQThCO0VBQzlCLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osWUFBWTtBQUNkO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsMEJBQTBCO0VBQzFCLDhCQUE4QjtFQUM5QixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLFlBQVk7QUFDZCIsInNvdXJjZXNDb250ZW50IjpbIi5tb2R1bGUtZGVtbyB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICB3aWR0aDogNjAwcHg7XHJcbn1cclxuXHJcbmgyIHtcclxuICBtYXJnaW4tdG9wOiAyJTtcclxuICBtYXJnaW4tYm90dG9tOiAyJTtcclxufVxyXG5cclxuLnN3aXRjaC1kZW1vIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBmbGV4LXN0YXJ0O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBwYWRkaW5nLXRvcDogMTAlO1xyXG4gIHdpZHRoOiA2MDBweDtcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxuLm1vZHVsZS1kZW1vIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHdpZHRoOiA2MDBweDtcclxufVxyXG5cclxuaDIge1xyXG4gIG1hcmdpbi10b3A6IDIlO1xyXG4gIG1hcmdpbi1ib3R0b206IDIlO1xyXG59XHJcblxyXG4uc3dpdGNoLWRlbW8ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGZsZXgtc3RhcnQ7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIHBhZGRpbmctdG9wOiAxMCU7XHJcbiAgd2lkdGg6IDYwMHB4O1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 717:
/*!************************************************************************************!*\
  !*** ./src/app/pages/more-configuration/disable-padding/disable-padding.module.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DisablePaddingModule: () => (/* binding */ DisablePaddingModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _projects_ng_material_multilevel_menu_src_public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../../../projects/ng-material-multilevel-menu/src/public_api */ 2995);
/* harmony import */ var _modules_materials_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../modules/materials.module */ 9590);
/* harmony import */ var _disable_padding_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./disable-padding-routing.module */ 7436);
/* harmony import */ var _disable_padding_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./disable-padding.component */ 3994);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);






class DisablePaddingModule {
  static {
    this.ɵfac = function DisablePaddingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || DisablePaddingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
      type: DisablePaddingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _disable_padding_routing_module__WEBPACK_IMPORTED_MODULE_2__.DisablePaddingRoutingModule, _projects_ng_material_multilevel_menu_src_public_api__WEBPACK_IMPORTED_MODULE_0__.NgMaterialMultilevelMenuModule, _modules_materials_module__WEBPACK_IMPORTED_MODULE_1__.MaterialsModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](DisablePaddingModule, {
    declarations: [_disable_padding_component__WEBPACK_IMPORTED_MODULE_3__.DisablePaddingComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _disable_padding_routing_module__WEBPACK_IMPORTED_MODULE_2__.DisablePaddingRoutingModule, _projects_ng_material_multilevel_menu_src_public_api__WEBPACK_IMPORTED_MODULE_0__.NgMaterialMultilevelMenuModule, _modules_materials_module__WEBPACK_IMPORTED_MODULE_1__.MaterialsModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_pages_more-configuration_disable-padding_disable-padding_module_ts.js.map