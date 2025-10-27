"use strict";
(self["webpackChunkng_material_multilevel_menu_angular_project"] = self["webpackChunkng_material_multilevel_menu_angular_project"] || []).push([["src_app_pages_layout-variations_demo-five_demo-five_module_ts"],{

/***/ 2219:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/layout-variations/demo-five/demo-five-routing.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DemoFiveRoutingModule: () => (/* binding */ DemoFiveRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _demo_five_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./demo-five.component */ 8123);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);




const routes = [{
  path: '',
  component: _demo_five_component__WEBPACK_IMPORTED_MODULE_0__.DemoFiveComponent
}, {
  path: '',
  redirectTo: '/',
  pathMatch: 'full'
}];
class DemoFiveRoutingModule {
  static {
    this.ɵfac = function DemoFiveRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || DemoFiveRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: DemoFiveRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](DemoFiveRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 8123:
/*!**************************************************************************!*\
  !*** ./src/app/pages/layout-variations/demo-five/demo-five.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DemoFiveComponent: () => (/* binding */ DemoFiveComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _projects_ng_material_multilevel_menu_src_lib_ng_material_multilevel_menu_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../projects/ng-material-multilevel-menu/src/lib/ng-material-multilevel-menu.component */ 2518);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 4175);




const _c0 = () => ["/pages/layout-variations/demo-four"];
const _c1 = () => ["/pages/layout-variations/demo-six"];
class DemoFiveComponent {
  constructor() {
    this.appitems = [{
      label: 'Item 1',
      imageIcon: '/assets/batman.jpg',
      items: [{
        label: 'Item 1.1',
        imageIcon: '/assets/blackpanther.jpg'
      }, {
        label: 'Item 1.2',
        imageIcon: '/assets/captainamerica.jpg',
        items: [{
          label: 'Item 1.2.1',
          imageIcon: '/assets/drstange.jpg'
        }, {
          label: 'Item 1.2.2',
          imageIcon: '/assets/ironman.jpg',
          items: [{
            label: 'Item 1.2.2.1',
            imageIcon: '/assets/shatiman.jpg'
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
      classname: 'my-custom-lis',
      rtlLayout: true
    };
  }
  ngOnInit() {}
  selectedItem($event) {
    console.log($event);
  }
  static {
    this.ɵfac = function DemoFiveComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || DemoFiveComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: DemoFiveComponent,
      selectors: [["app-demo-five"]],
      decls: 9,
      vars: 6,
      consts: [[1, "module-demo"], [3, "selectedItem", "configuration", "items"], [1, "switch-demo"], ["mat-button", "", 1, "prev-demo", 3, "routerLink"], ["mat-button", "", 1, "next-demo", 3, "routerLink"]],
      template: function DemoFiveComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "RLT Demo");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ng-material-multilevel-menu", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("selectedItem", function DemoFiveComponent_Template_ng_material_multilevel_menu_selectedItem_3_listener($event) {
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
      styles: [".module-demo[_ngcontent-%COMP%] {\n  position: relative;\n  margin: auto;\n  width: 600px;\n}\n\nh2[_ngcontent-%COMP%] {\n  margin-top: 2%;\n  margin-bottom: 2%;\n}\n\n.switch-demo[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: flex-start;\n  justify-content: space-between;\n  padding-top: 10%;\n  width: 600px;\n  margin: auto;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvbGF5b3V0LXZhcmlhdGlvbnMvZGVtby1maXZlL2RlbW8tZml2ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLDBCQUEwQjtFQUMxQiw4QkFBOEI7RUFDOUIsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixZQUFZO0FBQ2QiLCJzb3VyY2VzQ29udGVudCI6WyIubW9kdWxlLWRlbW8ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgd2lkdGg6IDYwMHB4O1xyXG59XHJcblxyXG5oMiB7XHJcbiAgbWFyZ2luLXRvcDogMiU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMiU7XHJcbn1cclxuXHJcbi5zd2l0Y2gtZGVtbyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogZmxleC1zdGFydDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgcGFkZGluZy10b3A6IDEwJTtcclxuICB3aWR0aDogNjAwcHg7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 7786:
/*!***********************************************************************!*\
  !*** ./src/app/pages/layout-variations/demo-five/demo-five.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DemoFiveModule: () => (/* binding */ DemoFiveModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _projects_ng_material_multilevel_menu_src_public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../../../projects/ng-material-multilevel-menu/src/public_api */ 2995);
/* harmony import */ var _modules_materials_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../modules/materials.module */ 9590);
/* harmony import */ var _demo_five_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./demo-five-routing.module */ 2219);
/* harmony import */ var _demo_five_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./demo-five.component */ 8123);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);






class DemoFiveModule {
  static {
    this.ɵfac = function DemoFiveModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || DemoFiveModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
      type: DemoFiveModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _demo_five_routing_module__WEBPACK_IMPORTED_MODULE_2__.DemoFiveRoutingModule, _projects_ng_material_multilevel_menu_src_public_api__WEBPACK_IMPORTED_MODULE_0__.NgMaterialMultilevelMenuModule, _modules_materials_module__WEBPACK_IMPORTED_MODULE_1__.MaterialsModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](DemoFiveModule, {
    declarations: [_demo_five_component__WEBPACK_IMPORTED_MODULE_3__.DemoFiveComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _demo_five_routing_module__WEBPACK_IMPORTED_MODULE_2__.DemoFiveRoutingModule, _projects_ng_material_multilevel_menu_src_public_api__WEBPACK_IMPORTED_MODULE_0__.NgMaterialMultilevelMenuModule, _modules_materials_module__WEBPACK_IMPORTED_MODULE_1__.MaterialsModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_pages_layout-variations_demo-five_demo-five_module_ts.js.map