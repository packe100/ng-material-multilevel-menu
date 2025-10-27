"use strict";
(self["webpackChunkng_material_multilevel_menu_angular_project"] = self["webpackChunkng_material_multilevel_menu_angular_project"] || []).push([["src_app_pages_layout-variations_demo-six_version-one_version-one_module_ts"],{

/***/ 5032:
/*!********************************************************************************************!*\
  !*** ./src/app/pages/layout-variations/demo-six/version-one/version-one-routing.module.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VersionOneRoutingModule: () => (/* binding */ VersionOneRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _version_one_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./version-one.component */ 6262);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);




const routes = [{
  path: '',
  component: _version_one_component__WEBPACK_IMPORTED_MODULE_0__.VersionOneComponent
}, {
  path: '',
  redirectTo: '/',
  pathMatch: 'full'
}];
class VersionOneRoutingModule {
  static {
    this.ɵfac = function VersionOneRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || VersionOneRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: VersionOneRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](VersionOneRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 6262:
/*!***************************************************************************************!*\
  !*** ./src/app/pages/layout-variations/demo-six/version-one/version-one.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VersionOneComponent: () => (/* binding */ VersionOneComponent)
/* harmony export */ });
/* harmony import */ var _projects_ng_material_multilevel_menu_src_public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../../../../projects/ng-material-multilevel-menu/src/public_api */ 2995);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _projects_ng_material_multilevel_menu_src_lib_ng_material_multilevel_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../projects/ng-material-multilevel-menu/src/lib/ng-material-multilevel-menu.component */ 2518);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/bidi */ 3680);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 3840);








const _c0 = () => ["/pages/layout-variations/demo-five"];
const _c1 = () => ["/pages/layout-variations/demo-six/version-two"];
function VersionOneComponent_ng_template_2_div_7_mat_icon_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " keyboard_arrow_down ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).item;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@ExpandedLTR", item_r2.expanded ? "yes" : "no");
  }
}
function VersionOneComponent_ng_template_2_div_7_mat_icon_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " keyboard_arrow_down ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).item;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@ExpandedRTL", item_r2.expanded ? "yes" : "no");
  }
}
function VersionOneComponent_ng_template_2_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, VersionOneComponent_ng_template_2_div_7_mat_icon_1_Template, 2, 1, "mat-icon", 13)(2, VersionOneComponent_ng_template_2_div_7_mat_icon_2_Template, 2, 1, "mat-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const configuration_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().configuration;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !configuration_r3.rtlLayout);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", configuration_r3.rtlLayout);
  }
}
function VersionOneComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 6)(1, "div", 7)(2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 10)(5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, VersionOneComponent_ng_template_2_div_7_Template, 3, 2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r2 = ctx.item;
    const configuration_r3 = ctx.configuration;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dir", configuration_r3.rtlLayout ? "rtl" : "ltr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx_r3.getClass(item_r2));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r2.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r2.hasChilden);
  }
}
class VersionOneComponent {
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
          faIcon: 'fas fa-ambulance'
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
      faIcon: 'fas fa-ambulance',
      items: [{
        label: 'Item 2.1',
        faIcon: 'fab fa-accusoft'
      }, {
        label: 'Item 2.2',
        faIcon: 'fab fa-500px'
      }]
    }, {
      label: 'Item 3',
      faIcon: 'fas fa-anchor'
    }];
    this.config = {
      paddingAtStart: false,
      rtlLayout: true,
      customTemplate: true
    };
  }
  ngOnInit() {}
  getClass(item) {
    return {
      [item.faIcon]: true
    };
  }
  selectedItem($event) {
    console.log($event);
  }
  static {
    this.ɵfac = function VersionOneComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || VersionOneComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: VersionOneComponent,
      selectors: [["app-version-one"]],
      decls: 9,
      vars: 6,
      consts: [["listTemplate", ""], [1, "module-demo"], [3, "selectedItem", "items", "configuration"], [1, "switch-demo"], ["mat-button", "", 1, "prev-demo", 3, "routerLink"], ["mat-button", "", 1, "next-demo", 3, "routerLink"], [1, "my-cool-menu-item", 3, "dir"], [1, "title-and-image"], [1, "icon-container"], [3, "ngClass"], [1, "label-container"], ["class", "icon-arrow-container", 4, "ngIf"], [1, "icon-arrow-container"], [4, "ngIf"]],
      template: function VersionOneComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 1)(1, "ng-material-multilevel-menu", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("selectedItem", function VersionOneComponent_Template_ng_material_multilevel_menu_selectedItem_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.selectedItem($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, VersionOneComponent_ng_template_2_Template, 8, 4, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 3)(5, "a", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Previous Demo");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "a", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Next Demo");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("items", ctx.appitems)("configuration", ctx.config);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](4, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](5, _c1));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _projects_ng_material_multilevel_menu_src_lib_ng_material_multilevel_menu_component__WEBPACK_IMPORTED_MODULE_1__.NgMaterialMultilevelMenuComponent, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__.Dir, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatAnchor, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIcon],
      styles: [".module-demo[_ngcontent-%COMP%] {\n    position: relative;\n    margin: auto;\n    width: 600px;\n    margin-top: 20px;\n}\n\n.switch-demo[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: flex-start;\n    justify-content: space-between;\n    padding-top: 10%;\n    margin-bottom: 200px;\n}\n\n\n\n\n.my-cool-menu-item[_ngcontent-%COMP%] {\n    display: flex;\n    padding-left: 10px;\n    padding-right: 10px;\n    border-bottom: solid 1px rgba(0,0,0,.12);\n    height: 48px;\n}\n\n.my-cool-menu-item[_ngcontent-%COMP%]   .title-and-image[_ngcontent-%COMP%] {\n    width: 100%;\n    display: flex;\n    justify-content: flex-start;\n}\n\n.my-cool-menu-item[_ngcontent-%COMP%]   .title-and-image[_ngcontent-%COMP%]   .icon-container[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n}\n\ndiv[dir=rtl][_ngcontent-%COMP%]   .icon-container[_ngcontent-%COMP%] {\n    padding-left: 5px;\n}\n\ndiv[dir=ltr][_ngcontent-%COMP%]   .icon-container[_ngcontent-%COMP%] {\n    padding-right: 5px;\n}\n\n.my-cool-menu-item[_ngcontent-%COMP%]   .title-and-image[_ngcontent-%COMP%]   .label-container[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n}\n\n.my-cool-menu-item[_ngcontent-%COMP%]   .icon-arrow-container[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvbGF5b3V0LXZhcmlhdGlvbnMvZGVtby1zaXgvdmVyc2lvbi1vbmUvdmVyc2lvbi1vbmUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiwwQkFBMEI7SUFDMUIsOEJBQThCO0lBQzlCLGdCQUFnQjtJQUNoQixvQkFBb0I7QUFDeEI7O0FBRUEsaUdBQWlHOztBQUVqRztJQUNJLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLHdDQUF3QztJQUN4QyxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYiwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtBQUN2QiIsInNvdXJjZXNDb250ZW50IjpbIi5tb2R1bGUtZGVtbyB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICB3aWR0aDogNjAwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG4uc3dpdGNoLWRlbW8ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBmbGV4LXN0YXJ0O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgcGFkZGluZy10b3A6IDEwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwMHB4O1xyXG59XHJcblxyXG4vKiBTaW5jZSB5b3UgYXJlIHdyaXRpbmcgeW91ciBvd24gSFRNTCwgaGVuY2UgeW91IGhhdmUgdG8gd3JpdGUgaXQncyBjb3JyZXNwb25kaW5nIENTUyBhcyB3ZWxsLiAqL1xyXG5cclxuLm15LWNvb2wtbWVudS1pdGVtIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IHJnYmEoMCwwLDAsLjEyKTtcclxuICAgIGhlaWdodDogNDhweDtcclxufVxyXG5cclxuLm15LWNvb2wtbWVudS1pdGVtIC50aXRsZS1hbmQtaW1hZ2Uge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG59XHJcblxyXG4ubXktY29vbC1tZW51LWl0ZW0gLnRpdGxlLWFuZC1pbWFnZSAuaWNvbi1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuZGl2W2Rpcj1ydGxdIC5pY29uLWNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxufVxyXG5cclxuZGl2W2Rpcj1sdHJdIC5pY29uLWNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbn1cclxuXHJcbi5teS1jb29sLW1lbnUtaXRlbSAudGl0bGUtYW5kLWltYWdlIC5sYWJlbC1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLm15LWNvb2wtbWVudS1pdGVtIC5pY29uLWFycm93LWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"],
      data: {
        animation: [_projects_ng_material_multilevel_menu_src_public_api__WEBPACK_IMPORTED_MODULE_0__.ExpandedRTL, _projects_ng_material_multilevel_menu_src_public_api__WEBPACK_IMPORTED_MODULE_0__.ExpandedLTR]
      }
    });
  }
}

/***/ }),

/***/ 4569:
/*!************************************************************************************!*\
  !*** ./src/app/pages/layout-variations/demo-six/version-one/version-one.module.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VersionOneModule: () => (/* binding */ VersionOneModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _projects_ng_material_multilevel_menu_src_public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../../../../projects/ng-material-multilevel-menu/src/public_api */ 2995);
/* harmony import */ var _modules_materials_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../../modules/materials.module */ 9590);
/* harmony import */ var _version_one_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./version-one-routing.module */ 5032);
/* harmony import */ var _version_one_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./version-one.component */ 6262);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);






class VersionOneModule {
  static {
    this.ɵfac = function VersionOneModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || VersionOneModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
      type: VersionOneModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _version_one_routing_module__WEBPACK_IMPORTED_MODULE_2__.VersionOneRoutingModule, _projects_ng_material_multilevel_menu_src_public_api__WEBPACK_IMPORTED_MODULE_0__.NgMaterialMultilevelMenuModule, _modules_materials_module__WEBPACK_IMPORTED_MODULE_1__.MaterialsModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](VersionOneModule, {
    declarations: [_version_one_component__WEBPACK_IMPORTED_MODULE_3__.VersionOneComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _version_one_routing_module__WEBPACK_IMPORTED_MODULE_2__.VersionOneRoutingModule, _projects_ng_material_multilevel_menu_src_public_api__WEBPACK_IMPORTED_MODULE_0__.NgMaterialMultilevelMenuModule, _modules_materials_module__WEBPACK_IMPORTED_MODULE_1__.MaterialsModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_pages_layout-variations_demo-six_version-one_version-one_module_ts.js.map