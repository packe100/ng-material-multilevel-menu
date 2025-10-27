"use strict";
(self["webpackChunkng_material_multilevel_menu_angular_project"] = self["webpackChunkng_material_multilevel_menu_angular_project"] || []).push([["src_app_pages_layout-variations_demo-six_version-two_version-two_module_ts"],{

/***/ 2588:
/*!********************************************************************************************!*\
  !*** ./src/app/pages/layout-variations/demo-six/version-two/version-two-routing.module.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VersionTwoRoutingModule: () => (/* binding */ VersionTwoRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _version_two_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./version-two.component */ 5098);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);




const routes = [{
  path: '',
  component: _version_two_component__WEBPACK_IMPORTED_MODULE_0__.VersionTwoComponent
}, {
  path: '',
  redirectTo: '/',
  pathMatch: 'full'
}];
class VersionTwoRoutingModule {
  static {
    this.ɵfac = function VersionTwoRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || VersionTwoRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: VersionTwoRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](VersionTwoRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 5098:
/*!***************************************************************************************!*\
  !*** ./src/app/pages/layout-variations/demo-six/version-two/version-two.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VersionTwoComponent: () => (/* binding */ VersionTwoComponent)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/animations */ 7172);
/* harmony import */ var _projects_ng_material_multilevel_menu_src_public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../../../../projects/ng-material-multilevel-menu/src/public_api */ 2995);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _projects_ng_material_multilevel_menu_src_lib_ng_material_multilevel_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../projects/ng-material-multilevel-menu/src/lib/ng-material-multilevel-menu.component */ 2518);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 3840);








const _c0 = () => ["/pages/layout-variations/demo-six/version-one"];
const _c1 = () => ["/pages/layout-variations/demo-six/version-three"];
const _c2 = a0 => ({
  "weight": a0
});
function VersionTwoComponent_ng_template_2_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 12)(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " keyboard_arrow_down ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().item;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@ExpandedLTR", item_r2.expanded ? "yes" : "no");
  }
}
function VersionTwoComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 6)(1, "div", 7)(2, "div", 8)(3, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, VersionTwoComponent_ng_template_2_div_6_Template, 3, 1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r2 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](4, _c2, item_r2.isSelected));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", item_r2.label, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@highlight", item_r2.isSelected ? "yes" : "no");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r2.hasChilden);
  }
}
class VersionTwoComponent {
  constructor() {
    this.appitems = [{
      label: 'Item 1 (with Font awesome icon)',
      faIcon: 'fab fa-500px',
      items: [{
        label: 'Item 1.1',
        faIcon: 'fab fa-accusoft'
      }, {
        label: 'Item 1.2.1',
        faIcon: 'fas fa-ambulance'
      }, {
        label: 'Item 1.2.2',
        faIcon: 'fas fa-anchor'
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
      customTemplate: true,
      selectedListFontColor: '#000'
    };
  }
  ngOnInit() {}
  selectedItem($event) {
    console.log($event);
  }
  static {
    this.ɵfac = function VersionTwoComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || VersionTwoComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: VersionTwoComponent,
      selectors: [["app-version-two"]],
      decls: 9,
      vars: 6,
      consts: [["listTemplate", ""], [1, "module-demo", "version-two"], [3, "selectedItem", "items", "configuration"], [1, "switch-demo"], ["mat-button", "", 1, "prev-demo", 3, "routerLink"], ["mat-button", "", 1, "next-demo", 3, "routerLink"], [1, "my-cool-menu-item"], [1, "title-and-image"], [1, "label-container"], [3, "ngClass"], [1, "strip-container"], ["class", "icon-arrow-container", 4, "ngIf"], [1, "icon-arrow-container"]],
      template: function VersionTwoComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 1)(1, "ng-material-multilevel-menu", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("selectedItem", function VersionTwoComponent_Template_ng_material_multilevel_menu_selectedItem_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.selectedItem($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, VersionTwoComponent_ng_template_2_Template, 7, 6, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
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
      styles: [".module-demo[_ngcontent-%COMP%] {\n    position: relative;\n    margin: auto;\n    width: 600px;\n    margin-top: 20px;\n}\n\n\n.version-two[_ngcontent-%COMP%]     .amml-menu-container {\n    background-color: #fafafa;\n    margin-top: 15px;\n    margin-bottom: 15px;\n}\n\n\n.my-cool-menu-item[_ngcontent-%COMP%] {\n    display: flex;\n    padding-left: 5px;\n    padding-right: 10px;\n    height: 48px;\n    flex-direction: row-reverse;\n}\n\n.my-cool-menu-item[_ngcontent-%COMP%]   .title-and-image[_ngcontent-%COMP%] {\n    width: 100%;\n    display: flex;\n    justify-content: flex-end;\n}\n\n.strip-container[_ngcontent-%COMP%] {\n    background: #ff7139;\n    width: 5px;\n    margin-left: 20px;\n    margin-top: 14px;\n    height: 0px;\n}\n\n.my-cool-menu-item[_ngcontent-%COMP%]   .title-and-image[_ngcontent-%COMP%]   .label-container[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n}\n\n.my-cool-menu-item[_ngcontent-%COMP%]   .title-and-image[_ngcontent-%COMP%]   .label-container[_ngcontent-%COMP%]   .weight[_ngcontent-%COMP%] {\n    font-weight: 600;\n}\n\n.my-cool-menu-item[_ngcontent-%COMP%]   .icon-arrow-container[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n}\n\n.switch-demo[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: flex-start;\n    justify-content: space-between;\n    padding-top: 10%;\n    margin-bottom: 200px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvbGF5b3V0LXZhcmlhdGlvbnMvZGVtby1zaXgvdmVyc2lvbi10d28vdmVyc2lvbi10d28uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjtBQUNBLGlHQUFpRztBQUNqRztJQUNJLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCOzs7QUFHQTtJQUNJLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWiwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsMEJBQTBCO0lBQzFCLDhCQUE4QjtJQUM5QixnQkFBZ0I7SUFDaEIsb0JBQW9CO0FBQ3hCIiwic291cmNlc0NvbnRlbnQiOlsiLm1vZHVsZS1kZW1vIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHdpZHRoOiA2MDBweDtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuLyogU2luY2UgeW91IGFyZSB3cml0aW5nIHlvdXIgb3duIEhUTUwsIGhlbmNlIHlvdSBoYXZlIHRvIHdyaXRlIGl0J3MgY29ycmVzcG9uZGluZyBDU1MgYXMgd2VsbC4gKi9cclxuLnZlcnNpb24tdHdvIDo6bmctZGVlcCAuYW1tbC1tZW51LWNvbnRhaW5lciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbn1cclxuXHJcblxyXG4ubXktY29vbC1tZW51LWl0ZW0ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICAgIGhlaWdodDogNDhweDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcclxufVxyXG5cclxuLm15LWNvb2wtbWVudS1pdGVtIC50aXRsZS1hbmQtaW1hZ2Uge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxufVxyXG5cclxuLnN0cmlwLWNvbnRhaW5lciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmY3MTM5O1xyXG4gICAgd2lkdGg6IDVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTRweDtcclxuICAgIGhlaWdodDogMHB4O1xyXG59XHJcblxyXG4ubXktY29vbC1tZW51LWl0ZW0gLnRpdGxlLWFuZC1pbWFnZSAubGFiZWwtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5teS1jb29sLW1lbnUtaXRlbSAudGl0bGUtYW5kLWltYWdlIC5sYWJlbC1jb250YWluZXIgLndlaWdodCB7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4ubXktY29vbC1tZW51LWl0ZW0gLmljb24tYXJyb3ctY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uc3dpdGNoLWRlbW8ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBmbGV4LXN0YXJ0O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgcGFkZGluZy10b3A6IDEwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwMHB4O1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"],
      data: {
        animation: [_projects_ng_material_multilevel_menu_src_public_api__WEBPACK_IMPORTED_MODULE_0__.ExpandedRTL, _projects_ng_material_multilevel_menu_src_public_api__WEBPACK_IMPORTED_MODULE_0__.ExpandedLTR, (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.trigger)('highlight', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.state)('no', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({
          height: '0px'
        })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.state)('yes', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({
          height: '40%'
        })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.transition)('no => yes', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.animate)(200)), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.transition)('yes => no', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.animate)(200))])]
      }
    });
  }
}

/***/ }),

/***/ 4301:
/*!************************************************************************************!*\
  !*** ./src/app/pages/layout-variations/demo-six/version-two/version-two.module.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VersionTwoModule: () => (/* binding */ VersionTwoModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _projects_ng_material_multilevel_menu_src_public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../../../../projects/ng-material-multilevel-menu/src/public_api */ 2995);
/* harmony import */ var _modules_materials_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../../modules/materials.module */ 9590);
/* harmony import */ var _version_two_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./version-two-routing.module */ 2588);
/* harmony import */ var _version_two_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./version-two.component */ 5098);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);






class VersionTwoModule {
  static {
    this.ɵfac = function VersionTwoModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || VersionTwoModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
      type: VersionTwoModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _version_two_routing_module__WEBPACK_IMPORTED_MODULE_2__.VersionTwoRoutingModule, _projects_ng_material_multilevel_menu_src_public_api__WEBPACK_IMPORTED_MODULE_0__.NgMaterialMultilevelMenuModule, _modules_materials_module__WEBPACK_IMPORTED_MODULE_1__.MaterialsModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](VersionTwoModule, {
    declarations: [_version_two_component__WEBPACK_IMPORTED_MODULE_3__.VersionTwoComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _version_two_routing_module__WEBPACK_IMPORTED_MODULE_2__.VersionTwoRoutingModule, _projects_ng_material_multilevel_menu_src_public_api__WEBPACK_IMPORTED_MODULE_0__.NgMaterialMultilevelMenuModule, _modules_materials_module__WEBPACK_IMPORTED_MODULE_1__.MaterialsModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_pages_layout-variations_demo-six_version-two_version-two_module_ts.js.map