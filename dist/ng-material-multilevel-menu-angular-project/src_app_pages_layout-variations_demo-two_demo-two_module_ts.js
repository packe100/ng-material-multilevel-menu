"use strict";
(self["webpackChunkng_material_multilevel_menu_angular_project"] = self["webpackChunkng_material_multilevel_menu_angular_project"] || []).push([["src_app_pages_layout-variations_demo-two_demo-two_module_ts"],{

/***/ 8145:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/layout-variations/demo-two/demo-two-routing.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DemoTwoRoutingModule: () => (/* binding */ DemoTwoRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _demo_two_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./demo-two.component */ 3685);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);




const routes = [{
  path: '',
  component: _demo_two_component__WEBPACK_IMPORTED_MODULE_0__.DemoTwoComponent
}, {
  path: '',
  redirectTo: '/',
  pathMatch: 'full'
}];
class DemoTwoRoutingModule {
  static {
    this.ɵfac = function DemoTwoRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || DemoTwoRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: DemoTwoRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](DemoTwoRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 3685:
/*!************************************************************************!*\
  !*** ./src/app/pages/layout-variations/demo-two/demo-two.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DemoTwoComponent: () => (/* binding */ DemoTwoComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _projects_ng_material_multilevel_menu_src_lib_ng_material_multilevel_menu_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../projects/ng-material-multilevel-menu/src/lib/ng-material-multilevel-menu.component */ 2518);




const _c0 = () => ["/pages/layout-variations/demo-one"];
const _c1 = () => ["/pages/layout-variations/demo-three"];
class DemoTwoComponent {
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
      paddingAtStart: true,
      classname: 'my-custom-class',
      listBackgroundColor: `rgb(208, 241, 239)`,
      fontColor: `rgb(8, 54, 71)`,
      backgroundColor: `rgb(208, 241, 239)`,
      selectedListFontColor: `red`
    };
  }
  ngOnInit() {}
  selectedItem($event) {
    console.log($event);
  }
  static {
    this.ɵfac = function DemoTwoComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || DemoTwoComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: DemoTwoComponent,
      selectors: [["app-demo-two"]],
      decls: 9,
      vars: 6,
      consts: [[1, "module-demo"], [3, "selectedItem", "configuration", "items"], [1, "switch-demo"], ["mat-button", "", 1, "prev-demo", 3, "routerLink"], ["mat-button", "", 1, "next-demo", 3, "routerLink"]],
      template: function DemoTwoComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Change the colour of selected Items");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ng-material-multilevel-menu", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("selectedItem", function DemoTwoComponent_Template_ng_material_multilevel_menu_selectedItem_3_listener($event) {
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
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatAnchor, _projects_ng_material_multilevel_menu_src_lib_ng_material_multilevel_menu_component__WEBPACK_IMPORTED_MODULE_0__.NgMaterialMultilevelMenuComponent],
      styles: [".module-demo[_ngcontent-%COMP%] {\n  position: relative;\n  margin: auto;\n  width: 600px;\n}\n\nh2[_ngcontent-%COMP%] {\n  margin-top: 2%;\n  margin-bottom: 2%;\n}\n\n.switch-demo[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: flex-start;\n  justify-content: space-between;\n  padding-top: 10%;\n  width: 600px;\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvbGF5b3V0LXZhcmlhdGlvbnMvZGVtby10d28vZGVtby10d28uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osWUFBWTtBQUNkOztBQUVBO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiwwQkFBMEI7RUFDMUIsOEJBQThCO0VBQzlCLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osWUFBWTtBQUNkIiwic291cmNlc0NvbnRlbnQiOlsiLm1vZHVsZS1kZW1vIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHdpZHRoOiA2MDBweDtcclxufVxyXG5cclxuaDIge1xyXG4gIG1hcmdpbi10b3A6IDIlO1xyXG4gIG1hcmdpbi1ib3R0b206IDIlO1xyXG59XHJcblxyXG4uc3dpdGNoLWRlbW8ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGZsZXgtc3RhcnQ7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIHBhZGRpbmctdG9wOiAxMCU7XHJcbiAgd2lkdGg6IDYwMHB4O1xyXG4gIG1hcmdpbjogYXV0bztcclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 5176:
/*!*********************************************************************!*\
  !*** ./src/app/pages/layout-variations/demo-two/demo-two.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DemoTwoModule: () => (/* binding */ DemoTwoModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _projects_ng_material_multilevel_menu_src_public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../../../projects/ng-material-multilevel-menu/src/public_api */ 2995);
/* harmony import */ var _modules_materials_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../modules/materials.module */ 9590);
/* harmony import */ var _demo_two_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./demo-two-routing.module */ 8145);
/* harmony import */ var _demo_two_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./demo-two.component */ 3685);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);






class DemoTwoModule {
  static {
    this.ɵfac = function DemoTwoModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || DemoTwoModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
      type: DemoTwoModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _demo_two_routing_module__WEBPACK_IMPORTED_MODULE_2__.DemoTwoRoutingModule, _modules_materials_module__WEBPACK_IMPORTED_MODULE_1__.MaterialsModule, _projects_ng_material_multilevel_menu_src_public_api__WEBPACK_IMPORTED_MODULE_0__.NgMaterialMultilevelMenuModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](DemoTwoModule, {
    declarations: [_demo_two_component__WEBPACK_IMPORTED_MODULE_3__.DemoTwoComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _demo_two_routing_module__WEBPACK_IMPORTED_MODULE_2__.DemoTwoRoutingModule, _modules_materials_module__WEBPACK_IMPORTED_MODULE_1__.MaterialsModule, _projects_ng_material_multilevel_menu_src_public_api__WEBPACK_IMPORTED_MODULE_0__.NgMaterialMultilevelMenuModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_pages_layout-variations_demo-two_demo-two_module_ts.js.map