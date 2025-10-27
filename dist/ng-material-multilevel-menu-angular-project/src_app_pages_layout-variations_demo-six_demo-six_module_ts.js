"use strict";
(self["webpackChunkng_material_multilevel_menu_angular_project"] = self["webpackChunkng_material_multilevel_menu_angular_project"] || []).push([["src_app_pages_layout-variations_demo-six_demo-six_module_ts"],{

/***/ 4317:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/layout-variations/demo-six/demo-six-routing.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DemoSixRoutingModule: () => (/* binding */ DemoSixRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _demo_six_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./demo-six.component */ 7665);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);




const routes = [{
  path: '',
  component: _demo_six_component__WEBPACK_IMPORTED_MODULE_0__.DemoSixComponent,
  children: [{
    path: '',
    redirectTo: 'version-one',
    pathMatch: 'full'
  }, {
    path: 'version-one',
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_layout-variations_demo-six_version-one_version-one_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./version-one/version-one.module */ 4569)).then(m => m.VersionOneModule)
  }, {
    path: 'version-two',
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_layout-variations_demo-six_version-two_version-two_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./version-two/version-two.module */ 4301)).then(m => m.VersionTwoModule)
  }, {
    path: 'version-three',
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_layout-variations_demo-six_version-three_version-three_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./version-three/version-three.module */ 2045)).then(m => m.VersionThreeModule)
  }]
}, {
  path: '',
  redirectTo: '/',
  pathMatch: 'full'
}];
class DemoSixRoutingModule {
  static {
    this.ɵfac = function DemoSixRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || DemoSixRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: DemoSixRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](DemoSixRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 7665:
/*!************************************************************************!*\
  !*** ./src/app/pages/layout-variations/demo-six/demo-six.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DemoSixComponent: () => (/* binding */ DemoSixComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/tabs */ 8223);





function DemoSixComponent_a_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DemoSixComponent_a_4_Template_a_click_0_listener() {
      const singleLink_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.showDemo(singleLink_r2.link));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const singleLink_r2 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("active", ctx_r2.activeLink == singleLink_r2.link);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", singleLink_r2.name, " ");
  }
}
class DemoSixComponent {
  showDemo(link) {
    this.activeLink = link;
    this.router.navigate([`/pages/layout-variations/demo-six/${link}`]);
  }
  constructor(router) {
    this.router = router;
    this.links = [{
      name: 'Basic Menu (RLT Demo)',
      link: 'version-one'
    }, {
      name: 'Version Two',
      link: 'version-two'
    }, {
      name: 'Version Three',
      link: 'version-three'
    }];
    this.activeLink = this.links[0].link;
    this.background = undefined;
  }
  ngOnInit() {
    this.router.events.subscribe(routerEvent => {
      if (routerEvent instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__.NavigationEnd) {
        const urlSplited = routerEvent.url.split('/');
        this.activeLink = urlSplited[urlSplited.length - 1];
      }
    });
  }
  static {
    this.ɵfac = function DemoSixComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || DemoSixComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DemoSixComponent,
      selectors: [["app-demo-six"]],
      decls: 7,
      vars: 2,
      consts: [[1, "information"], [1, "module-demo"], ["mat-tab-nav-bar", "", 1, "tab-links", 3, "backgroundColor"], ["mat-tab-link", "", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "demo"], ["mat-tab-link", "", 3, "click", "active"]],
      template: function DemoSixComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " You can use use your own html templates to create List, the below demos will demostrate the same.\n");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1)(3, "nav", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DemoSixComponent_a_4_Template, 2, 2, "a", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "router-outlet");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("backgroundColor", ctx.background);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.links);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__.MatTabNav, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__.MatTabLink],
      styles: [".information[_ngcontent-%COMP%] {\n    width: 600px;\n    margin: auto;\n    padding: 5%;\n}\n\n.module-demo[_ngcontent-%COMP%] {\n    position: relative;\n    margin: auto;\n    width: 600px;\n}\n\nh2[_ngcontent-%COMP%] {\n    margin-top: 2%;\n    margin-bottom: 2%;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvbGF5b3V0LXZhcmlhdGlvbnMvZGVtby1zaXgvZGVtby1zaXguY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGlCQUFpQjtBQUNyQiIsInNvdXJjZXNDb250ZW50IjpbIi5pbmZvcm1hdGlvbiB7XHJcbiAgICB3aWR0aDogNjAwcHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBwYWRkaW5nOiA1JTtcclxufVxyXG5cclxuLm1vZHVsZS1kZW1vIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHdpZHRoOiA2MDBweDtcclxufVxyXG5cclxuaDIge1xyXG4gICAgbWFyZ2luLXRvcDogMiU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyJTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 9380:
/*!*********************************************************************!*\
  !*** ./src/app/pages/layout-variations/demo-six/demo-six.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DemoSixModule: () => (/* binding */ DemoSixModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _projects_ng_material_multilevel_menu_src_public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../../../projects/ng-material-multilevel-menu/src/public_api */ 2995);
/* harmony import */ var _modules_materials_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../modules/materials.module */ 9590);
/* harmony import */ var _demo_six_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./demo-six-routing.module */ 4317);
/* harmony import */ var _demo_six_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./demo-six.component */ 7665);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);






class DemoSixModule {
  static {
    this.ɵfac = function DemoSixModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || DemoSixModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
      type: DemoSixModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _demo_six_routing_module__WEBPACK_IMPORTED_MODULE_2__.DemoSixRoutingModule, _modules_materials_module__WEBPACK_IMPORTED_MODULE_1__.MaterialsModule, _projects_ng_material_multilevel_menu_src_public_api__WEBPACK_IMPORTED_MODULE_0__.NgMaterialMultilevelMenuModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](DemoSixModule, {
    declarations: [_demo_six_component__WEBPACK_IMPORTED_MODULE_3__.DemoSixComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _demo_six_routing_module__WEBPACK_IMPORTED_MODULE_2__.DemoSixRoutingModule, _modules_materials_module__WEBPACK_IMPORTED_MODULE_1__.MaterialsModule, _projects_ng_material_multilevel_menu_src_public_api__WEBPACK_IMPORTED_MODULE_0__.NgMaterialMultilevelMenuModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_pages_layout-variations_demo-six_demo-six_module_ts.js.map