import { CommonModule } from '@angular/common';
import * as i0 from '@angular/core';
import { NgModule, Injectable, EventEmitter, ContentChild, Output, Input, Component } from '@angular/core';
import * as i1 from '@angular/router';
import { RouterModule, NavigationEnd } from '@angular/router';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { Subject } from 'rxjs';
import { trigger, state, transition, style, group, animate } from '@angular/animations';

class MaterialsModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.15", ngImport: i0, type: MaterialsModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "19.2.15", ngImport: i0, type: MaterialsModule, imports: [MatIconModule,
            MatListModule,
            MatRippleModule], exports: [MatIconModule,
            MatListModule,
            MatRippleModule] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "19.2.15", ngImport: i0, type: MaterialsModule, imports: [MatIconModule,
            MatListModule,
            MatRippleModule, MatIconModule,
            MatListModule,
            MatRippleModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.15", ngImport: i0, type: MaterialsModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        MatIconModule,
                        MatListModule,
                        MatRippleModule,
                    ],
                    declarations: [],
                    exports: [
                        MatIconModule,
                        MatListModule,
                        MatRippleModule,
                    ]
                }]
        }] });

class NgMaterialMultilevelMenuModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.15", ngImport: i0, type: NgMaterialMultilevelMenuModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "19.2.15", ngImport: i0, type: NgMaterialMultilevelMenuModule, imports: [CommonModule,
            MaterialsModule,
            RouterModule] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "19.2.15", ngImport: i0, type: NgMaterialMultilevelMenuModule, imports: [CommonModule,
            MaterialsModule,
            RouterModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.15", ngImport: i0, type: NgMaterialMultilevelMenuModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        MaterialsModule,
                        RouterModule,
                    ]
                }]
        }] });

var ExpandCollapseStatusEnum;
(function (ExpandCollapseStatusEnum) {
    ExpandCollapseStatusEnum["expand"] = "expand";
    ExpandCollapseStatusEnum["collapse"] = "collapse";
    ExpandCollapseStatusEnum["neutral"] = "neutral";
})(ExpandCollapseStatusEnum || (ExpandCollapseStatusEnum = {}));

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

class CommonUtils {
    static { this.isNullOrUndefinedOrEmpty = function (object) {
        return CommonUtils.isNullOrUndefined(object) || object === '';
    }; }
    static { this.isNullOrUndefined = function (object) {
        return object === null || object === undefined;
    }; }
}

class MultilevelMenuService {
    constructor() {
        this.expandCollapseStatus = new Subject();
        this.expandCollapseStatus$ = this.expandCollapseStatus.asObservable();
        this.selectedMenuID = new Subject();
        this.selectedMenuID$ = this.selectedMenuID.asObservable();
    }
    generateId() {
        let text = '';
        for (let i = 0; i < 20; i++) {
            text += CONSTANT.POSSIBLE.charAt(Math.floor(Math.random() * CONSTANT.POSSIBLE.length));
        }
        return text;
    }
    addRandomId(nodes) {
        nodes.forEach((node) => {
            node.id = this.generateId();
            if (node.items !== undefined) {
                this.addRandomId(node.items);
            }
        });
    }
    recursiveCheckId(node, nodeId) {
        if (node.id === nodeId) {
            return true;
        }
        else {
            if (node.items !== undefined) {
                return node.items.some((nestedNode) => {
                    return this.recursiveCheckId(nestedNode, nodeId);
                });
            }
        }
    }
    findNodeRecursively({ nodes, link, id }) {
        for (let nodeIndex = 0; nodeIndex < nodes.length; nodeIndex++) {
            const node = nodes[nodeIndex];
            for (const key in node) {
                if (node.hasOwnProperty(key)) {
                    if (encodeURI(node.link) === link) {
                        this.foundLinkObject = node;
                    }
                    else if (node.id === id) {
                        this.foundLinkObject = node;
                    }
                    else {
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
        this.findNodeRecursively({ nodes, link });
        return this.foundLinkObject;
    }
    getMatchedObjectById(nodes, id) {
        this.findNodeRecursively({ nodes, id });
        return this.foundLinkObject;
    }
    // overrides key-value pipe's default reordering (by key) by implementing dummy comprarer function
    // https://angular.io/api/common/KeyValuePipe#description
    kvDummyComparerFn() {
        return 0;
    }
    setMenuExpandCollapseStatus(status) {
        this.expandCollapseStatus.next(status ? status : ExpandCollapseStatusEnum.neutral);
    }
    selectMenuByID(menuID) {
        this.selectedMenuID.next(menuID);
        return this.foundLinkObject;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.15", ngImport: i0, type: MultilevelMenuService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "19.2.15", ngImport: i0, type: MultilevelMenuService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.15", ngImport: i0, type: MultilevelMenuService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }] });

class NgMaterialMultilevelMenuComponent {
    constructor(router, multilevelMenuService) {
        this.router = router;
        this.multilevelMenuService = multilevelMenuService;
        this.configuration = null;
        this.selectedItem = new EventEmitter();
        this.selectedLabel = new EventEmitter();
        this.menuIsReady = new EventEmitter();
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
        this.nodeExpandCollapseStatus = ExpandCollapseStatusEnum.neutral;
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
        if (!CommonUtils.isNullOrUndefinedOrEmpty(this.configuration) &&
            this.configuration.interfaceWithRoute !== null && this.configuration.interfaceWithRoute) {
            this.router.events
                .subscribe((event) => {
                if (event instanceof NavigationEnd) {
                    this.updateNodeByURL(event.urlAfterRedirects);
                }
            });
            this.updateNodeByURL(this.router.url);
        }
    }
    updateNodeByURL(url) {
        const foundNode = this.multilevelMenuService.getMatchedObjectByUrl(this.items, url);
        if (foundNode !== undefined && !CommonUtils.isNullOrUndefinedOrEmpty(foundNode.link)
        // && !foundNode.disabled // Prevent route redirection for disabled menu
        ) {
            this.currentNode = foundNode;
            if (!CommonUtils.isNullOrUndefined(foundNode.dontEmit) && !foundNode.dontEmit) {
                this.selectedListItem(foundNode);
            }
        }
    }
    checkValidData() {
        if (this.items === undefined || (Array.isArray(this.items) && this.items.length === 0)) {
            console.warn(CONSTANT.ERROR_MESSAGE);
            return;
        }
        this.items = this.items.filter(n => !n.hidden);
        this.multilevelMenuService.addRandomId(this.items);
        this.isInvalidData = false;
    }
    detectInvalidConfig() {
        if (CommonUtils.isNullOrUndefinedOrEmpty(this.configuration)) {
            this.isInvalidConfig = true;
        }
        else {
            this.isInvalidConfig = false;
            const config = this.configuration;
            if (!CommonUtils.isNullOrUndefined(config.paddingAtStart) &&
                typeof config.paddingAtStart === 'boolean') {
                this.nodeConfig.paddingAtStart = config.paddingAtStart;
            }
            if (!CommonUtils.isNullOrUndefinedOrEmpty(config.listBackgroundColor)) {
                this.nodeConfig.listBackgroundColor = config.listBackgroundColor;
            }
            if (!CommonUtils.isNullOrUndefinedOrEmpty(config.fontColor)) {
                this.nodeConfig.fontColor = config.fontColor;
            }
            if (!CommonUtils.isNullOrUndefinedOrEmpty(config.selectedListFontColor)) {
                this.nodeConfig.selectedListFontColor = config.selectedListFontColor;
            }
            if (!CommonUtils.isNullOrUndefined(config.interfaceWithRoute) &&
                typeof config.interfaceWithRoute === 'boolean') {
                this.nodeConfig.interfaceWithRoute = config.interfaceWithRoute;
            }
            if (!CommonUtils.isNullOrUndefined(config.collapseOnSelect) &&
                typeof config.collapseOnSelect === 'boolean') {
                this.nodeConfig.collapseOnSelect = config.collapseOnSelect;
            }
            if (!CommonUtils.isNullOrUndefined(config.highlightOnSelect) &&
                typeof config.highlightOnSelect === 'boolean') {
                this.nodeConfig.highlightOnSelect = config.highlightOnSelect;
            }
            if (!CommonUtils.isNullOrUndefined(config.useDividers) &&
                typeof config.useDividers === 'boolean') {
                this.nodeConfig.useDividers = config.useDividers;
            }
            if (!CommonUtils.isNullOrUndefined(config.rtlLayout) &&
                typeof config.rtlLayout === 'boolean') {
                this.nodeConfig.rtlLayout = config.rtlLayout;
            }
            if (!CommonUtils.isNullOrUndefined(config.customTemplate) &&
                typeof config.customTemplate === 'boolean') {
                this.nodeConfig.customTemplate = config.customTemplate;
            }
        }
        this.checkValidData();
    }
    initExpandCollapseStatus() {
        this.expandCollapseStatusSubscription = this.multilevelMenuService.expandCollapseStatus$
            .subscribe((expandCollapseStatus) => {
            this.nodeExpandCollapseStatus = expandCollapseStatus ? expandCollapseStatus : ExpandCollapseStatusEnum.neutral;
        }, () => {
            this.nodeExpandCollapseStatus = ExpandCollapseStatusEnum.neutral;
        });
    }
    initSelectedMenuID() {
        this.selectMenuByIDSubscription = this.multilevelMenuService.selectedMenuID$.subscribe((selectedMenuID) => {
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
        if (!this.isInvalidConfig && !CommonUtils.isNullOrUndefinedOrEmpty(this.configuration.classname)) {
            return `${CONSTANT.DEFAULT_CLASS_NAME} ${this.configuration.classname}`;
        }
        return CONSTANT.DEFAULT_CLASS_NAME;
    }
    getGlobalStyle() {
        if (!this.isInvalidConfig) {
            const styles = {
                background: null
            };
            if (!CommonUtils.isNullOrUndefinedOrEmpty(this.configuration.backgroundColor)) {
                styles.background = this.configuration.backgroundColor;
            }
            return styles;
        }
    }
    isRtlLayout() {
        return this.nodeConfig.rtlLayout;
    }
    selectedListItem(event) {
        this.nodeExpandCollapseStatus = ExpandCollapseStatusEnum.neutral;
        this.currentNode = event;
        if (!CommonUtils.isNullOrUndefined(event.dontEmit) && event.dontEmit) {
            return;
        }
        if (event.items === undefined && (!event.onSelected || typeof event.onSelected !== 'function')) {
            this.selectedItem.emit(event);
        }
        else {
            this.selectedLabel.emit(event);
        }
    }
    ngOnDestroy() {
        this.expandCollapseStatusSubscription.unsubscribe();
        this.selectMenuByIDSubscription.unsubscribe();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.15", ngImport: i0, type: NgMaterialMultilevelMenuComponent, deps: [{ token: i1.Router }, { token: MultilevelMenuService }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.15", type: NgMaterialMultilevelMenuComponent, isStandalone: true, selector: "ng-material-multilevel-menu", inputs: { items: "items", configuration: "configuration" }, outputs: { selectedItem: "selectedItem", selectedLabel: "selectedLabel", menuIsReady: "menuIsReady" }, queries: [{ propertyName: "listTemplate", first: true, predicate: ["listTemplate"], descendants: true, static: true }], usesOnChanges: true, ngImport: i0, template: "<div [ngClass]=\"getClassName()\" [ngStyle]=\"getGlobalStyle()\" *ngIf='!isInvalidData && items.length !== 0' [dir]=\"isRtlLayout() ? 'rtl' : 'ltr'\">\r\n  <mat-list>\r\n    <ng-list-item\r\n      *ngFor=\"let node of items | keyvalue: multilevelMenuService.kvDummyComparerFn\"\r\n      [nodeConfiguration]='nodeConfig'\r\n      [node]='node.value'\r\n      [level]=\"1\"\r\n      [submenuLevel]=\"node.key\"\r\n      [selectedNode]='currentNode'\r\n      [nodeExpandCollapseStatus]='nodeExpandCollapseStatus'\r\n      (selectedItem)=\"selectedListItem($event)\"\r\n      [listTemplate] = \"listTemplate\"\r\n    >\r\n    </ng-list-item>\r\n  </mat-list>\r\n</div>\r\n", styles: [".amml-container .mat-list-base{padding-top:unset}.amml-item{line-height:48px;display:flex;justify-content:space-between;position:relative}.anml-data{width:100%;text-transform:capitalize;display:flex;justify-content:flex-start}.amml-icon-fa{font-size:20px}.amml-icon{line-height:48px}.active{color:#1976d2}div[dir=ltr] .amml-icon{margin-right:15px}div[dir=ltr] .amml-submenu{margin-left:16px}div[dir=rtl] .amml-icon{margin-left:15px}div[dir=rtl] .amml-submenu{margin-right:16px}\n"] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.15", ngImport: i0, type: NgMaterialMultilevelMenuComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ng-material-multilevel-menu', template: "<div [ngClass]=\"getClassName()\" [ngStyle]=\"getGlobalStyle()\" *ngIf='!isInvalidData && items.length !== 0' [dir]=\"isRtlLayout() ? 'rtl' : 'ltr'\">\r\n  <mat-list>\r\n    <ng-list-item\r\n      *ngFor=\"let node of items | keyvalue: multilevelMenuService.kvDummyComparerFn\"\r\n      [nodeConfiguration]='nodeConfig'\r\n      [node]='node.value'\r\n      [level]=\"1\"\r\n      [submenuLevel]=\"node.key\"\r\n      [selectedNode]='currentNode'\r\n      [nodeExpandCollapseStatus]='nodeExpandCollapseStatus'\r\n      (selectedItem)=\"selectedListItem($event)\"\r\n      [listTemplate] = \"listTemplate\"\r\n    >\r\n    </ng-list-item>\r\n  </mat-list>\r\n</div>\r\n", styles: [".amml-container .mat-list-base{padding-top:unset}.amml-item{line-height:48px;display:flex;justify-content:space-between;position:relative}.anml-data{width:100%;text-transform:capitalize;display:flex;justify-content:flex-start}.amml-icon-fa{font-size:20px}.amml-icon{line-height:48px}.active{color:#1976d2}div[dir=ltr] .amml-icon{margin-right:15px}div[dir=ltr] .amml-submenu{margin-left:16px}div[dir=rtl] .amml-icon{margin-left:15px}div[dir=rtl] .amml-submenu{margin-right:16px}\n"] }]
        }], ctorParameters: () => [{ type: i1.Router }, { type: MultilevelMenuService }], propDecorators: { items: [{
                type: Input
            }], configuration: [{
                type: Input
            }], selectedItem: [{
                type: Output
            }], selectedLabel: [{
                type: Output
            }], menuIsReady: [{
                type: Output
            }], listTemplate: [{
                type: ContentChild,
                args: ['listTemplate', { static: true }]
            }] } });

const SlideInOut = trigger('SlideInOut', [
    state('in', style({ height: '*', opacity: 0 })),
    transition(':leave', [
        style({ height: '*', opacity: 0.2 }),
        group([
            animate(200, style({ height: 0 })),
            animate('200ms ease-out', style({ opacity: 0 }))
        ])
    ]),
    transition(':enter', [
        style({ height: '0', opacity: 0 }),
        group([
            animate(200, style({ height: '*' })),
            animate('400ms ease-out', style({ opacity: 1 }))
        ])
    ])
]);
const ExpandedLTR = trigger('ExpandedLTR', [
    state('no', style({ transform: 'rotate(-90deg)' })),
    state('yes', style({ transform: 'rotate(0deg)', })),
    transition('no => yes', animate(200)),
    transition('yes => no', animate(200))
]);
const ExpandedRTL = trigger('ExpandedRTL', [
    state('no', style({ transform: 'rotate(90deg)' })),
    state('yes', style({ transform: 'rotate(0deg)', })),
    transition('no => yes', animate(200)),
    transition('yes => no', animate(200))
]);

/*
 * Public API Surface of ng-material-multilevel-menu
 */

/**
 * Generated bundle index. Do not edit.
 */

export { ExpandCollapseStatusEnum, ExpandedLTR, ExpandedRTL, MultilevelMenuService, NgMaterialMultilevelMenuComponent, NgMaterialMultilevelMenuModule, SlideInOut };
//# sourceMappingURL=ng-mat-multilevel-menu.mjs.map
