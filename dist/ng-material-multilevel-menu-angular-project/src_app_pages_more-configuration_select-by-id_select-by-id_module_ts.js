"use strict";
(self["webpackChunkng_material_multilevel_menu_angular_project"] = self["webpackChunkng_material_multilevel_menu_angular_project"] || []).push([["src_app_pages_more-configuration_select-by-id_select-by-id_module_ts"],{

/***/ 4478:
/*!**************************************************************************************!*\
  !*** ./src/app/pages/more-configuration/select-by-id/select-by-id-routing.module.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SelectByIdRoutingModule: () => (/* binding */ SelectByIdRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _select_by_id_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./select-by-id.component */ 4296);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);




const routes = [{
  path: '',
  component: _select_by_id_component__WEBPACK_IMPORTED_MODULE_0__.SelectByIdComponent
}, {
  path: '',
  redirectTo: '/',
  pathMatch: 'full'
}];
class SelectByIdRoutingModule {
  static {
    this.ɵfac = function SelectByIdRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || SelectByIdRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: SelectByIdRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SelectByIdRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 4296:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/more-configuration/select-by-id/select-by-id.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SelectByIdComponent: () => (/* binding */ SelectByIdComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _projects_ng_material_multilevel_menu_src_public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../../../projects/ng-material-multilevel-menu/src/public_api */ 2995);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _projects_ng_material_multilevel_menu_src_lib_ng_material_multilevel_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../projects/ng-material-multilevel-menu/src/lib/ng-material-multilevel-menu.component */ 2518);






const _c0 = () => ["/pages/more-configuration/dont-emit"];
const _c1 = () => ["/pages/more-configuration/on-select"];
class SelectByIdComponent {
  constructor(multilevelMenuService) {
    this.multilevelMenuService = multilevelMenuService;
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
    this.menuId = null;
  }
  selectMenuID() {
    if (this.menuId === null) {
      alert('Menu ID can\'t be empty');
      return;
    }
    this.multilevelMenuService.selectMenuByID(this.menuId);
  }
  selectedItem(event) {
    console.log(event);
  }
  ngOnInit() {}
  menuIsReady(menus) {
    console.log(menus);
  }
  static {
    this.ɵfac = function SelectByIdComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || SelectByIdComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_projects_ng_material_multilevel_menu_src_public_api__WEBPACK_IMPORTED_MODULE_0__.MultilevelMenuService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: SelectByIdComponent,
      selectors: [["app-select-by-id"]],
      decls: 13,
      vars: 7,
      consts: [[1, "module-demo"], [1, "input-box"], ["type", "text", "placeholder", "Enter the Menu Id here", 3, "ngModelChange", "ngModel"], ["mat-button", "", "color", "primary", 3, "click"], [3, "menuIsReady", "selectedItem", "configuration", "items"], [1, "switch-demo"], ["mat-button", "", 1, "prev-demo", 3, "routerLink"], ["mat-button", "", 1, "next-demo", 3, "routerLink"]],
      template: function SelectByIdComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Change the colour of selected Items");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 1)(4, "input", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function SelectByIdComponent_Template_input_ngModelChange_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.menuId, $event) || (ctx.menuId = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "button", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SelectByIdComponent_Template_button_click_5_listener() {
            return ctx.selectMenuID();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Select Menu");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "ng-material-multilevel-menu", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("menuIsReady", function SelectByIdComponent_Template_ng_material_multilevel_menu_menuIsReady_7_listener($event) {
            return ctx.menuIsReady($event);
          })("selectedItem", function SelectByIdComponent_Template_ng_material_multilevel_menu_selectedItem_7_listener($event) {
            return ctx.selectedItem($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 5)(9, "a", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Previous Demo");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "a", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Next Home");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.menuId);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("configuration", ctx.config)("items", ctx.appitems);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](5, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](6, _c1));
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatAnchor, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButton, _projects_ng_material_multilevel_menu_src_lib_ng_material_multilevel_menu_component__WEBPACK_IMPORTED_MODULE_1__.NgMaterialMultilevelMenuComponent],
      styles: [".module-demo[_ngcontent-%COMP%] {\n    position: relative;\n    margin: auto;\n    width: 600px;\n}\n\nh2[_ngcontent-%COMP%] {\n    margin-top: 2%;\n    margin-bottom: 2%;\n}\n\n.input-box[_ngcontent-%COMP%] {\n    margin-top: 20px;\n    margin-bottom: 20px;\n    display: flex;\n}\n\n.input-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    padding: 10px 5px;\n    margin-right: 10px;\n    flex: 1;\n}\n\n.input-box[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    border: solid 1px #3f51b5;\n}\n\n.switch-demo[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: flex-start;\n    justify-content: space-between;\n    padding-top: 10%;\n    width: 600px;\n    margin: auto;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvbW9yZS1jb25maWd1cmF0aW9uL3NlbGVjdC1ieS1pZC9zZWxlY3QtYnktaWQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLE9BQU87QUFDWDs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYiwwQkFBMEI7SUFDMUIsOEJBQThCO0lBQzlCLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osWUFBWTtBQUNoQiIsInNvdXJjZXNDb250ZW50IjpbIi5tb2R1bGUtZGVtbyB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICB3aWR0aDogNjAwcHg7XHJcbn1cclxuXHJcbmgyIHtcclxuICAgIG1hcmdpbi10b3A6IDIlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMiU7XHJcbn1cclxuXHJcbi5pbnB1dC1ib3gge1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uaW5wdXQtYm94IGlucHV0IHtcclxuICAgIHBhZGRpbmc6IDEwcHggNXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgZmxleDogMTtcclxufVxyXG5cclxuLmlucHV0LWJveCBidXR0b24ge1xyXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggIzNmNTFiNTtcclxufVxyXG5cclxuLnN3aXRjaC1kZW1vIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogZmxleC1zdGFydDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHBhZGRpbmctdG9wOiAxMCU7XHJcbiAgICB3aWR0aDogNjAwcHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 1895:
/*!******************************************************************************!*\
  !*** ./src/app/pages/more-configuration/select-by-id/select-by-id.module.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SelectByIdModule: () => (/* binding */ SelectByIdModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _select_by_id_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./select-by-id-routing.module */ 4478);
/* harmony import */ var _select_by_id_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./select-by-id.component */ 4296);
/* harmony import */ var _modules_materials_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../modules/materials.module */ 9590);
/* harmony import */ var _projects_ng_material_multilevel_menu_src_public_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../../../projects/ng-material-multilevel-menu/src/public_api */ 2995);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);







class SelectByIdModule {
  static {
    this.ɵfac = function SelectByIdModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || SelectByIdModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
      type: SelectByIdModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _select_by_id_routing_module__WEBPACK_IMPORTED_MODULE_0__.SelectByIdRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _modules_materials_module__WEBPACK_IMPORTED_MODULE_2__.MaterialsModule, _projects_ng_material_multilevel_menu_src_public_api__WEBPACK_IMPORTED_MODULE_3__.NgMaterialMultilevelMenuModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](SelectByIdModule, {
    declarations: [_select_by_id_component__WEBPACK_IMPORTED_MODULE_1__.SelectByIdComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _select_by_id_routing_module__WEBPACK_IMPORTED_MODULE_0__.SelectByIdRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _modules_materials_module__WEBPACK_IMPORTED_MODULE_2__.MaterialsModule, _projects_ng_material_multilevel_menu_src_public_api__WEBPACK_IMPORTED_MODULE_3__.NgMaterialMultilevelMenuModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_pages_more-configuration_select-by-id_select-by-id_module_ts.js.map