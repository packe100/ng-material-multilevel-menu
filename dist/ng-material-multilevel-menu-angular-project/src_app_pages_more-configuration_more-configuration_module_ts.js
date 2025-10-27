"use strict";
(self["webpackChunkng_material_multilevel_menu_angular_project"] = self["webpackChunkng_material_multilevel_menu_angular_project"] || []).push([["src_app_pages_more-configuration_more-configuration_module_ts"],{

/***/ 4449:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/more-configuration/more-configuration-routing.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MoreConfigurationRoutingModule: () => (/* binding */ MoreConfigurationRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _more_configuration_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./more-configuration.component */ 2837);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);




const routes = [{
  path: '',
  component: _more_configuration_component__WEBPACK_IMPORTED_MODULE_0__.MoreConfigurationComponent,
  children: [{
    path: 'disable-padding',
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_more-configuration_disable-padding_disable-padding_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./disable-padding/disable-padding.module */ 717)).then(m => m.DisablePaddingModule)
  }, {
    path: 'disable-routing',
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_more-configuration_disable-routing_disable-routing_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./disable-routing/disable-routing.module */ 3689)).then(m => m.DisableRoutingModule)
  }, {
    path: 'expand-collapse',
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_more-configuration_expand-collapse_expand-collapse_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./expand-collapse/expand-collapse.module */ 8073)).then(m => m.ExpandCollapseModule)
  }, {
    path: 'dont-emit',
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_more-configuration_dont-emit_dont-emit_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./dont-emit/dont-emit.module */ 5313)).then(m => m.DontEmitModule)
  }, {
    path: 'select-by-id',
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_more-configuration_select-by-id_select-by-id_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./select-by-id/select-by-id.module */ 1895)).then(m => m.SelectByIdModule)
  }, {
    path: 'on-select',
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_more-configuration_on-select_on-select_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./on-select/on-select.module */ 8701)).then(m => m.OnSelectModule)
  }, {
    path: '**',
    redirectTo: 'demo-one'
  }]
}, {
  path: '**',
  redirectTo: ''
}];
class MoreConfigurationRoutingModule {
  static {
    this.ɵfac = function MoreConfigurationRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MoreConfigurationRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: MoreConfigurationRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MoreConfigurationRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 2837:
/*!**************************************************************************!*\
  !*** ./src/app/pages/more-configuration/more-configuration.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MoreConfigurationComponent: () => (/* binding */ MoreConfigurationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 5072);


class MoreConfigurationComponent {
  constructor() {}
  ngOnInit() {}
  static {
    this.ɵfac = function MoreConfigurationComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MoreConfigurationComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MoreConfigurationComponent,
      selectors: [["app-more-configuration"]],
      decls: 1,
      vars: 0,
      template: function MoreConfigurationComponent_Template(rf, ctx) {
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

/***/ 2680:
/*!***********************************************************************!*\
  !*** ./src/app/pages/more-configuration/more-configuration.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MoreConfigurationModule: () => (/* binding */ MoreConfigurationModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _more_configuration_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./more-configuration-routing.module */ 4449);
/* harmony import */ var _more_configuration_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./more-configuration.component */ 2837);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);




class MoreConfigurationModule {
  static {
    this.ɵfac = function MoreConfigurationModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MoreConfigurationModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: MoreConfigurationModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _more_configuration_routing_module__WEBPACK_IMPORTED_MODULE_0__.MoreConfigurationRoutingModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](MoreConfigurationModule, {
    declarations: [_more_configuration_component__WEBPACK_IMPORTED_MODULE_1__.MoreConfigurationComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _more_configuration_routing_module__WEBPACK_IMPORTED_MODULE_0__.MoreConfigurationRoutingModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_pages_more-configuration_more-configuration_module_ts.js.map