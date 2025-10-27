"use strict";
(self["webpackChunkng_material_multilevel_menu_angular_project"] = self["webpackChunkng_material_multilevel_menu_angular_project"] || []).push([["src_app_pages_layout-variations_demo-six_version-three_version-three_module_ts"],{

/***/ 8924:
/*!************************************************************************************************!*\
  !*** ./src/app/pages/layout-variations/demo-six/version-three/version-three-routing.module.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VersionThreeRoutingModule: () => (/* binding */ VersionThreeRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _version_three_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./version-three.component */ 2122);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);




const routes = [{
  path: '',
  component: _version_three_component__WEBPACK_IMPORTED_MODULE_0__.VersionThreeComponent
}, {
  path: '',
  redirectTo: '/',
  pathMatch: 'full'
}];
class VersionThreeRoutingModule {
  static {
    this.ɵfac = function VersionThreeRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || VersionThreeRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: VersionThreeRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](VersionThreeRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 2122:
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/layout-variations/demo-six/version-three/version-three.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VersionThreeComponent: () => (/* binding */ VersionThreeComponent)
/* harmony export */ });
/* harmony import */ var _projects_ng_material_multilevel_menu_src_public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../../../../projects/ng-material-multilevel-menu/src/public_api */ 2995);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _projects_ng_material_multilevel_menu_src_lib_ng_material_multilevel_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../projects/ng-material-multilevel-menu/src/lib/ng-material-multilevel-menu.component */ 2518);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 3840);







const _c0 = () => ["/pages/layout-variations/demo-six/version-two"];
const _c1 = () => ["/pages/more-configuration/disable-padding"];
const _c2 = a0 => ({
  "active": a0
});
function VersionThreeComponent_ng_template_2_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().item;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@SlideInOut", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", item_r2.data, " ");
  }
}
function VersionThreeComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 6)(1, "div", 7)(2, "div", 8)(3, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 10)(6, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, " keyboard_arrow_down ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, VersionThreeComponent_ng_template_2_div_8_Template, 2, 2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r2 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](4, _c2, item_r2.isSelected));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", item_r2.label, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@ExpandedLTR", item_r2.expanded ? "yes" : "no");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r2.expanded);
  }
}
class VersionThreeComponent {
  constructor() {
    this.appitems = [{
      label: 'Item 1 (with Font awesome icon)',
      faIcon: 'fab fa-500px',
      data: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`
    }, {
      label: 'Item 2',
      faIcon: 'fas fa-ambulance',
      data: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`
    }, {
      label: 'Item 3',
      faIcon: 'fas fa-anchor',
      data: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`
    }];
    this.config = {
      paddingAtStart: false,
      customTemplate: true,
      selectedListFontColor: '#000',
      collapseOnSelect: true
    };
  }
  ngOnInit() {}
  selectedItem($event) {
    console.log($event);
  }
  static {
    this.ɵfac = function VersionThreeComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || VersionThreeComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: VersionThreeComponent,
      selectors: [["app-version-three"]],
      decls: 9,
      vars: 6,
      consts: [["listTemplate", ""], [1, "module-demo", "version-three"], [3, "selectedItem", "items", "configuration"], [1, "switch-demo"], ["mat-button", "", 1, "prev-demo", 3, "routerLink"], ["mat-button", "", 1, "next-demo", 3, "routerLink"], [1, "my-cool-menu-item"], [1, "title-and-image"], [1, "label-container"], [1, "label", 3, "ngClass"], [1, "icon-arrow-container"], ["class", "description", 4, "ngIf"], [1, "description"]],
      template: function VersionThreeComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 1)(1, "ng-material-multilevel-menu", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("selectedItem", function VersionThreeComponent_Template_ng_material_multilevel_menu_selectedItem_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.selectedItem($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, VersionThreeComponent_ng_template_2_Template, 9, 6, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
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
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _projects_ng_material_multilevel_menu_src_lib_ng_material_multilevel_menu_component__WEBPACK_IMPORTED_MODULE_1__.NgMaterialMultilevelMenuComponent, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatAnchor, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIcon],
      styles: [".module-demo[_ngcontent-%COMP%] {\n    position: relative;\n    margin: auto;\n    width: 600px;\n    margin-top: 20px;\n}\n\n.switch-demo[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: flex-start;\n    justify-content: space-between;\n    padding-top: 10%;\n    margin-bottom: 200px;\n}\n\n\n\n.version-two[_ngcontent-%COMP%]     .amml-menu-container {\n    background-color: #fafafa;\n    margin-top: 15px;\n    margin-bottom: 15px;\n}\n\n\n.my-cool-menu-item[_ngcontent-%COMP%] {\n    display: flex;\n    padding-left: 5px;\n    padding-right: 10px;\n}\n\n.my-cool-menu-item[_ngcontent-%COMP%]   .title-and-image[_ngcontent-%COMP%] {\n    width: 100%;\n    display: flex;\n    justify-content: flex-start;\n    flex-direction: column;\n    margin-top: 15px;\n    padding: 10px 15px;\n    border-radius: 20px;\n    border: solid 1px rgb(0 0 0 / 12%);\n}\n\n\n.my-cool-menu-item[_ngcontent-%COMP%]   .title-and-image[_ngcontent-%COMP%]   .label-container[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: space-between;\n}\n\n.my-cool-menu-item[_ngcontent-%COMP%]   .title-and-image[_ngcontent-%COMP%]   .label-container[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n    line-height: 48px;\n}\n\n.my-cool-menu-item[_ngcontent-%COMP%]   .title-and-image[_ngcontent-%COMP%]   .label-container[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n    font-weight: 600;\n}\n\n.my-cool-menu-item[_ngcontent-%COMP%]   .title-and-image[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n    padding-bottom: 10px;\n}\n\n.my-cool-menu-item[_ngcontent-%COMP%]   .icon-arrow-container[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvbGF5b3V0LXZhcmlhdGlvbnMvZGVtby1zaXgvdmVyc2lvbi10aHJlZS92ZXJzaW9uLXRocmVlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsMEJBQTBCO0lBQzFCLDhCQUE4QjtJQUM5QixnQkFBZ0I7SUFDaEIsb0JBQW9CO0FBQ3hCOztBQUVBLGlHQUFpRztBQUNqRztJQUNJLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCOzs7QUFHQTtJQUNJLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYiwyQkFBMkI7SUFDM0Isc0JBQXNCO0lBQ3RCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGtDQUFrQztBQUN0Qzs7O0FBR0E7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtBQUN2QiIsInNvdXJjZXNDb250ZW50IjpbIi5tb2R1bGUtZGVtbyB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICB3aWR0aDogNjAwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG4uc3dpdGNoLWRlbW8ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBmbGV4LXN0YXJ0O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgcGFkZGluZy10b3A6IDEwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwMHB4O1xyXG59XHJcblxyXG4vKiBTaW5jZSB5b3UgYXJlIHdyaXRpbmcgeW91ciBvd24gSFRNTCwgaGVuY2UgeW91IGhhdmUgdG8gd3JpdGUgaXQncyBjb3JyZXNwb25kaW5nIENTUyBhcyB3ZWxsLiAqL1xyXG4udmVyc2lvbi10d28gOjpuZy1kZWVwIC5hbW1sLW1lbnUtY29udGFpbmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG5cclxuXHJcbi5teS1jb29sLW1lbnUtaXRlbSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4ubXktY29vbC1tZW51LWl0ZW0gLnRpdGxlLWFuZC1pbWFnZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIHBhZGRpbmc6IDEwcHggMTVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBib3JkZXI6IHNvbGlkIDFweCByZ2IoMCAwIDAgLyAxMiUpO1xyXG59XHJcblxyXG5cclxuLm15LWNvb2wtbWVudS1pdGVtIC50aXRsZS1hbmQtaW1hZ2UgLmxhYmVsLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4ubXktY29vbC1tZW51LWl0ZW0gLnRpdGxlLWFuZC1pbWFnZSAubGFiZWwtY29udGFpbmVyIC5sYWJlbCB7XHJcbiAgICBsaW5lLWhlaWdodDogNDhweDtcclxufVxyXG5cclxuLm15LWNvb2wtbWVudS1pdGVtIC50aXRsZS1hbmQtaW1hZ2UgLmxhYmVsLWNvbnRhaW5lciAuYWN0aXZlIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi5teS1jb29sLW1lbnUtaXRlbSAudGl0bGUtYW5kLWltYWdlIC5kZXNjcmlwdGlvbiB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLm15LWNvb2wtbWVudS1pdGVtIC5pY29uLWFycm93LWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"],
      data: {
        animation: [_projects_ng_material_multilevel_menu_src_public_api__WEBPACK_IMPORTED_MODULE_0__.SlideInOut, _projects_ng_material_multilevel_menu_src_public_api__WEBPACK_IMPORTED_MODULE_0__.ExpandedLTR]
      }
    });
  }
}

/***/ }),

/***/ 2045:
/*!****************************************************************************************!*\
  !*** ./src/app/pages/layout-variations/demo-six/version-three/version-three.module.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VersionThreeModule: () => (/* binding */ VersionThreeModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _projects_ng_material_multilevel_menu_src_public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../../../../projects/ng-material-multilevel-menu/src/public_api */ 2995);
/* harmony import */ var _modules_materials_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../../modules/materials.module */ 9590);
/* harmony import */ var _version_three_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./version-three-routing.module */ 8924);
/* harmony import */ var _version_three_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./version-three.component */ 2122);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);






class VersionThreeModule {
  static {
    this.ɵfac = function VersionThreeModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || VersionThreeModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
      type: VersionThreeModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _version_three_routing_module__WEBPACK_IMPORTED_MODULE_2__.VersionThreeRoutingModule, _projects_ng_material_multilevel_menu_src_public_api__WEBPACK_IMPORTED_MODULE_0__.NgMaterialMultilevelMenuModule, _modules_materials_module__WEBPACK_IMPORTED_MODULE_1__.MaterialsModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](VersionThreeModule, {
    declarations: [_version_three_component__WEBPACK_IMPORTED_MODULE_3__.VersionThreeComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _version_three_routing_module__WEBPACK_IMPORTED_MODULE_2__.VersionThreeRoutingModule, _projects_ng_material_multilevel_menu_src_public_api__WEBPACK_IMPORTED_MODULE_0__.NgMaterialMultilevelMenuModule, _modules_materials_module__WEBPACK_IMPORTED_MODULE_1__.MaterialsModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_pages_layout-variations_demo-six_version-three_version-three_module_ts.js.map