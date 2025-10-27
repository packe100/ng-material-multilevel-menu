"use strict";
(self["webpackChunkng_material_multilevel_menu_angular_project"] = self["webpackChunkng_material_multilevel_menu_angular_project"] || []).push([["main"],{

/***/ 555:
/*!*******************************************************************!*\
  !*** ./projects/ng-material-multilevel-menu/src/lib/animation.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExpandedLTR: () => (/* binding */ ExpandedLTR),
/* harmony export */   ExpandedRTL: () => (/* binding */ ExpandedRTL),
/* harmony export */   SlideInOut: () => (/* binding */ SlideInOut)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ 7172);

const SlideInOut = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)('SlideInOut', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.state)('in', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  height: '*',
  opacity: 0
})), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(':leave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  height: '*',
  opacity: 0.2
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.group)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)(200, (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  height: 0
})), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('200ms ease-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  opacity: 0
}))])]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  height: '0',
  opacity: 0
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.group)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)(200, (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  height: '*'
})), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('400ms ease-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  opacity: 1
}))])])]);
const ExpandedLTR = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)('ExpandedLTR', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.state)('no', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: 'rotate(-90deg)'
})), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.state)('yes', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: 'rotate(0deg)'
})), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('no => yes', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)(200)), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('yes => no', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)(200))]);
const ExpandedRTL = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)('ExpandedRTL', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.state)('no', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: 'rotate(90deg)'
})), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.state)('yes', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: 'rotate(0deg)'
})), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('no => yes', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)(200)), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('yes => no', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)(200))]);

/***/ }),

/***/ 7897:
/*!*******************************************************************!*\
  !*** ./projects/ng-material-multilevel-menu/src/lib/app.model.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExpandCollapseStatusEnum: () => (/* binding */ ExpandCollapseStatusEnum)
/* harmony export */ });
var ExpandCollapseStatusEnum;
(function (ExpandCollapseStatusEnum) {
  ExpandCollapseStatusEnum["expand"] = "expand";
  ExpandCollapseStatusEnum["collapse"] = "collapse";
  ExpandCollapseStatusEnum["neutral"] = "neutral";
})(ExpandCollapseStatusEnum || (ExpandCollapseStatusEnum = {}));

/***/ }),

/***/ 5756:
/*!**********************************************************************!*\
  !*** ./projects/ng-material-multilevel-menu/src/lib/common-utils.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CommonUtils: () => (/* binding */ CommonUtils)
/* harmony export */ });
class CommonUtils {
  static {
    this.isNullOrUndefinedOrEmpty = function (object) {
      return CommonUtils.isNullOrUndefined(object) || object === '';
    };
  }
  static {
    this.isNullOrUndefined = function (object) {
      return object === null || object === undefined;
    };
  }
}

/***/ }),

/***/ 3:
/*!*******************************************************************!*\
  !*** ./projects/ng-material-multilevel-menu/src/lib/constants.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CONSTANT: () => (/* binding */ CONSTANT)
/* harmony export */ });
const CONSTANT = {
  PADDING_AT_START: true,
  DEFAULT_CLASS_NAME: `amml-container`,
  DEFAULT_LIST_CLASS_NAME: `amml-item`,
  SELECTED_LIST_CLASS_NAME: `selected-amml-item`,
  ACTIVE_ITEM_CLASS_NAME: `active-amml-item`,
  DISABLED_ITEM_CLASS_NAME: `disabled-amml-item`,
  SUBMENU_ITEM_CLASS_NAME: `amml-submenu`,
  HAS_SUBMENU_ITEM_CLASS_NAME: `has-amml-submenu`,
  DEFAULT_SELECTED_FONT_COLOR: `#1976d2`,
  DEFAULT_LIST_BACKGROUND_COLOR: `transparent`,
  DEFAULT_LIST_FONT_COLOR: `rgba(0,0,0,.87)`,
  DEFAULT_HREF_TARGET_TYPE: '_self',
  ERROR_MESSAGE: `Invalid data for material Multilevel List Component`,
  POSSIBLE: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
  YES: 'yes',
  NO: 'no'
};

/***/ }),

/***/ 9376:
/*!*****************************************************************************************************************!*\
  !*** ./projects/ng-material-multilevel-menu/src/lib/list-item/list-item-content/list-item-content.component.ts ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ListItemContentComponent: () => (/* binding */ ListItemContentComponent)
/* harmony export */ });
/* harmony import */ var _animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../animation */ 555);
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common-utils */ 5756);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants */ 3);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/bidi */ 3680);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 5072);








function ListItemContentComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](0);
  }
}
function ListItemContentComponent_ng_template_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](0);
  }
}
function ListItemContentComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ListItemContentComponent_ng_template_1_ng_container_1_Template, 1, 0, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    const linkLabelLtrOutlet_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](8);
    const linkLabelRtlOutlet_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("href", ctx_r0.node.link, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"])("target", ctx_r0.getHrefTargetType())("ngStyle", ctx_r0.listContentStyle);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.isRtlLayout ? linkLabelRtlOutlet_r3 : linkLabelLtrOutlet_r2);
  }
}
function ListItemContentComponent_ng_template_3_ng_container_0_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](0);
  }
}
function ListItemContentComponent_ng_template_3_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, ListItemContentComponent_ng_template_3_ng_container_0_ng_container_2_Template, 1, 0, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    const linkLabelLtrOutlet_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](8);
    const linkLabelRtlOutlet_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", ctx_r0.node.link)("ngStyle", ctx_r0.listContentStyle);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.isRtlLayout ? linkLabelRtlOutlet_r3 : linkLabelLtrOutlet_r2);
  }
}
function ListItemContentComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, ListItemContentComponent_ng_template_3_ng_container_0_Template, 3, 3, "ng-container", 8);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    const defaultContentContainer_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.node.link && ctx_r0.nodeConfiguration.interfaceWithRoute)("ngIfElse", defaultContentContainer_r4);
  }
}
function ListItemContentComponent_ng_template_5_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](0);
  }
}
function ListItemContentComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ListItemContentComponent_ng_template_5_ng_container_1_Template, 1, 0, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    const linkLabelLtrOutlet_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](8);
    const linkLabelRtlOutlet_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", ctx_r0.listContentStyle);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.isRtlLayout ? linkLabelRtlOutlet_r3 : linkLabelLtrOutlet_r2);
  }
}
function ListItemContentComponent_ng_template_7_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](0);
  }
}
function ListItemContentComponent_ng_template_7_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 14)(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " keyboard_arrow_down ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@ExpandedLTR", ctx_r0.nodeExpandStatus());
  }
}
function ListItemContentComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ListItemContentComponent_ng_template_7_ng_container_1_Template, 1, 0, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, ListItemContentComponent_ng_template_7_div_4_Template, 3, 1, "div", 13);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    const iconContainer_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dir", "ltr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", iconContainer_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.node.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.node.hasChildren);
  }
}
function ListItemContentComponent_ng_template_9_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](0);
  }
}
function ListItemContentComponent_ng_template_9_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 14)(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " keyboard_arrow_down ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@ExpandedRTL", ctx_r0.nodeExpandStatus());
  }
}
function ListItemContentComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ListItemContentComponent_ng_template_9_ng_container_1_Template, 1, 0, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, ListItemContentComponent_ng_template_9_div_4_Template, 3, 1, "div", 13);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    const iconContainer_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dir", "rtl");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", iconContainer_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.node.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.node.hasChildren);
  }
}
function ListItemContentComponent_ng_template_11_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx_r0.getSelectedFaIcon());
  }
}
function ListItemContentComponent_ng_template_11_mat_icon_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-icon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r0.getSelectedIcon(), " ");
  }
}
function ListItemContentComponent_ng_template_11_mat_icon_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "mat-icon", 23);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("svgIcon", ctx_r0.getSelectedSvgIcon());
  }
}
function ListItemContentComponent_ng_template_11_img_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "img", 24);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("src", ctx_r0.getSelectedImageIcon(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("alt", ctx_r0.node.label);
  }
}
function ListItemContentComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ListItemContentComponent_ng_template_11_span_1_Template, 2, 1, "span", 16)(2, ListItemContentComponent_ng_template_11_mat_icon_2_Template, 2, 1, "mat-icon", 17)(3, ListItemContentComponent_ng_template_11_mat_icon_3_Template, 1, 1, "mat-icon", 18)(4, ListItemContentComponent_ng_template_11_img_4_Template, 1, 2, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitch", ctx_r0.getListIcon(ctx_r0.node));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitchCase", "faIcon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitchCase", "icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitchCase", "svgIcon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitchCase", "imageIcon");
  }
}
class ListItemContentComponent {
  constructor() {
    this.nodeConfiguration = null;
    // NOOP
  }
  ngOnInit() {
    // NOOP
  }
  getListIcon(node) {
    if (!_common_utils__WEBPACK_IMPORTED_MODULE_1__.CommonUtils.isNullOrUndefinedOrEmpty(node.icon)) {
      return `icon`;
    } else if (!_common_utils__WEBPACK_IMPORTED_MODULE_1__.CommonUtils.isNullOrUndefinedOrEmpty(node.faIcon)) {
      return `faIcon`;
    } else if (!_common_utils__WEBPACK_IMPORTED_MODULE_1__.CommonUtils.isNullOrUndefinedOrEmpty(node.imageIcon)) {
      return `imageIcon`;
    } else if (!_common_utils__WEBPACK_IMPORTED_MODULE_1__.CommonUtils.isNullOrUndefinedOrEmpty(node.svgIcon)) {
      return `svgIcon`;
    } else {
      return ``;
    }
  }
  getHrefTargetType() {
    return this.node.hrefTargetType ? this.node.hrefTargetType : _constants__WEBPACK_IMPORTED_MODULE_2__.CONSTANT.DEFAULT_HREF_TARGET_TYPE;
  }
  getSelectedSvgIcon() {
    return this.node.isSelected && this.node.activeSvgIcon ? this.node.activeSvgIcon : this.node.svgIcon;
  }
  getSelectedIcon() {
    return this.node.isSelected && this.node.activeIcon ? this.node.activeIcon : this.node.icon;
  }
  getSelectedFaIcon() {
    return this.node.isSelected && this.node.activeFaIcon ? this.node.activeFaIcon : this.node.faIcon;
  }
  getSelectedImageIcon() {
    return this.node.isSelected && this.node.activeImageIcon ? this.node.activeImageIcon : this.node.imageIcon;
  }
  nodeExpandStatus() {
    return this.node.expanded ? _constants__WEBPACK_IMPORTED_MODULE_2__.CONSTANT.YES : _constants__WEBPACK_IMPORTED_MODULE_2__.CONSTANT.NO;
  }
  static {
    this.ɵfac = function ListItemContentComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ListItemContentComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: ListItemContentComponent,
      selectors: [["ng-list-item-content"]],
      inputs: {
        node: "node",
        isRtlLayout: "isRtlLayout",
        listContentStyle: "listContentStyle",
        nodeConfiguration: "nodeConfiguration"
      },
      decls: 13,
      vars: 1,
      consts: [["redirectLinkTemplate", ""], ["routerLinkTemplate", ""], ["defaultContentContainer", ""], ["linkLabelLtrOutlet", ""], ["linkLabelRtlOutlet", ""], ["iconContainer", ""], [4, "ngTemplateOutlet"], [1, "anml-link", 3, "href", "target", "ngStyle"], [4, "ngIf", "ngIfElse"], [1, "anml-link", 3, "routerLink", "ngStyle"], [1, "anml-link", 3, "ngStyle"], [1, "anml-data", 3, "dir"], [1, "label"], ["class", "amml-icon-arrow-container", 4, "ngIf"], [1, "amml-icon-arrow-container"], [1, "icon-container", 3, "ngSwitch"], ["class", "amml-icon amml-icon-fa", 4, "ngSwitchCase"], ["class", "amml-icon", 4, "ngSwitchCase"], ["class", "amml-icon amml-svg-icon", 3, "svgIcon", 4, "ngSwitchCase"], ["class", "amml-icon amml-img-icon", 3, "src", "alt", 4, "ngSwitchCase"], [1, "amml-icon", "amml-icon-fa"], [3, "ngClass"], [1, "amml-icon"], [1, "amml-icon", "amml-svg-icon", 3, "svgIcon"], [1, "amml-icon", "amml-img-icon", 3, "src", "alt"]],
      template: function ListItemContentComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, ListItemContentComponent_ng_container_0_Template, 1, 0, "ng-container", 6)(1, ListItemContentComponent_ng_template_1_Template, 2, 4, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"])(3, ListItemContentComponent_ng_template_3_Template, 1, 2, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"])(5, ListItemContentComponent_ng_template_5_Template, 2, 2, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"])(7, ListItemContentComponent_ng_template_7_Template, 5, 4, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"])(9, ListItemContentComponent_ng_template_9_Template, 5, 4, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"])(11, ListItemContentComponent_ng_template_11_Template, 5, 5, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        }
        if (rf & 2) {
          const redirectLinkTemplate_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](2);
          const routerLinkTemplate_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", ctx.node.externalRedirect ? redirectLinkTemplate_r6 : routerLinkTemplate_r7);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgStyle, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgSwitchCase, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIcon, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__.Dir, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLink],
      styles: [".amml-item[_ngcontent-%COMP%] {\n  position: relative;\n  cursor: pointer;\n}\n\n.anml-link[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: flex-start;\n  text-transform: capitalize;\n  text-decoration: none;\n}\n\n.anml-data[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 48px;\n  display: flex;\n  justify-content: flex-start;\n}\n\n.icon-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.amml-icon-fa[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n\n.label[_ngcontent-%COMP%] {\n  line-height: 48px;\n  font-weight: 400;\n}\n\n.amml-svg-icon[_ngcontent-%COMP%] {\n  width: 22px;\n  height: 22px;\n  margin-top: -12px;\n}\n\n.amml-img-icon[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  object-fit: cover;\n}\n\n.amml-icon-arrow-container[_ngcontent-%COMP%] {\n  direction: ltr;\n  display: flex;\n  align-items: center;\n}\n\ndiv[dir=\"ltr\"][_ngcontent-%COMP%]   .amml-icon[_ngcontent-%COMP%] {\n  margin-right: 16px;\n}\ndiv[dir=\"rtl\"][_ngcontent-%COMP%]   .amml-icon[_ngcontent-%COMP%] {\n  margin-left: 16px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL25nLW1hdGVyaWFsLW11bHRpbGV2ZWwtbWVudS9zcmMvbGliL2xpc3QtaXRlbS9saXN0LWl0ZW0tY29udGVudC9saXN0LWl0ZW0tY29udGVudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLDJCQUEyQjtFQUMzQiwwQkFBMEI7RUFDMUIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixhQUFhO0VBQ2IsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsY0FBYztFQUNkLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyIuYW1tbC1pdGVtIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uYW5tbC1saW5rIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi5hbm1sLWRhdGEge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNDhweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxufVxyXG5cclxuLmljb24tY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5hbW1sLWljb24tZmEge1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxuLmxhYmVsIHtcclxuICBsaW5lLWhlaWdodDogNDhweDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcblxyXG4uYW1tbC1zdmctaWNvbiB7XHJcbiAgd2lkdGg6IDIycHg7XHJcbiAgaGVpZ2h0OiAyMnB4O1xyXG4gIG1hcmdpbi10b3A6IC0xMnB4O1xyXG59XHJcblxyXG4uYW1tbC1pbWctaWNvbiB7XHJcbiAgZmxleC1zaHJpbms6IDA7XHJcbiAgd2lkdGg6IDQwcHg7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxufVxyXG5cclxuLmFtbWwtaWNvbi1hcnJvdy1jb250YWluZXIge1xyXG4gIGRpcmVjdGlvbjogbHRyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuZGl2W2Rpcj1cImx0clwiXSAuYW1tbC1pY29uIHtcclxuICBtYXJnaW4tcmlnaHQ6IDE2cHg7XHJcbn1cclxuZGl2W2Rpcj1cInJ0bFwiXSAuYW1tbC1pY29uIHtcclxuICBtYXJnaW4tbGVmdDogMTZweDtcclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"],
      data: {
        animation: [_animation__WEBPACK_IMPORTED_MODULE_0__.ExpandedLTR, _animation__WEBPACK_IMPORTED_MODULE_0__.ExpandedRTL]
      }
    });
  }
}

/***/ }),

/***/ 6135:
/*!***************************************************************************************!*\
  !*** ./projects/ng-material-multilevel-menu/src/lib/list-item/list-item.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ListItemComponent: () => (/* binding */ ListItemComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _app_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app.model */ 7897);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ 3);
/* harmony import */ var _animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../animation */ 555);
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common-utils */ 5756);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _multilevel_menu_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../multilevel-menu.service */ 8355);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/bidi */ 3680);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/list */ 943);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/divider */ 4102);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ 4646);
/* harmony import */ var _list_item_content_list_item_content_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list-item-content/list-item-content.component */ 9376);














const _c0 = (a0, a1) => ({
  item: a0,
  configuration: a1
});
function ListItemComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ListItemComponent_div_1_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.expand(ctx_r1.node));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainer"](1, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", ctx_r1.selectedListClasses);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.listTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction2"](3, _c0, ctx_r1.node, ctx_r1.nodeConfiguration));
  }
}
function ListItemComponent_div_2_ng_list_item_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ng-list-item", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("selectedItem", function ListItemComponent_div_2_ng_list_item_1_Template_ng_list_item_selectedItem_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.selectedListItem($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const singleNode_r4 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("nodeConfiguration", ctx_r1.nodeConfiguration)("node", singleNode_r4.value)("level", ctx_r1.level + 1)("submenuLevel", singleNode_r4.key)("selectedNode", ctx_r1.selectedNode)("nodeExpandCollapseStatus", ctx_r1.nodeExpandCollapseStatus)("listTemplate", ctx_r1.listTemplate);
  }
}
function ListItemComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ListItemComponent_div_2_ng_list_item_1_Template, 1, 7, "ng-list-item", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("@SlideInOut", undefined)("dir", ctx_r1.isRtlLayout() ? "rtl" : "ltr")("ngClass", ctx_r1.classes);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](2, 4, ctx_r1.nodeChildren, ctx_r1.multilevelMenuService.kvDummyComparerFn));
  }
}
function ListItemComponent_ng_template_3_mat_list_item_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainer"](0);
  }
}
function ListItemComponent_ng_template_3_mat_list_item_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-list-item", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ListItemComponent_ng_template_3_mat_list_item_0_Template_mat_list_item_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.expand(ctx_r1.node));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ListItemComponent_ng_template_3_mat_list_item_0_ng_container_1_Template, 1, 0, "ng-container", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    const linkTemplate_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("title", ctx_r1.node.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matRippleDisabled", ctx_r1.node.disabled)("ngClass", ctx_r1.selectedListClasses);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngTemplateOutlet", linkTemplate_r6);
  }
}
function ListItemComponent_ng_template_3_mat_divider_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "mat-divider");
  }
}
function ListItemComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, ListItemComponent_ng_template_3_mat_list_item_0_Template, 2, 4, "mat-list-item", 10)(1, ListItemComponent_ng_template_3_mat_divider_1_Template, 1, 0, "mat-divider", 11);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r1.node.hidden);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.nodeConfiguration.useDividers);
  }
}
function ListItemComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "ng-list-item-content", 14);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("node", ctx_r1.node)("nodeConfiguration", ctx_r1.nodeConfiguration)("isRtlLayout", ctx_r1.isRtlLayout())("listContentStyle", ctx_r1.getListStyle());
  }
}
class ListItemComponent {
  constructor(router, multilevelMenuService) {
    this.router = router;
    this.multilevelMenuService = multilevelMenuService;
    this.level = 1;
    this.submenuLevel = 0;
    this.nodeConfiguration = null;
    this.nodeExpandCollapseStatus = null;
    this.listTemplate = null;
    this.selectedItem = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
    this.isSelected = false;
    this.expanded = false;
    this.firstInitializer = false;
    this.selectedListClasses = {
      [_constants__WEBPACK_IMPORTED_MODULE_1__.CONSTANT.DEFAULT_LIST_CLASS_NAME]: true,
      [_constants__WEBPACK_IMPORTED_MODULE_1__.CONSTANT.SELECTED_LIST_CLASS_NAME]: false,
      [_constants__WEBPACK_IMPORTED_MODULE_1__.CONSTANT.ACTIVE_ITEM_CLASS_NAME]: false
    };
  }
  ngOnChanges() {
    this.nodeChildren = this.node && this.node.items ? this.node.items.filter(n => !n.hidden) : [];
    this.node.hasChildren = this.hasItems();
    if (!_common_utils__WEBPACK_IMPORTED_MODULE_3__.CommonUtils.isNullOrUndefined(this.selectedNode)) {
      this.setSelectedClass(this.multilevelMenuService.recursiveCheckId(this.node, this.selectedNode.id));
    }
    this.setExpandCollapseStatus();
  }
  ngOnInit() {
    this.selectedListClasses[_constants__WEBPACK_IMPORTED_MODULE_1__.CONSTANT.DISABLED_ITEM_CLASS_NAME] = this.node.disabled;
    if (!_common_utils__WEBPACK_IMPORTED_MODULE_3__.CommonUtils.isNullOrUndefined(this.node.faIcon) && this.node.faIcon.match(/\bfa\w(?!-)/) === null) {
      this.node.faIcon = `fas ${this.node.faIcon}`;
    }
    this.selectedListClasses[`level-${this.level}-submenulevel-${this.submenuLevel}`] = true;
    if (typeof this.node.expanded === 'boolean') {
      this.expanded = this.node.expanded;
    }
    this.setClasses();
  }
  setSelectedClass(isFound) {
    if (isFound) {
      if (!this.firstInitializer) {
        this.expanded = true;
      }
      this.isSelected = this.nodeConfiguration.highlightOnSelect || this.selectedNode.items === undefined;
    } else {
      this.isSelected = false;
      if (this.nodeConfiguration.collapseOnSelect) {
        this.node.expanded = false;
        this.expanded = false;
      }
    }
    this.selectedListClasses = {
      [_constants__WEBPACK_IMPORTED_MODULE_1__.CONSTANT.DEFAULT_LIST_CLASS_NAME]: true,
      [_constants__WEBPACK_IMPORTED_MODULE_1__.CONSTANT.SELECTED_LIST_CLASS_NAME]: this.isSelected,
      [_constants__WEBPACK_IMPORTED_MODULE_1__.CONSTANT.ACTIVE_ITEM_CLASS_NAME]: this.selectedNode.id === this.node.id,
      [_constants__WEBPACK_IMPORTED_MODULE_1__.CONSTANT.DISABLED_ITEM_CLASS_NAME]: this.node.disabled,
      [`level-${this.level}-submenulevel-${this.submenuLevel}`]: true
    };
    this.node.isSelected = this.isSelected;
    this.setClasses();
  }
  getPaddingAtStart() {
    return this.nodeConfiguration.paddingAtStart;
  }
  getListStyle() {
    const styles = {
      background: _constants__WEBPACK_IMPORTED_MODULE_1__.CONSTANT.DEFAULT_LIST_BACKGROUND_COLOR,
      color: _constants__WEBPACK_IMPORTED_MODULE_1__.CONSTANT.DEFAULT_LIST_FONT_COLOR
    };
    if (this.nodeConfiguration.listBackgroundColor !== null) {
      styles.background = this.nodeConfiguration.listBackgroundColor;
    }
    if (this.isSelected) {
      this.nodeConfiguration.selectedListFontColor !== null ? styles.color = this.nodeConfiguration.selectedListFontColor : styles.color = _constants__WEBPACK_IMPORTED_MODULE_1__.CONSTANT.DEFAULT_SELECTED_FONT_COLOR;
    } else if (this.nodeConfiguration.fontColor !== null) {
      styles.color = this.nodeConfiguration.fontColor;
    }
    return styles;
  }
  hasItems() {
    return this.nodeChildren.length > 0;
  }
  isRtlLayout() {
    return this.nodeConfiguration.rtlLayout;
  }
  setClasses() {
    this.classes = {
      [`level-${this.level + 1}`]: true,
      [_constants__WEBPACK_IMPORTED_MODULE_1__.CONSTANT.SUBMENU_ITEM_CLASS_NAME]: this.hasItems() && this.getPaddingAtStart(),
      [_constants__WEBPACK_IMPORTED_MODULE_1__.CONSTANT.HAS_SUBMENU_ITEM_CLASS_NAME]: this.hasItems()
    };
  }
  setExpandCollapseStatus() {
    if (!_common_utils__WEBPACK_IMPORTED_MODULE_3__.CommonUtils.isNullOrUndefined(this.nodeExpandCollapseStatus)) {
      if (this.nodeExpandCollapseStatus === _app_model__WEBPACK_IMPORTED_MODULE_0__.ExpandCollapseStatusEnum.expand) {
        this.expanded = true;
        if (this.nodeConfiguration.customTemplate) {
          this.node.expanded = true;
        }
      }
      if (this.nodeExpandCollapseStatus === _app_model__WEBPACK_IMPORTED_MODULE_0__.ExpandCollapseStatusEnum.collapse) {
        this.expanded = false;
        if (this.nodeConfiguration.customTemplate) {
          this.node.expanded = false;
        }
      }
    }
  }
  expand(node) {
    if (node.disabled) {
      return;
    }
    this.nodeExpandCollapseStatus = _app_model__WEBPACK_IMPORTED_MODULE_0__.ExpandCollapseStatusEnum.neutral;
    this.expanded = !this.expanded;
    this.node.expanded = this.expanded;
    this.firstInitializer = true;
    this.setClasses();
    if (this.nodeConfiguration.interfaceWithRoute !== null && this.nodeConfiguration.interfaceWithRoute && node.link !== undefined && node.link) {
      this.router.navigate([node.link], node.navigationExtras).then();
    } else if (node.onSelected && typeof node.onSelected === 'function') {
      node.onSelected(node);
      this.selectedListItem(node);
    } else if (node.items === undefined || this.nodeConfiguration.collapseOnSelect) {
      this.selectedListItem(node);
    }
  }
  selectedListItem(node) {
    this.selectedItem.emit(node);
  }
  static {
    this.ɵfac = function ListItemComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ListItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_multilevel_menu_service__WEBPACK_IMPORTED_MODULE_4__.MultilevelMenuService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
      type: ListItemComponent,
      selectors: [["ng-list-item"]],
      inputs: {
        node: "node",
        level: "level",
        submenuLevel: "submenuLevel",
        selectedNode: "selectedNode",
        nodeConfiguration: "nodeConfiguration",
        nodeExpandCollapseStatus: "nodeExpandCollapseStatus",
        listTemplate: "listTemplate"
      },
      outputs: {
        selectedItem: "selectedItem"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵNgOnChangesFeature"]],
      decls: 7,
      vars: 3,
      consts: [["baseTemplate", ""], ["linkTemplate", ""], [1, "amml-menu-container"], [3, "ngClass", "click", 4, "ngIf", "ngIfElse"], [3, "dir", "ngClass", 4, "ngIf"], [3, "click", "ngClass"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "dir", "ngClass"], [3, "nodeConfiguration", "node", "level", "submenuLevel", "selectedNode", "nodeExpandCollapseStatus", "listTemplate", "selectedItem", 4, "ngFor", "ngForOf"], [3, "selectedItem", "nodeConfiguration", "node", "level", "submenuLevel", "selectedNode", "nodeExpandCollapseStatus", "listTemplate"], ["matRipple", "", 3, "title", "matRippleDisabled", "ngClass", "click", 4, "ngIf"], [4, "ngIf"], ["matRipple", "", 3, "click", "title", "matRippleDisabled", "ngClass"], [4, "ngTemplateOutlet"], [1, "filled", 3, "node", "nodeConfiguration", "isRtlLayout", "listContentStyle"]],
      template: function ListItemComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ListItemComponent_div_1_Template, 2, 6, "div", 3)(2, ListItemComponent_div_2_Template, 3, 7, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, ListItemComponent_ng_template_3_Template, 2, 2, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"])(5, ListItemComponent_ng_template_5_Template, 1, 4, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
        }
        if (rf & 2) {
          const baseTemplate_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.nodeConfiguration.customTemplate && !ctx.node.hidden)("ngIfElse", baseTemplate_r7);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.hasItems() && ctx.expanded);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgTemplateOutlet, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_9__.Dir, _angular_material_list__WEBPACK_IMPORTED_MODULE_10__.MatListItem, _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__.MatDivider, _angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MatRipple, ListItemComponent, _list_item_content_list_item_content_component__WEBPACK_IMPORTED_MODULE_5__.ListItemContentComponent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.KeyValuePipe],
      styles: [".filled[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\ndiv[dir=\"rtl\"].amml-submenu[_ngcontent-%COMP%] {\n  margin-right: 16px;\n}\n\ndiv[dir=\"ltr\"].amml-submenu[_ngcontent-%COMP%] {\n  margin-left: 16px;\n}\n\n.disabled-amml-item[_ngcontent-%COMP%] {\n  opacity: 0.5;\n  text-decoration: none;\n  pointer-events: none;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL25nLW1hdGVyaWFsLW11bHRpbGV2ZWwtbWVudS9zcmMvbGliL2xpc3QtaXRlbS9saXN0LWl0ZW0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixxQkFBcUI7RUFDckIsb0JBQW9CO0FBQ3RCIiwic291cmNlc0NvbnRlbnQiOlsiLmZpbGxlZCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbmRpdltkaXI9XCJydGxcIl0uYW1tbC1zdWJtZW51IHtcclxuICBtYXJnaW4tcmlnaHQ6IDE2cHg7XHJcbn1cclxuXHJcbmRpdltkaXI9XCJsdHJcIl0uYW1tbC1zdWJtZW51IHtcclxuICBtYXJnaW4tbGVmdDogMTZweDtcclxufVxyXG5cclxuLmRpc2FibGVkLWFtbWwtaXRlbSB7XHJcbiAgb3BhY2l0eTogMC41O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"],
      data: {
        animation: [_animation__WEBPACK_IMPORTED_MODULE_2__.SlideInOut]
      }
    });
  }
}

/***/ }),

/***/ 165:
/*!**************************************************************************!*\
  !*** ./projects/ng-material-multilevel-menu/src/lib/materials.module.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MaterialsModule: () => (/* binding */ MaterialsModule)
/* harmony export */ });
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/core */ 4646);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/list */ 943);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);




class MaterialsModule {
  static {
    this.ɵfac = function MaterialsModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MaterialsModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: MaterialsModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      imports: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_1__.MatIconModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_2__.MatListModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatRippleModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__.MatIconModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_2__.MatListModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatRippleModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialsModule, {
    imports: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_1__.MatIconModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_2__.MatListModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatRippleModule],
    exports: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_1__.MatIconModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_2__.MatListModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatRippleModule]
  });
})();

/***/ }),

/***/ 8355:
/*!*********************************************************************************!*\
  !*** ./projects/ng-material-multilevel-menu/src/lib/multilevel-menu.service.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MultilevelMenuService: () => (/* binding */ MultilevelMenuService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 819);
/* harmony import */ var _app_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.model */ 7897);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ 3);



class MultilevelMenuService {
  constructor() {
    this.expandCollapseStatus = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    this.expandCollapseStatus$ = this.expandCollapseStatus.asObservable();
    this.selectedMenuID = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    this.selectedMenuID$ = this.selectedMenuID.asObservable();
  }
  generateId() {
    let text = '';
    for (let i = 0; i < 20; i++) {
      text += _constants__WEBPACK_IMPORTED_MODULE_1__.CONSTANT.POSSIBLE.charAt(Math.floor(Math.random() * _constants__WEBPACK_IMPORTED_MODULE_1__.CONSTANT.POSSIBLE.length));
    }
    return text;
  }
  addRandomId(nodes) {
    nodes.forEach(node => {
      node.id = this.generateId();
      if (node.items !== undefined) {
        this.addRandomId(node.items);
      }
    });
  }
  recursiveCheckId(node, nodeId) {
    if (node.id === nodeId) {
      return true;
    } else {
      if (node.items !== undefined) {
        return node.items.some(nestedNode => {
          return this.recursiveCheckId(nestedNode, nodeId);
        });
      }
    }
  }
  findNodeRecursively({
    nodes,
    link,
    id
  }) {
    for (let nodeIndex = 0; nodeIndex < nodes.length; nodeIndex++) {
      const node = nodes[nodeIndex];
      for (const key in node) {
        if (node.hasOwnProperty(key)) {
          if (encodeURI(node.link) === link) {
            this.foundLinkObject = node;
          } else if (node.id === id) {
            this.foundLinkObject = node;
          } else {
            if (node.items !== undefined) {
              this.findNodeRecursively({
                nodes: node.items,
                link: link ? link : null,
                id: id ? id : null
              });
            }
          }
        }
      }
    }
  }
  getMatchedObjectByUrl(nodes, link) {
    this.findNodeRecursively({
      nodes,
      link
    });
    return this.foundLinkObject;
  }
  getMatchedObjectById(nodes, id) {
    this.findNodeRecursively({
      nodes,
      id
    });
    return this.foundLinkObject;
  }
  // overrides key-value pipe's default reordering (by key) by implementing dummy comprarer function
  // https://angular.io/api/common/KeyValuePipe#description
  kvDummyComparerFn() {
    return 0;
  }
  setMenuExpandCollapseStatus(status) {
    this.expandCollapseStatus.next(status ? status : _app_model__WEBPACK_IMPORTED_MODULE_0__.ExpandCollapseStatusEnum.neutral);
  }
  selectMenuByID(menuID) {
    this.selectedMenuID.next(menuID);
    return this.foundLinkObject;
  }
}

/***/ }),

/***/ 2518:
/*!***********************************************************************************************!*\
  !*** ./projects/ng-material-multilevel-menu/src/lib/ng-material-multilevel-menu.component.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NgMaterialMultilevelMenuComponent: () => (/* binding */ NgMaterialMultilevelMenuComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _app_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.model */ 7897);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ 3);
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common-utils */ 5756);
/* harmony import */ var _multilevel_menu_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./multilevel-menu.service */ 8355);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/bidi */ 3680);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/list */ 943);
/* harmony import */ var _list_item_list_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list-item/list-item.component */ 6135);












const _c0 = ["listTemplate"];
function NgMaterialMultilevelMenuComponent_div_0_ng_list_item_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ng-list-item", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("selectedItem", function NgMaterialMultilevelMenuComponent_div_0_ng_list_item_2_Template_ng_list_item_selectedItem_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.selectedListItem($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const node_r3 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nodeConfiguration", ctx_r1.nodeConfig)("node", node_r3.value)("level", 1)("submenuLevel", node_r3.key)("selectedNode", ctx_r1.currentNode)("nodeExpandCollapseStatus", ctx_r1.nodeExpandCollapseStatus)("listTemplate", ctx_r1.listTemplate);
  }
}
function NgMaterialMultilevelMenuComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 1)(1, "mat-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, NgMaterialMultilevelMenuComponent_div_0_ng_list_item_2_Template, 1, 7, "ng-list-item", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx_r1.getClassName())("ngStyle", ctx_r1.getGlobalStyle())("dir", ctx_r1.isRtlLayout() ? "rtl" : "ltr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](3, 4, ctx_r1.items, ctx_r1.multilevelMenuService.kvDummyComparerFn));
  }
}
class NgMaterialMultilevelMenuComponent {
  constructor(router, multilevelMenuService) {
    this.router = router;
    this.multilevelMenuService = multilevelMenuService;
    this.configuration = null;
    this.selectedItem = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
    this.selectedLabel = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
    this.menuIsReady = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
    this.expandCollapseStatusSubscription = null;
    this.selectMenuByIDSubscription = null;
    this.currentNode = null;
    this.nodeConfig = {
      paddingAtStart: true,
      listBackgroundColor: null,
      fontColor: null,
      selectedListFontColor: null,
      interfaceWithRoute: null,
      collapseOnSelect: null,
      highlightOnSelect: false,
      useDividers: true,
      rtlLayout: false,
      customTemplate: false
    };
    this.isInvalidConfig = true;
    this.isInvalidData = true;
    this.nodeExpandCollapseStatus = _app_model__WEBPACK_IMPORTED_MODULE_0__.ExpandCollapseStatusEnum.neutral;
    // NOOP
  }
  ngOnChanges() {
    this.detectInvalidConfig();
    this.initExpandCollapseStatus();
    this.initSelectedMenuID();
    if (!this.isInvalidData) {
      this.menuIsReady.emit(this.items);
    }
  }
  ngOnInit() {
    if (!_common_utils__WEBPACK_IMPORTED_MODULE_2__.CommonUtils.isNullOrUndefinedOrEmpty(this.configuration) && this.configuration.interfaceWithRoute !== null && this.configuration.interfaceWithRoute) {
      this.router.events.subscribe(event => {
        if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_6__.NavigationEnd) {
          this.updateNodeByURL(event.urlAfterRedirects);
        }
      });
      this.updateNodeByURL(this.router.url);
    }
  }
  updateNodeByURL(url) {
    const foundNode = this.multilevelMenuService.getMatchedObjectByUrl(this.items, url);
    if (foundNode !== undefined && !_common_utils__WEBPACK_IMPORTED_MODULE_2__.CommonUtils.isNullOrUndefinedOrEmpty(foundNode.link)
    // && !foundNode.disabled // Prevent route redirection for disabled menu
    ) {
      this.currentNode = foundNode;
      if (!_common_utils__WEBPACK_IMPORTED_MODULE_2__.CommonUtils.isNullOrUndefined(foundNode.dontEmit) && !foundNode.dontEmit) {
        this.selectedListItem(foundNode);
      }
    }
  }
  checkValidData() {
    if (this.items === undefined || Array.isArray(this.items) && this.items.length === 0) {
      console.warn(_constants__WEBPACK_IMPORTED_MODULE_1__.CONSTANT.ERROR_MESSAGE);
      return;
    }
    this.items = this.items.filter(n => !n.hidden);
    this.multilevelMenuService.addRandomId(this.items);
    this.isInvalidData = false;
  }
  detectInvalidConfig() {
    if (_common_utils__WEBPACK_IMPORTED_MODULE_2__.CommonUtils.isNullOrUndefinedOrEmpty(this.configuration)) {
      this.isInvalidConfig = true;
    } else {
      this.isInvalidConfig = false;
      const config = this.configuration;
      if (!_common_utils__WEBPACK_IMPORTED_MODULE_2__.CommonUtils.isNullOrUndefined(config.paddingAtStart) && typeof config.paddingAtStart === 'boolean') {
        this.nodeConfig.paddingAtStart = config.paddingAtStart;
      }
      if (!_common_utils__WEBPACK_IMPORTED_MODULE_2__.CommonUtils.isNullOrUndefinedOrEmpty(config.listBackgroundColor)) {
        this.nodeConfig.listBackgroundColor = config.listBackgroundColor;
      }
      if (!_common_utils__WEBPACK_IMPORTED_MODULE_2__.CommonUtils.isNullOrUndefinedOrEmpty(config.fontColor)) {
        this.nodeConfig.fontColor = config.fontColor;
      }
      if (!_common_utils__WEBPACK_IMPORTED_MODULE_2__.CommonUtils.isNullOrUndefinedOrEmpty(config.selectedListFontColor)) {
        this.nodeConfig.selectedListFontColor = config.selectedListFontColor;
      }
      if (!_common_utils__WEBPACK_IMPORTED_MODULE_2__.CommonUtils.isNullOrUndefined(config.interfaceWithRoute) && typeof config.interfaceWithRoute === 'boolean') {
        this.nodeConfig.interfaceWithRoute = config.interfaceWithRoute;
      }
      if (!_common_utils__WEBPACK_IMPORTED_MODULE_2__.CommonUtils.isNullOrUndefined(config.collapseOnSelect) && typeof config.collapseOnSelect === 'boolean') {
        this.nodeConfig.collapseOnSelect = config.collapseOnSelect;
      }
      if (!_common_utils__WEBPACK_IMPORTED_MODULE_2__.CommonUtils.isNullOrUndefined(config.highlightOnSelect) && typeof config.highlightOnSelect === 'boolean') {
        this.nodeConfig.highlightOnSelect = config.highlightOnSelect;
      }
      if (!_common_utils__WEBPACK_IMPORTED_MODULE_2__.CommonUtils.isNullOrUndefined(config.useDividers) && typeof config.useDividers === 'boolean') {
        this.nodeConfig.useDividers = config.useDividers;
      }
      if (!_common_utils__WEBPACK_IMPORTED_MODULE_2__.CommonUtils.isNullOrUndefined(config.rtlLayout) && typeof config.rtlLayout === 'boolean') {
        this.nodeConfig.rtlLayout = config.rtlLayout;
      }
      if (!_common_utils__WEBPACK_IMPORTED_MODULE_2__.CommonUtils.isNullOrUndefined(config.customTemplate) && typeof config.customTemplate === 'boolean') {
        this.nodeConfig.customTemplate = config.customTemplate;
      }
    }
    this.checkValidData();
  }
  initExpandCollapseStatus() {
    this.expandCollapseStatusSubscription = this.multilevelMenuService.expandCollapseStatus$.subscribe(expandCollapseStatus => {
      this.nodeExpandCollapseStatus = expandCollapseStatus ? expandCollapseStatus : _app_model__WEBPACK_IMPORTED_MODULE_0__.ExpandCollapseStatusEnum.neutral;
    }, () => {
      this.nodeExpandCollapseStatus = _app_model__WEBPACK_IMPORTED_MODULE_0__.ExpandCollapseStatusEnum.neutral;
    });
  }
  initSelectedMenuID() {
    this.selectMenuByIDSubscription = this.multilevelMenuService.selectedMenuID$.subscribe(selectedMenuID => {
      if (selectedMenuID) {
        const foundNode = this.multilevelMenuService.getMatchedObjectById(this.items, selectedMenuID);
        if (foundNode !== undefined) {
          this.currentNode = foundNode;
          this.selectedListItem(foundNode);
        }
      }
    });
  }
  getClassName() {
    if (!this.isInvalidConfig && !_common_utils__WEBPACK_IMPORTED_MODULE_2__.CommonUtils.isNullOrUndefinedOrEmpty(this.configuration.classname)) {
      return `${_constants__WEBPACK_IMPORTED_MODULE_1__.CONSTANT.DEFAULT_CLASS_NAME} ${this.configuration.classname}`;
    }
    return _constants__WEBPACK_IMPORTED_MODULE_1__.CONSTANT.DEFAULT_CLASS_NAME;
  }
  getGlobalStyle() {
    if (!this.isInvalidConfig) {
      const styles = {
        background: null
      };
      if (!_common_utils__WEBPACK_IMPORTED_MODULE_2__.CommonUtils.isNullOrUndefinedOrEmpty(this.configuration.backgroundColor)) {
        styles.background = this.configuration.backgroundColor;
      }
      return styles;
    }
  }
  isRtlLayout() {
    return this.nodeConfig.rtlLayout;
  }
  selectedListItem(event) {
    this.nodeExpandCollapseStatus = _app_model__WEBPACK_IMPORTED_MODULE_0__.ExpandCollapseStatusEnum.neutral;
    this.currentNode = event;
    if (!_common_utils__WEBPACK_IMPORTED_MODULE_2__.CommonUtils.isNullOrUndefined(event.dontEmit) && event.dontEmit) {
      return;
    }
    if (event.items === undefined && (!event.onSelected || typeof event.onSelected !== 'function')) {
      this.selectedItem.emit(event);
    } else {
      this.selectedLabel.emit(event);
    }
  }
  ngOnDestroy() {
    this.expandCollapseStatusSubscription.unsubscribe();
    this.selectMenuByIDSubscription.unsubscribe();
  }
  static {
    this.ɵfac = function NgMaterialMultilevelMenuComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || NgMaterialMultilevelMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_multilevel_menu_service__WEBPACK_IMPORTED_MODULE_3__.MultilevelMenuService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: NgMaterialMultilevelMenuComponent,
      selectors: [["ng-material-multilevel-menu"]],
      contentQueries: function NgMaterialMultilevelMenuComponent_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵcontentQuery"](dirIndex, _c0, 7);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.listTemplate = _t.first);
        }
      },
      inputs: {
        items: "items",
        configuration: "configuration"
      },
      outputs: {
        selectedItem: "selectedItem",
        selectedLabel: "selectedLabel",
        menuIsReady: "menuIsReady"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵNgOnChangesFeature"]],
      decls: 1,
      vars: 1,
      consts: [[3, "ngClass", "ngStyle", "dir", 4, "ngIf"], [3, "ngClass", "ngStyle", "dir"], [3, "nodeConfiguration", "node", "level", "submenuLevel", "selectedNode", "nodeExpandCollapseStatus", "listTemplate", "selectedItem", 4, "ngFor", "ngForOf"], [3, "selectedItem", "nodeConfiguration", "node", "level", "submenuLevel", "selectedNode", "nodeExpandCollapseStatus", "listTemplate"]],
      template: function NgMaterialMultilevelMenuComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, NgMaterialMultilevelMenuComponent_div_0_Template, 4, 7, "div", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.isInvalidData && ctx.items.length !== 0);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgStyle, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__.Dir, _angular_material_list__WEBPACK_IMPORTED_MODULE_9__.MatList, _list_item_list_item_component__WEBPACK_IMPORTED_MODULE_4__.ListItemComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.KeyValuePipe],
      styles: [".amml-container[_ngcontent-%COMP%]   .mat-list-base[_ngcontent-%COMP%] {\n  padding-top: unset;\n}\n\n.amml-item[_ngcontent-%COMP%] {\n  line-height: 48px;\n  display: flex;\n  justify-content: space-between;\n  position: relative;\n}\n\n.anml-data[_ngcontent-%COMP%] {\n  width: 100%;\n  text-transform: capitalize;\n  display: flex;\n  justify-content: flex-start;\n}\n\n.amml-icon-fa[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n\n.amml-icon[_ngcontent-%COMP%] {\n  line-height: 48px;\n}\n\n.active[_ngcontent-%COMP%] {\n  color: #1976d2;\n}\n\ndiv[dir=\"ltr\"][_ngcontent-%COMP%]   .amml-icon[_ngcontent-%COMP%] {\n  margin-right: 15px;\n}\ndiv[dir=\"ltr\"][_ngcontent-%COMP%]   .amml-submenu[_ngcontent-%COMP%] {\n  margin-left: 16px;\n}\n\ndiv[dir=\"rtl\"][_ngcontent-%COMP%]   .amml-icon[_ngcontent-%COMP%] {\n  margin-left: 15px;\n}\ndiv[dir=\"rtl\"][_ngcontent-%COMP%]   .amml-submenu[_ngcontent-%COMP%] {\n  margin-right: 16px;\n}\n\n\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL25nLW1hdGVyaWFsLW11bHRpbGV2ZWwtbWVudS9zcmMvbGliL25nLW1hdGVyaWFsLW11bHRpbGV2ZWwtbWVudS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztFQUNYLDBCQUEwQjtFQUMxQixhQUFhO0VBQ2IsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCIiwic291cmNlc0NvbnRlbnQiOlsiLmFtbWwtY29udGFpbmVyIC5tYXQtbGlzdC1iYXNlIHtcclxuICBwYWRkaW5nLXRvcDogdW5zZXQ7XHJcbn1cclxuXHJcbi5hbW1sLWl0ZW0ge1xyXG4gIGxpbmUtaGVpZ2h0OiA0OHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmFubWwtZGF0YSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbn1cclxuXHJcbi5hbW1sLWljb24tZmEge1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxuLmFtbWwtaWNvbiB7XHJcbiAgbGluZS1oZWlnaHQ6IDQ4cHg7XHJcbn1cclxuXHJcbi5hY3RpdmUge1xyXG4gIGNvbG9yOiAjMTk3NmQyO1xyXG59XHJcblxyXG5kaXZbZGlyPVwibHRyXCJdIC5hbW1sLWljb24ge1xyXG4gIG1hcmdpbi1yaWdodDogMTVweDtcclxufVxyXG5kaXZbZGlyPVwibHRyXCJdIC5hbW1sLXN1Ym1lbnUge1xyXG4gIG1hcmdpbi1sZWZ0OiAxNnB4O1xyXG59XHJcblxyXG5kaXZbZGlyPVwicnRsXCJdIC5hbW1sLWljb24ge1xyXG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG59XHJcbmRpdltkaXI9XCJydGxcIl0gLmFtbWwtc3VibWVudSB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xyXG59XHJcblxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 9292:
/*!********************************************************************************************!*\
  !*** ./projects/ng-material-multilevel-menu/src/lib/ng-material-multilevel-menu.module.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NgMaterialMultilevelMenuModule: () => (/* binding */ NgMaterialMultilevelMenuModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _list_item_list_item_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list-item/list-item.component */ 6135);
/* harmony import */ var _materials_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./materials.module */ 165);
/* harmony import */ var _ng_material_multilevel_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ng-material-multilevel-menu.component */ 2518);
/* harmony import */ var _list_item_list_item_content_list_item_content_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list-item/list-item-content/list-item-content.component */ 9376);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);







class NgMaterialMultilevelMenuModule {
  static {
    this.ɵfac = function NgMaterialMultilevelMenuModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || NgMaterialMultilevelMenuModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
      type: NgMaterialMultilevelMenuModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _materials_module__WEBPACK_IMPORTED_MODULE_1__.MaterialsModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](NgMaterialMultilevelMenuModule, {
    declarations: [_ng_material_multilevel_menu_component__WEBPACK_IMPORTED_MODULE_2__.NgMaterialMultilevelMenuComponent, _list_item_list_item_component__WEBPACK_IMPORTED_MODULE_0__.ListItemComponent, _list_item_list_item_content_list_item_content_component__WEBPACK_IMPORTED_MODULE_3__.ListItemContentComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _materials_module__WEBPACK_IMPORTED_MODULE_1__.MaterialsModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule],
    exports: [_ng_material_multilevel_menu_component__WEBPACK_IMPORTED_MODULE_2__.NgMaterialMultilevelMenuComponent]
  });
})();

/***/ }),

/***/ 2995:
/*!****************************************************************!*\
  !*** ./projects/ng-material-multilevel-menu/src/public_api.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExpandCollapseStatusEnum: () => (/* reexport safe */ _lib_app_model__WEBPACK_IMPORTED_MODULE_4__.ExpandCollapseStatusEnum),
/* harmony export */   ExpandedLTR: () => (/* reexport safe */ _lib_animation__WEBPACK_IMPORTED_MODULE_3__.ExpandedLTR),
/* harmony export */   ExpandedRTL: () => (/* reexport safe */ _lib_animation__WEBPACK_IMPORTED_MODULE_3__.ExpandedRTL),
/* harmony export */   MultilevelMenuService: () => (/* reexport safe */ _lib_multilevel_menu_service__WEBPACK_IMPORTED_MODULE_2__.MultilevelMenuService),
/* harmony export */   NgMaterialMultilevelMenuComponent: () => (/* reexport safe */ _lib_ng_material_multilevel_menu_component__WEBPACK_IMPORTED_MODULE_1__.NgMaterialMultilevelMenuComponent),
/* harmony export */   NgMaterialMultilevelMenuModule: () => (/* reexport safe */ _lib_ng_material_multilevel_menu_module__WEBPACK_IMPORTED_MODULE_0__.NgMaterialMultilevelMenuModule),
/* harmony export */   SlideInOut: () => (/* reexport safe */ _lib_animation__WEBPACK_IMPORTED_MODULE_3__.SlideInOut)
/* harmony export */ });
/* harmony import */ var _lib_ng_material_multilevel_menu_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/ng-material-multilevel-menu.module */ 9292);
/* harmony import */ var _lib_ng_material_multilevel_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/ng-material-multilevel-menu.component */ 2518);
/* harmony import */ var _lib_multilevel_menu_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/multilevel-menu.service */ 8355);
/* harmony import */ var _lib_animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/animation */ 555);
/* harmony import */ var _lib_app_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/app.model */ 7897);
/*
 * Public API Surface of ng-material-multilevel-menu
 */






/***/ }),

/***/ 4114:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);



const routes = [{
  path: '',
  redirectTo: '/pages/home',
  pathMatch: 'full'
}, {
  path: 'pages',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_pages_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/pages.module */ 8423)).then(m => m.PagesModule)
}, {
  path: '**',
  redirectTo: '/pages/home'
}];
class AppRoutingModule {
  static {
    this.ɵfac = function AppRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AppRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(routes, {}), _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
  });
})();

/***/ }),

/***/ 92:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _projects_ng_material_multilevel_menu_src_public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../projects/ng-material-multilevel-menu/src/public_api */ 2995);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _projects_ng_material_multilevel_menu_src_lib_ng_material_multilevel_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../projects/ng-material-multilevel-menu/src/lib/ng-material-multilevel-menu.component */ 2518);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 4175);





class AppComponent {
  selectedItem(selectedData) {
    console.log(selectedData);
    this.selectedData = selectedData;
  }
  constructor() {
    this.selectedData = null;
    this.showHome = true;
    this.expandCollapseStatus = null;
    this.appItems = [{
      label: 'Home',
      link: '/pages/home'
    }, {
      label: 'Layout Variations',
      items: [{
        label: 'Default',
        link: '/pages/layout-variations/demo-one'
      }, {
        label: 'Work with Colours',
        link: '/pages/layout-variations/demo-two'
      }, {
        label: 'Change background',
        link: '/pages/layout-variations/demo-three'
      }, {
        label: 'Use Images in the list',
        link: '/pages/layout-variations/demo-four'
      }, {
        label: 'RLT Demo',
        link: '/pages/layout-variations/demo-five'
      }, {
        label: 'Custom Templates',
        link: '/pages/layout-variations/demo-six',
        items: [{
          label: 'Version 1',
          link: '/pages/layout-variations/demo-six/version-one'
        }, {
          label: 'Version 2',
          link: '/pages/layout-variations/demo-six/version-two'
        }, {
          label: 'Version 3',
          link: '/pages/layout-variations/demo-six/version-three'
        }]
      }]
    }, {
      label: 'Configurations',
      items: [{
        label: 'Add/Remove Padding',
        link: '/pages/more-configuration/disable-padding'
      }, {
        label: 'Enable/Disable Routing',
        link: '/pages/more-configuration/disable-routing'
      }, {
        label: 'Expand Collapse Menu',
        link: '/pages/more-configuration/expand-collapse'
      }, {
        label: `Don't Emit`,
        link: '/pages/more-configuration/dont-emit'
      }, {
        label: `Select Menu By ID`,
        link: '/pages/more-configuration/select-by-id'
      }, {
        label: `On Select Property`,
        link: '/pages/more-configuration/on-select'
      }]
    }];
    this.config = {
      paddingAtStart: true,
      interfaceWithRoute: true,
      collapseOnSelect: true,
      highlightOnSelect: true
    };
  }
  ngOnInit() {}
  redirect(path) {
    window.location.href = path;
  }
  setExpandCollapseStatus(type) {
    this.expandCollapseStatus = type;
  }
  getClass(item) {
    return {
      [item.faIcon]: true
    };
  }
  static {
    this.ɵfac = function AppComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AppComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 24,
      vars: 2,
      consts: [[1, "container"], [1, "menu"], [3, "selectedItem", "configuration", "items"], [1, "demos"], [1, "heading"], [1, "short-desc"], [1, "footer"], [1, "credit"], ["href", "https://twitter.com/TiwariShanky", "target", "_blank"], [1, "contact"], ["mat-button", "", "color", "primary", 1, "plugin-button", 3, "click"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "ng-material-multilevel-menu", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("selectedItem", function AppComponent_Template_ng_material_multilevel_menu_selectedItem_2_listener($event) {
            return ctx.selectedItem($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3)(4, "div", 4)(5, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "ng-material-multilevel-menu");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "span", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Material Multi-Level Menu for Angular Projects");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "router-outlet");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 6)(11, "div", 7)(12, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Developed and Maintained by ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "a", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "@TiwariShanky");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 9)(18, "button", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppComponent_Template_button_click_18_listener() {
            return ctx.redirect("http://www.codershood.info/contact/");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, " Contact ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "button", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppComponent_Template_button_click_20_listener() {
            return ctx.redirect("http://www.codershood.info/");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, " Blog ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "button", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppComponent_Template_button_click_22_listener() {
            return ctx.redirect("https://github.com/ShankyTiwari");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, " Github ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("configuration", ctx.config)("items", ctx.appItems);
        }
      },
      dependencies: [_projects_ng_material_multilevel_menu_src_lib_ng_material_multilevel_menu_component__WEBPACK_IMPORTED_MODULE_1__.NgMaterialMultilevelMenuComponent, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButton],
      styles: [".heading[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: auto;\n  border-bottom: solid 0.5px rgba(0, 0, 0, 0.2);\n  padding-bottom: 20px;;\n}\n\n.container[_ngcontent-%COMP%]{\n  width: 100%;\n  min-height: 100vh;\n  margin: auto;\n  display: flex;\n  justify-content: flex-start;\n}\n.menu[_ngcontent-%COMP%]{\n  width: 20%;\n  min-height: 100vh;\n  border-right: solid 0.5px rgba(0, 0, 0, 0.2);\n}\n\n.demos[_ngcontent-%COMP%] {\n  width: 60%;\n  margin: 0 auto;\n}\n\n.footer[_ngcontent-%COMP%] {\n  width: 100%;\n  background: #fff;\n  height: 250px;\n  border-top: solid 0.5px rgba(0, 0, 0, 0.2);\n}\n\n.credit[_ngcontent-%COMP%] {\n  text-align: center;\n  padding-top: 2%;\n  color: rgba(105, 105, 105, 0.56);\n}\n\na[_ngcontent-%COMP%] {\n  color: rgba(82, 82, 82, 0.7215686274509804);\n  text-decoration: underline;\n}\n\n.contact[_ngcontent-%COMP%] {\n  text-align: center;\n  padding-top: 2%;\n  color: rgba(105, 105, 105, 0.56);\n  box-shadow: 0px -4px 19px -9px rgba(0, 0, 0, .2);\n}\n\n.content[_ngcontent-%COMP%] {\n  padding: 2%;\n  background-color: rgb(240, 240, 240);\n}\n\n.plugin-button[_ngcontent-%COMP%] {\n  color: #000;\n}\n\n.my-cool-menu-item[_ngcontent-%COMP%] {\n  display: flex;\n  padding-left: 10px;\n  padding-right: 10px;\n  border-bottom: solid 1px rgba(0,0,0,.12);\n  height: 48px;\n}\n\n.my-cool-menu-item[_ngcontent-%COMP%]   .title-and-image[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: flex-start;\n}\n\n.my-cool-menu-item[_ngcontent-%COMP%]   .title-and-image[_ngcontent-%COMP%]   .icon-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\ndiv[dir=rtl][_ngcontent-%COMP%]   .icon-container[_ngcontent-%COMP%] {\n  padding-left: 5px;\n}\n\ndiv[dir=ltr][_ngcontent-%COMP%]   .icon-container[_ngcontent-%COMP%] {\n  padding-right: 5px;\n}\n\n.my-cool-menu-item[_ngcontent-%COMP%]   .title-and-image[_ngcontent-%COMP%]   .label-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.my-cool-menu-item[_ngcontent-%COMP%]   .icon-arrow-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLDZDQUE2QztFQUM3QyxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixhQUFhO0VBQ2IsMkJBQTJCO0FBQzdCO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLDRDQUE0QztBQUM5Qzs7QUFFQTtFQUNFLFVBQVU7RUFDVixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsMENBQTBDO0FBQzVDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSwyQ0FBMkM7RUFDM0MsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixnQ0FBZ0M7RUFDaEMsZ0RBQWdEO0FBQ2xEOztBQUVBO0VBQ0UsV0FBVztFQUNYLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLHdDQUF3QztFQUN4QyxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRpbmcge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMC41cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gIHBhZGRpbmctYm90dG9tOiAyMHB4OztcclxufVxyXG5cclxuLmNvbnRhaW5lcntcclxuICB3aWR0aDogMTAwJTtcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbn1cclxuLm1lbnV7XHJcbiAgd2lkdGg6IDIwJTtcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICBib3JkZXItcmlnaHQ6IHNvbGlkIDAuNXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxufVxyXG5cclxuLmRlbW9zIHtcclxuICB3aWR0aDogNjAlO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG4uZm9vdGVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIGhlaWdodDogMjUwcHg7XHJcbiAgYm9yZGVyLXRvcDogc29saWQgMC41cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG59XHJcblxyXG4uY3JlZGl0IHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZy10b3A6IDIlO1xyXG4gIGNvbG9yOiByZ2JhKDEwNSwgMTA1LCAxMDUsIDAuNTYpO1xyXG59XHJcblxyXG5hIHtcclxuICBjb2xvcjogcmdiYSg4MiwgODIsIDgyLCAwLjcyMTU2ODYyNzQ1MDk4MDQpO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcblxyXG4uY29udGFjdCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmctdG9wOiAyJTtcclxuICBjb2xvcjogcmdiYSgxMDUsIDEwNSwgMTA1LCAwLjU2KTtcclxuICBib3gtc2hhZG93OiAwcHggLTRweCAxOXB4IC05cHggcmdiYSgwLCAwLCAwLCAuMik7XHJcbn1cclxuXHJcbi5jb250ZW50IHtcclxuICBwYWRkaW5nOiAyJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQwLCAyNDAsIDI0MCk7XHJcbn1cclxuXHJcbi5wbHVnaW4tYnV0dG9uIHtcclxuICBjb2xvcjogIzAwMDtcclxufVxyXG5cclxuLm15LWNvb2wtbWVudS1pdGVtIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHBhZGRpbmctbGVmdDogMTBweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCByZ2JhKDAsMCwwLC4xMik7XHJcbiAgaGVpZ2h0OiA0OHB4O1xyXG59XHJcblxyXG4ubXktY29vbC1tZW51LWl0ZW0gLnRpdGxlLWFuZC1pbWFnZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbn1cclxuXHJcbi5teS1jb29sLW1lbnUtaXRlbSAudGl0bGUtYW5kLWltYWdlIC5pY29uLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG5kaXZbZGlyPXJ0bF0gLmljb24tY29udGFpbmVyIHtcclxuICBwYWRkaW5nLWxlZnQ6IDVweDtcclxufVxyXG5cclxuZGl2W2Rpcj1sdHJdIC5pY29uLWNvbnRhaW5lciB7XHJcbiAgcGFkZGluZy1yaWdodDogNXB4O1xyXG59XHJcblxyXG4ubXktY29vbC1tZW51LWl0ZW0gLnRpdGxlLWFuZC1pbWFnZSAubGFiZWwtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5teS1jb29sLW1lbnUtaXRlbSAuaWNvbi1hcnJvdy1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
      data: {
        animation: [_projects_ng_material_multilevel_menu_src_public_api__WEBPACK_IMPORTED_MODULE_0__.ExpandedRTL, _projects_ng_material_multilevel_menu_src_public_api__WEBPACK_IMPORTED_MODULE_0__.ExpandedLTR]
      }
    });
  }
}

/***/ }),

/***/ 635:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3835);
/* harmony import */ var _modules_materials_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/materials.module */ 9590);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 4114);
/* harmony import */ var _projects_ng_material_multilevel_menu_src_public_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../projects/ng-material-multilevel-menu/src/public_api */ 2995);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ 92);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);







class AppModule {
  static {
    this.ɵfac = function AppModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AppModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent]
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
      providers: [_projects_ng_material_multilevel_menu_src_public_api__WEBPACK_IMPORTED_MODULE_2__.MultilevelMenuService],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__.BrowserAnimationsModule, _projects_ng_material_multilevel_menu_src_public_api__WEBPACK_IMPORTED_MODULE_2__.NgMaterialMultilevelMenuModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, _modules_materials_module__WEBPACK_IMPORTED_MODULE_0__.MaterialsModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__.BrowserAnimationsModule, _projects_ng_material_multilevel_menu_src_public_api__WEBPACK_IMPORTED_MODULE_2__.NgMaterialMultilevelMenuModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, _modules_materials_module__WEBPACK_IMPORTED_MODULE_0__.MaterialsModule]
  });
})();

/***/ }),

/***/ 9590:
/*!*********************************************!*\
  !*** ./src/app/modules/materials.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MaterialsModule: () => (/* binding */ MaterialsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/a11y */ 2102);
/* harmony import */ var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/clipboard */ 2352);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 854);
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/cdk/portal */ 9168);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/cdk/scrolling */ 9975);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/autocomplete */ 9771);
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/bottom-sheet */ 5244);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button-toggle */ 9864);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ 3777);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/checkbox */ 7024);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/chips */ 2772);
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/stepper */ 6622);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/datepicker */ 1977);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/dialog */ 2587);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/divider */ 4102);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/expansion */ 9322);
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/grid-list */ 6488);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/input */ 5541);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/list */ 943);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/menu */ 1034);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/core */ 4646);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/paginator */ 4624);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/progress-bar */ 6354);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/progress-spinner */ 1134);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/radio */ 3804);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/select */ 5175);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/sidenav */ 7049);
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/slider */ 4992);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/slide-toggle */ 8827);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/sort */ 2047);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/tabs */ 8223);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/toolbar */ 9552);
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/badge */ 6256);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/tooltip */ 640);
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/tree */ 8379);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);








































class MaterialsModule {
  static {
    this.ɵfac = function MaterialsModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MaterialsModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: MaterialsModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__.A11yModule, _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_3__.ClipboardModule, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__.DragDropModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_5__.MatAutocompleteModule, _angular_material_badge__WEBPACK_IMPORTED_MODULE_6__.MatBadgeModule, _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_7__.MatBottomSheetModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButtonModule, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_9__.MatButtonToggleModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCardModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__.MatCheckboxModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_12__.MatChipsModule, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_13__.MatStepperModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__.MatDatepickerModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__.MatDialogModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_16__.MatDividerModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_17__.MatExpansionModule, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_18__.MatGridListModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__.MatIconModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_20__.MatInputModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_21__.MatListModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_22__.MatMenuModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_23__.MatNativeDateModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_24__.MatPaginatorModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_25__.MatProgressBarModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_26__.MatProgressSpinnerModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_27__.MatRadioModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_23__.MatRippleModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_28__.MatSelectModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_29__.MatSidenavModule, _angular_material_slider__WEBPACK_IMPORTED_MODULE_30__.MatSliderModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_31__.MatSlideToggleModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_32__.MatSnackBarModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_33__.MatSortModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_34__.MatTabsModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_35__.MatToolbarModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_36__.MatTooltipModule, _angular_material_tree__WEBPACK_IMPORTED_MODULE_37__.MatTreeModule, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_38__.PortalModule, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_39__.ScrollingModule, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__.A11yModule, _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_3__.ClipboardModule, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__.DragDropModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_5__.MatAutocompleteModule, _angular_material_badge__WEBPACK_IMPORTED_MODULE_6__.MatBadgeModule, _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_7__.MatBottomSheetModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButtonModule, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_9__.MatButtonToggleModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCardModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__.MatCheckboxModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_12__.MatChipsModule, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_13__.MatStepperModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__.MatDatepickerModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__.MatDialogModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_16__.MatDividerModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_17__.MatExpansionModule, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_18__.MatGridListModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__.MatIconModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_20__.MatInputModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_21__.MatListModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_22__.MatMenuModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_23__.MatNativeDateModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_24__.MatPaginatorModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_25__.MatProgressBarModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_26__.MatProgressSpinnerModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_27__.MatRadioModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_23__.MatRippleModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_28__.MatSelectModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_29__.MatSidenavModule, _angular_material_slider__WEBPACK_IMPORTED_MODULE_30__.MatSliderModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_31__.MatSlideToggleModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_32__.MatSnackBarModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_33__.MatSortModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_34__.MatTabsModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_35__.MatToolbarModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_36__.MatTooltipModule, _angular_material_tree__WEBPACK_IMPORTED_MODULE_37__.MatTreeModule, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_38__.PortalModule, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_39__.ScrollingModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialsModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__.A11yModule, _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_3__.ClipboardModule, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__.DragDropModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_5__.MatAutocompleteModule, _angular_material_badge__WEBPACK_IMPORTED_MODULE_6__.MatBadgeModule, _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_7__.MatBottomSheetModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButtonModule, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_9__.MatButtonToggleModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCardModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__.MatCheckboxModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_12__.MatChipsModule, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_13__.MatStepperModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__.MatDatepickerModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__.MatDialogModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_16__.MatDividerModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_17__.MatExpansionModule, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_18__.MatGridListModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__.MatIconModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_20__.MatInputModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_21__.MatListModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_22__.MatMenuModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_23__.MatNativeDateModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_24__.MatPaginatorModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_25__.MatProgressBarModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_26__.MatProgressSpinnerModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_27__.MatRadioModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_23__.MatRippleModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_28__.MatSelectModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_29__.MatSidenavModule, _angular_material_slider__WEBPACK_IMPORTED_MODULE_30__.MatSliderModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_31__.MatSlideToggleModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_32__.MatSnackBarModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_33__.MatSortModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_34__.MatTabsModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_35__.MatToolbarModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_36__.MatTooltipModule, _angular_material_tree__WEBPACK_IMPORTED_MODULE_37__.MatTreeModule, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_38__.PortalModule, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_39__.ScrollingModule],
    exports: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__.A11yModule, _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_3__.ClipboardModule, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__.DragDropModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_5__.MatAutocompleteModule, _angular_material_badge__WEBPACK_IMPORTED_MODULE_6__.MatBadgeModule, _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_7__.MatBottomSheetModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButtonModule, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_9__.MatButtonToggleModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCardModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__.MatCheckboxModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_12__.MatChipsModule, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_13__.MatStepperModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__.MatDatepickerModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__.MatDialogModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_16__.MatDividerModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_17__.MatExpansionModule, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_18__.MatGridListModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__.MatIconModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_20__.MatInputModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_21__.MatListModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_22__.MatMenuModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_23__.MatNativeDateModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_24__.MatPaginatorModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_25__.MatProgressBarModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_26__.MatProgressSpinnerModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_27__.MatRadioModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_23__.MatRippleModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_28__.MatSelectModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_29__.MatSidenavModule, _angular_material_slider__WEBPACK_IMPORTED_MODULE_30__.MatSliderModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_31__.MatSlideToggleModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_32__.MatSnackBarModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_33__.MatSortModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_34__.MatTabsModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_35__.MatToolbarModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_36__.MatTooltipModule, _angular_material_tree__WEBPACK_IMPORTED_MODULE_37__.MatTreeModule, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_38__.PortalModule, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_39__.ScrollingModule]
  });
})();

/***/ }),

/***/ 5312:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
  production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 4429:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 635);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 5312);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.log(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4429)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map