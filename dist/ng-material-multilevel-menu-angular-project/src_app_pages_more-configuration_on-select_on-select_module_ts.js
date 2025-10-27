"use strict";
(self["webpackChunkng_material_multilevel_menu_angular_project"] = self["webpackChunkng_material_multilevel_menu_angular_project"] || []).push([["src_app_pages_more-configuration_on-select_on-select_module_ts"],{

/***/ 2988:
/*!********************************************************************************!*\
  !*** ./src/app/pages/more-configuration/on-select/on-select-routing.module.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OnSelectRoutingModule: () => (/* binding */ OnSelectRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _on_select_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./on-select.component */ 8266);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);




const routes = [{
  path: '',
  component: _on_select_component__WEBPACK_IMPORTED_MODULE_0__.OnSelectComponent
}, {
  path: '',
  redirectTo: '/',
  pathMatch: 'full'
}];
class OnSelectRoutingModule {
  static {
    this.ɵfac = function OnSelectRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || OnSelectRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: OnSelectRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](OnSelectRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 8266:
/*!***************************************************************************!*\
  !*** ./src/app/pages/more-configuration/on-select/on-select.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OnSelectComponent: () => (/* binding */ OnSelectComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ 4175);



const _c0 = () => ["/pages/more-configuration/select-by-id"];
const _c1 = () => ["/pages/home"];
class OnSelectComponent {
  constructor() {
    this.codeSnippet = `
    {
      label: 'Changing Colours',
      link: '/demo two',
      icon: 'favorite_border',
      onSelected: function() {
        // some logic
      }
  }`;
    this.codeSnippetUsage = `
    import { Component } from '@angular/core';
    import {
      MultilevelNodes,
      Configuration,
      ExpandedRTL,
      ExpandedLTR
    } from 'ng-material-multilevel-menu';
    @Component({
        selector: 'app-demo',
        templateUrl: './demo.component.html',
        styleUrls: ['./demo.component.css'],
        animations: [ExpandedRTL, ExpandedLTR]
    })
    export class DemoComponent  {
        appitems: MultilevelNodes[] = [
            ...
            {
              label: 'Changing Colours',
              link: '/demo two',
              icon: 'favorite_border',
              onSelected: this.onSelected.bind(this)
            }
            ...
        ];
        config: Configuration = {
            rtlLayout: true,
            customTemplate: true,
        }
        constructor() { }
        onSelected(args) {
          console.log(args)
        }
    }
  `;
  }
  ngOnInit() {}
  static {
    this.ɵfac = function OnSelectComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || OnSelectComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: OnSelectComponent,
      selectors: [["app-on-select"]],
      decls: 25,
      vars: 6,
      consts: [[1, "module-demo"], [1, "switch-demo"], ["mat-button", "", 1, "next-demo", 3, "routerLink"]],
      template: function OnSelectComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Just in case if you don't want to use ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "code")(3, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "href");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, ", ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "code")(7, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "routerLink");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " and you want to write your own logic for redirection then you can use ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "code")(11, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "onSelect");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Property. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "pre");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " The below code snippet will give you an idea of how you can use this in the Angular Component class. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "pre");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 1)(21, "a", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Previous Demo");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Go Home");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("        ", ctx.codeSnippet, "\n    ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("        ", ctx.codeSnippetUsage, "\n    ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c1));
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink, _angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatAnchor],
      styles: [".module-demo[_ngcontent-%COMP%] {\n    position: relative;\n    margin: auto;\n    width: 600px;\n    padding: 5%;\n    line-height: 33px;\n}\n\nh2[_ngcontent-%COMP%] {\n    margin-top: 2%;\n    margin-bottom: 2%;\n}\ncode[_ngcontent-%COMP%] {\n    font-size: 15px;\n    background: #c4c4c457;\n    padding: 5px;\n}\n\n.switch-demo[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: flex-start;\n    justify-content: space-between;\n    padding-top: 10%;\n    padding-bottom: 10%;\n    width: 600px;\n    margin: auto;\n    \n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvbW9yZS1jb25maWd1cmF0aW9uL29uLXNlbGVjdC9vbi1zZWxlY3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osWUFBWTtJQUNaLFdBQVc7SUFDWCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YscUJBQXFCO0lBQ3JCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsMEJBQTBCO0lBQzFCLDhCQUE4QjtJQUM5QixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixZQUFZOztBQUVoQiIsInNvdXJjZXNDb250ZW50IjpbIi5tb2R1bGUtZGVtbyB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICB3aWR0aDogNjAwcHg7XHJcbiAgICBwYWRkaW5nOiA1JTtcclxuICAgIGxpbmUtaGVpZ2h0OiAzM3B4O1xyXG59XHJcblxyXG5oMiB7XHJcbiAgICBtYXJnaW4tdG9wOiAyJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDIlO1xyXG59XHJcbmNvZGUge1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgYmFja2dyb3VuZDogI2M0YzRjNDU3O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG59XHJcblxyXG4uc3dpdGNoLWRlbW8ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBmbGV4LXN0YXJ0O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgcGFkZGluZy10b3A6IDEwJTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMCU7XHJcbiAgICB3aWR0aDogNjAwcHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 8701:
/*!************************************************************************!*\
  !*** ./src/app/pages/more-configuration/on-select/on-select.module.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OnSelectModule: () => (/* binding */ OnSelectModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _modules_materials_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../modules/materials.module */ 9590);
/* harmony import */ var _on_select_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./on-select-routing.module */ 2988);
/* harmony import */ var _on_select_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./on-select.component */ 8266);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);





class OnSelectModule {
  static {
    this.ɵfac = function OnSelectModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || OnSelectModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
      type: OnSelectModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _on_select_routing_module__WEBPACK_IMPORTED_MODULE_1__.OnSelectRoutingModule, _modules_materials_module__WEBPACK_IMPORTED_MODULE_0__.MaterialsModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](OnSelectModule, {
    declarations: [_on_select_component__WEBPACK_IMPORTED_MODULE_2__.OnSelectComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _on_select_routing_module__WEBPACK_IMPORTED_MODULE_1__.OnSelectRoutingModule, _modules_materials_module__WEBPACK_IMPORTED_MODULE_0__.MaterialsModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_pages_more-configuration_on-select_on-select_module_ts.js.map