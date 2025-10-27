"use strict";
(self["webpackChunkng_material_multilevel_menu_angular_project"] = self["webpackChunkng_material_multilevel_menu_angular_project"] || []).push([["src_app_pages_layout-variations_demo-one_demo-one_module_ts"],{

/***/ 9981:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/layout-variations/demo-one/demo-one-routing.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DemoOneRoutingModule: () => (/* binding */ DemoOneRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _demo_one_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./demo-one.component */ 9377);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);




const routes = [{
  path: '',
  component: _demo_one_component__WEBPACK_IMPORTED_MODULE_0__.DemoOneComponent
}, {
  path: '',
  redirectTo: '/',
  pathMatch: 'full'
}];
class DemoOneRoutingModule {
  static {
    this.ɵfac = function DemoOneRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || DemoOneRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: DemoOneRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](DemoOneRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 9377:
/*!************************************************************************!*\
  !*** ./src/app/pages/layout-variations/demo-one/demo-one.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DemoOneComponent: () => (/* binding */ DemoOneComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _projects_ng_material_multilevel_menu_src_lib_ng_material_multilevel_menu_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../projects/ng-material-multilevel-menu/src/lib/ng-material-multilevel-menu.component */ 2518);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 4175);




const _c0 = () => ["/"];
const _c1 = () => ["/pages/layout-variations/demo-two"];
class DemoOneComponent {
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
  }
  ngOnInit() {}
  selectedItem($event) {
    console.log($event);
  }
  static {
    this.ɵfac = function DemoOneComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || DemoOneComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: DemoOneComponent,
      selectors: [["app-demo-one"]],
      decls: 9,
      vars: 5,
      consts: [[1, "module-demo"], [3, "selectedItem", "items"], [1, "switch-demo"], ["mat-button", "", 1, "prev-demo", 3, "routerLink"], ["mat-button", "", 1, "next-demo", 3, "routerLink"]],
      template: function DemoOneComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Default Demo");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ng-material-multilevel-menu", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("selectedItem", function DemoOneComponent_Template_ng_material_multilevel_menu_selectedItem_3_listener($event) {
            return ctx.selectedItem($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2)(5, "a", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Home");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "a", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Next Demo");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("items", ctx.appitems);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](3, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](4, _c1));
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _projects_ng_material_multilevel_menu_src_lib_ng_material_multilevel_menu_component__WEBPACK_IMPORTED_MODULE_0__.NgMaterialMultilevelMenuComponent, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatAnchor],
      styles: [".module-demo[_ngcontent-%COMP%] {\n  position: relative;\n  margin: auto;\n  width: 600px;\n}\nh2[_ngcontent-%COMP%] {\n    margin-top: 2%;\n    margin-bottom: 2%;\n}\n\n.switch-demo[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: flex-start;\n  justify-content: space-between;\n  padding-top: 10%;\n  width: 600px;\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvbGF5b3V0LXZhcmlhdGlvbnMvZGVtby1vbmUvZGVtby1vbmUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osWUFBWTtBQUNkO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsaUJBQWlCO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDBCQUEwQjtFQUMxQiw4QkFBOEI7RUFDOUIsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixZQUFZO0FBQ2QiLCJzb3VyY2VzQ29udGVudCI6WyIubW9kdWxlLWRlbW8ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgd2lkdGg6IDYwMHB4O1xyXG59XHJcbmgyIHtcclxuICAgIG1hcmdpbi10b3A6IDIlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMiU7XHJcbn1cclxuXHJcbi5zd2l0Y2gtZGVtbyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogZmxleC1zdGFydDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgcGFkZGluZy10b3A6IDEwJTtcclxuICB3aWR0aDogNjAwcHg7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 4500:
/*!*********************************************************************!*\
  !*** ./src/app/pages/layout-variations/demo-one/demo-one.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DemoOneModule: () => (/* binding */ DemoOneModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _projects_ng_material_multilevel_menu_src_public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../../../projects/ng-material-multilevel-menu/src/public_api */ 2995);
/* harmony import */ var _modules_materials_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../modules/materials.module */ 9590);
/* harmony import */ var _demo_one_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./demo-one-routing.module */ 9981);
/* harmony import */ var _demo_one_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./demo-one.component */ 9377);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);






class DemoOneModule {
  static {
    this.ɵfac = function DemoOneModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || DemoOneModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
      type: DemoOneModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _demo_one_routing_module__WEBPACK_IMPORTED_MODULE_2__.DemoOneRoutingModule, _projects_ng_material_multilevel_menu_src_public_api__WEBPACK_IMPORTED_MODULE_0__.NgMaterialMultilevelMenuModule, _modules_materials_module__WEBPACK_IMPORTED_MODULE_1__.MaterialsModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](DemoOneModule, {
    declarations: [_demo_one_component__WEBPACK_IMPORTED_MODULE_3__.DemoOneComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _demo_one_routing_module__WEBPACK_IMPORTED_MODULE_2__.DemoOneRoutingModule, _projects_ng_material_multilevel_menu_src_public_api__WEBPACK_IMPORTED_MODULE_0__.NgMaterialMultilevelMenuModule, _modules_materials_module__WEBPACK_IMPORTED_MODULE_1__.MaterialsModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_pages_layout-variations_demo-one_demo-one_module_ts.js.map