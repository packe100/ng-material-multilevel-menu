"use strict";
(self["webpackChunkng_material_multilevel_menu_angular_project"] = self["webpackChunkng_material_multilevel_menu_angular_project"] || []).push([["src_app_pages_more-configuration_disable-routing_disable-routing_module_ts"],{

/***/ 4824:
/*!********************************************************************************************!*\
  !*** ./src/app/pages/more-configuration/disable-routing/disable-routing-routing.module.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DisableRoutingRoutingModule: () => (/* binding */ DisableRoutingRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _disable_routing_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./disable-routing.component */ 1622);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);




const routes = [{
  path: '',
  component: _disable_routing_component__WEBPACK_IMPORTED_MODULE_0__.DisableRoutingComponent
}, {
  path: '',
  redirectTo: '/',
  pathMatch: 'full'
}];
class DisableRoutingRoutingModule {
  static {
    this.ɵfac = function DisableRoutingRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || DisableRoutingRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: DisableRoutingRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](DisableRoutingRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 1622:
/*!***************************************************************************************!*\
  !*** ./src/app/pages/more-configuration/disable-routing/disable-routing.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DisableRoutingComponent: () => (/* binding */ DisableRoutingComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ 4175);



const _c0 = () => ["/pages/more-configuration/disable-padding"];
const _c1 = () => ["/pages/more-configuration/expand-collapse"];
class DisableRoutingComponent {
  constructor() {}
  ngOnInit() {}
  static {
    this.ɵfac = function DisableRoutingComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || DisableRoutingComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DisableRoutingComponent,
      selectors: [["app-disable-routing"]],
      decls: 14,
      vars: 4,
      consts: [[1, "module-demo"], [1, "switch-demo"], ["mat-button", "", 1, "prev-demo", 3, "routerLink"], ["mat-button", "", 1, "next-demo", 3, "routerLink"]],
      template: function DisableRoutingComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " By default, Routing is not enabled. You need to enable it by Passing the ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "code")(3, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "interfaceWithRoute");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " option in Configurations. You can refer this in ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "app.component.ts");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " file.\n");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 1)(10, "a", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Previous Demo");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Next Demo");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c1));
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink, _angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatAnchor],
      styles: [".module-demo[_ngcontent-%COMP%] {\n    position: relative;\n    margin: auto;\n    width: 600px;\n    padding: 5%;\n    line-height: 33px;\n}\n\nh2[_ngcontent-%COMP%] {\n  margin-top: 2%;\n  margin-bottom: 2%;\n}\ncode[_ngcontent-%COMP%] {\n    font-size: 15px;\n    background: #c4c4c457;\n    padding: 5px;\n}\n\n.switch-demo[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: flex-start;\n  justify-content: space-between;\n  padding-top: 10%;\n  width: 600px;\n  margin: auto;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvbW9yZS1jb25maWd1cmF0aW9uL2Rpc2FibGUtcm91dGluZy9kaXNhYmxlLXJvdXRpbmcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osWUFBWTtJQUNaLFdBQVc7SUFDWCxpQkFBaUI7QUFDckI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0FBQ25CO0FBQ0E7SUFDSSxlQUFlO0lBQ2YscUJBQXFCO0lBQ3JCLFlBQVk7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsMEJBQTBCO0VBQzFCLDhCQUE4QjtFQUM5QixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLFlBQVk7QUFDZCIsInNvdXJjZXNDb250ZW50IjpbIi5tb2R1bGUtZGVtbyB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICB3aWR0aDogNjAwcHg7XHJcbiAgICBwYWRkaW5nOiA1JTtcclxuICAgIGxpbmUtaGVpZ2h0OiAzM3B4O1xyXG59XHJcblxyXG5oMiB7XHJcbiAgbWFyZ2luLXRvcDogMiU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMiU7XHJcbn1cclxuY29kZSB7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjYzRjNGM0NTc7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuXHJcbi5zd2l0Y2gtZGVtbyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogZmxleC1zdGFydDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgcGFkZGluZy10b3A6IDEwJTtcclxuICB3aWR0aDogNjAwcHg7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 3689:
/*!************************************************************************************!*\
  !*** ./src/app/pages/more-configuration/disable-routing/disable-routing.module.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DisableRoutingModule: () => (/* binding */ DisableRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _projects_ng_material_multilevel_menu_src_public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../../../projects/ng-material-multilevel-menu/src/public_api */ 2995);
/* harmony import */ var _modules_materials_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../modules/materials.module */ 9590);
/* harmony import */ var _disable_routing_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./disable-routing-routing.module */ 4824);
/* harmony import */ var _disable_routing_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./disable-routing.component */ 1622);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);






class DisableRoutingModule {
  static {
    this.ɵfac = function DisableRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || DisableRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
      type: DisableRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _disable_routing_routing_module__WEBPACK_IMPORTED_MODULE_2__.DisableRoutingRoutingModule, _projects_ng_material_multilevel_menu_src_public_api__WEBPACK_IMPORTED_MODULE_0__.NgMaterialMultilevelMenuModule, _modules_materials_module__WEBPACK_IMPORTED_MODULE_1__.MaterialsModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](DisableRoutingModule, {
    declarations: [_disable_routing_component__WEBPACK_IMPORTED_MODULE_3__.DisableRoutingComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _disable_routing_routing_module__WEBPACK_IMPORTED_MODULE_2__.DisableRoutingRoutingModule, _projects_ng_material_multilevel_menu_src_public_api__WEBPACK_IMPORTED_MODULE_0__.NgMaterialMultilevelMenuModule, _modules_materials_module__WEBPACK_IMPORTED_MODULE_1__.MaterialsModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_pages_more-configuration_disable-routing_disable-routing_module_ts.js.map