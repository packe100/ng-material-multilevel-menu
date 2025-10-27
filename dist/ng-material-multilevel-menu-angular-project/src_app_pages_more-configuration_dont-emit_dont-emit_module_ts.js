"use strict";
(self["webpackChunkng_material_multilevel_menu_angular_project"] = self["webpackChunkng_material_multilevel_menu_angular_project"] || []).push([["src_app_pages_more-configuration_dont-emit_dont-emit_module_ts"],{

/***/ 2931:
/*!********************************************************************************!*\
  !*** ./src/app/pages/more-configuration/dont-emit/dont-emit-routing.module.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DontEmitRoutingModule: () => (/* binding */ DontEmitRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _dont_emit_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dont-emit.component */ 3774);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);




const routes = [{
  path: '',
  component: _dont_emit_component__WEBPACK_IMPORTED_MODULE_0__.DontEmitComponent
}, {
  path: '',
  redirectTo: '/',
  pathMatch: 'full'
}];
class DontEmitRoutingModule {
  static {
    this.ɵfac = function DontEmitRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || DontEmitRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: DontEmitRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](DontEmitRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 3774:
/*!***************************************************************************!*\
  !*** ./src/app/pages/more-configuration/dont-emit/dont-emit.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DontEmitComponent: () => (/* binding */ DontEmitComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ 4175);



const _c0 = () => ["/pages/more-configuration/expand-collapse"];
const _c1 = () => ["/pages/more-configuration/select-by-id"];
class DontEmitComponent {
  constructor() {
    this.codeSnippet = `
    {
      label: 'Changing Colours',
      link: '/demo two',
      icon: 'favorite_border',
      activeIcon: 'favorite',
      dontEmit: true,
      navigationExtras: {
          queryParams: { order: 'popular', filter: 'new' },
      }
  }`;
  }
  ngOnInit() {}
  static {
    this.ɵfac = function DontEmitComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || DontEmitComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DontEmitComponent,
      selectors: [["app-dont-emit"]],
      decls: 30,
      vars: 5,
      consts: [[1, "module-demo"], ["href", "https://github.com/ShankyTiwari/ng-material-multilevel-menu/issues/133"], [1, "switch-demo"], ["mat-button", "", 1, "prev-demo", 3, "routerLink"], ["mat-button", "", 1, "next-demo", 3, "routerLink"]],
      template: function DontEmitComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " By default, the method ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "code")(3, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "selectedItem()");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " will emit the node which is currently selected either via routing or by a click. But there is an option to stop listening to this event if you want. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " You can add one more property called ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "code")(9, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "dontEmit");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " in the node object as shown below.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "pre");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " This property will apply to the current node only, it won't apply to its children nodes. The default behavior will be the same if you won't provide the ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "code")(17, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "dontEmit");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " property. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " See ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "#133");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " for more information.\n");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 2)(26, "a", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Previous Demo");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Next Demo");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("        ", ctx.codeSnippet, "\n    ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c1));
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink, _angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatAnchor],
      styles: [".module-demo[_ngcontent-%COMP%] {\n    position: relative;\n    margin: auto;\n    width: 600px;\n    padding: 5%;\n    line-height: 33px;\n}\n\nh2[_ngcontent-%COMP%] {\n    margin-top: 2%;\n    margin-bottom: 2%;\n}\ncode[_ngcontent-%COMP%] {\n    font-size: 15px;\n    background: #c4c4c457;\n    padding: 5px;\n}\n\n.switch-demo[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: flex-start;\n    justify-content: space-between;\n    padding-top: 10%;\n    padding-bottom: 10%;\n    width: 600px;\n    margin: auto;\n    \n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvbW9yZS1jb25maWd1cmF0aW9uL2RvbnQtZW1pdC9kb250LWVtaXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osWUFBWTtJQUNaLFdBQVc7SUFDWCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YscUJBQXFCO0lBQ3JCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsMEJBQTBCO0lBQzFCLDhCQUE4QjtJQUM5QixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixZQUFZOztBQUVoQiIsInNvdXJjZXNDb250ZW50IjpbIi5tb2R1bGUtZGVtbyB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICB3aWR0aDogNjAwcHg7XHJcbiAgICBwYWRkaW5nOiA1JTtcclxuICAgIGxpbmUtaGVpZ2h0OiAzM3B4O1xyXG59XHJcblxyXG5oMiB7XHJcbiAgICBtYXJnaW4tdG9wOiAyJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDIlO1xyXG59XHJcbmNvZGUge1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgYmFja2dyb3VuZDogI2M0YzRjNDU3O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG59XHJcblxyXG4uc3dpdGNoLWRlbW8ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBmbGV4LXN0YXJ0O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgcGFkZGluZy10b3A6IDEwJTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMCU7XHJcbiAgICB3aWR0aDogNjAwcHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 5313:
/*!************************************************************************!*\
  !*** ./src/app/pages/more-configuration/dont-emit/dont-emit.module.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DontEmitModule: () => (/* binding */ DontEmitModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _dont_emit_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dont-emit-routing.module */ 2931);
/* harmony import */ var _dont_emit_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dont-emit.component */ 3774);
/* harmony import */ var _modules_materials_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../modules/materials.module */ 9590);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);





class DontEmitModule {
  static {
    this.ɵfac = function DontEmitModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || DontEmitModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
      type: DontEmitModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _dont_emit_routing_module__WEBPACK_IMPORTED_MODULE_0__.DontEmitRoutingModule, _modules_materials_module__WEBPACK_IMPORTED_MODULE_2__.MaterialsModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](DontEmitModule, {
    declarations: [_dont_emit_component__WEBPACK_IMPORTED_MODULE_1__.DontEmitComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _dont_emit_routing_module__WEBPACK_IMPORTED_MODULE_0__.DontEmitRoutingModule, _modules_materials_module__WEBPACK_IMPORTED_MODULE_2__.MaterialsModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_pages_more-configuration_dont-emit_dont-emit_module_ts.js.map