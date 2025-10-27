"use strict";
(self["webpackChunkng_material_multilevel_menu_angular_project"] = self["webpackChunkng_material_multilevel_menu_angular_project"] || []).push([["src_app_pages_layout-variations_layout-variations_module_ts"],{

/***/ 2255:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/layout-variations/layout-variations-routing.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LayoutVariationsRoutingModule: () => (/* binding */ LayoutVariationsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _layout_variations_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout-variations.component */ 7967);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);




const routes = [{
  path: '',
  component: _layout_variations_component__WEBPACK_IMPORTED_MODULE_0__.LayoutVariationsComponent,
  children: [{
    path: 'demo-one',
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_layout-variations_demo-one_demo-one_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./demo-one/demo-one.module */ 4500)).then(m => m.DemoOneModule)
  }, {
    path: 'demo-two',
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_layout-variations_demo-two_demo-two_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./demo-two/demo-two.module */ 5176)).then(m => m.DemoTwoModule)
  }, {
    path: 'demo-three',
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_layout-variations_demo-three_demo-three_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./demo-three/demo-three.module */ 1212)).then(m => m.DemoThreeModule)
  }, {
    path: 'demo-four',
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_layout-variations_demo-four_demo-four_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./demo-four/demo-four.module */ 9662)).then(m => m.DemoFourModule)
  }, {
    path: 'demo-five',
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_layout-variations_demo-five_demo-five_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./demo-five/demo-five.module */ 7786)).then(m => m.DemoFiveModule)
  }, {
    path: 'demo-six',
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_layout-variations_demo-six_demo-six_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./demo-six/demo-six.module */ 9380)).then(m => m.DemoSixModule)
  }]
}, {
  path: '**',
  redirectTo: ''
}];
class LayoutVariationsRoutingModule {
  static {
    this.ɵfac = function LayoutVariationsRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || LayoutVariationsRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: LayoutVariationsRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](LayoutVariationsRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 7967:
/*!************************************************************************!*\
  !*** ./src/app/pages/layout-variations/layout-variations.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LayoutVariationsComponent: () => (/* binding */ LayoutVariationsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 5072);


class LayoutVariationsComponent {
  constructor() {}
  ngOnInit() {}
  static {
    this.ɵfac = function LayoutVariationsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || LayoutVariationsComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LayoutVariationsComponent,
      selectors: [["app-layout-variations"]],
      decls: 1,
      vars: 0,
      template: function LayoutVariationsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 1150:
/*!*********************************************************************!*\
  !*** ./src/app/pages/layout-variations/layout-variations.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LayoutVariationsModule: () => (/* binding */ LayoutVariationsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _layout_variations_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout-variations-routing.module */ 2255);
/* harmony import */ var _layout_variations_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout-variations.component */ 7967);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);




class LayoutVariationsModule {
  static {
    this.ɵfac = function LayoutVariationsModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || LayoutVariationsModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: LayoutVariationsModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _layout_variations_routing_module__WEBPACK_IMPORTED_MODULE_0__.LayoutVariationsRoutingModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](LayoutVariationsModule, {
    declarations: [_layout_variations_component__WEBPACK_IMPORTED_MODULE_1__.LayoutVariationsComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _layout_variations_routing_module__WEBPACK_IMPORTED_MODULE_0__.LayoutVariationsRoutingModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_pages_layout-variations_layout-variations_module_ts.js.map