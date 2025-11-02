import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ExpandCollapseStatusEnum } from './app.model';
import { CONSTANT } from './constants';
import * as i0 from "@angular/core";
export class MultilevelMenuService {
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: MultilevelMenuService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: MultilevelMenuService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: MultilevelMenuService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGlsZXZlbC1tZW51LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1tYXRlcmlhbC1tdWx0aWxldmVsLW1lbnUvc3JjL2xpYi9tdWx0aWxldmVsLW1lbnUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBOEIsT0FBTyxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBQzFELE9BQU8sRUFBa0Isd0JBQXdCLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDdkUsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGFBQWEsQ0FBQzs7QUFLckMsTUFBTSxPQUFPLHFCQUFxQjtJQUhsQztRQUtVLHlCQUFvQixHQUFzQyxJQUFJLE9BQU8sRUFBNEIsQ0FBQztRQUMxRywwQkFBcUIsR0FBeUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFlBQVksRUFBRSxDQUFDO1FBRS9GLG1CQUFjLEdBQW9CLElBQUksT0FBTyxFQUFVLENBQUM7UUFDaEUsb0JBQWUsR0FBdUIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztLQXNFMUU7SUFwRVMsVUFBVTtRQUNoQixJQUFJLElBQUksR0FBRyxFQUFFLENBQUM7UUFDZCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDNUIsSUFBSSxJQUFJLFFBQVEsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLFFBQVEsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUN6RixDQUFDO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBQ0QsV0FBVyxDQUFDLEtBQXVCO1FBQ2pDLEtBQUssQ0FB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QUMsQ0FBQyxDQUFDLHdCQUF3QixDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3JGLENBQUM7SUFDRCxjQUFjLENBQUMsTUFBYztRQUMzQixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNqQyxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUM7SUFDOUIsQ0FBQzsrR0EzRVUscUJBQXFCO21IQUFyQixxQkFBcUIsY0FGcEIsTUFBTTs7NEZBRVAscUJBQXFCO2tCQUhqQyxVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUsIFN1YmplY3R9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBNdWx0aWxldmVsTm9kZSwgRXhwYW5kQ29sbGFwc2VTdGF0dXNFbnVtIH0gZnJvbSAnLi9hcHAubW9kZWwnO1xyXG5pbXBvcnQge0NPTlNUQU5UfSBmcm9tICcuL2NvbnN0YW50cyc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNdWx0aWxldmVsTWVudVNlcnZpY2Uge1xyXG4gIGZvdW5kTGlua09iamVjdDogTXVsdGlsZXZlbE5vZGU7XHJcbiAgcHJpdmF0ZSBleHBhbmRDb2xsYXBzZVN0YXR1czogU3ViamVjdDxFeHBhbmRDb2xsYXBzZVN0YXR1c0VudW0+ID0gbmV3IFN1YmplY3Q8RXhwYW5kQ29sbGFwc2VTdGF0dXNFbnVtPigpO1xyXG4gIGV4cGFuZENvbGxhcHNlU3RhdHVzJDogT2JzZXJ2YWJsZTxFeHBhbmRDb2xsYXBzZVN0YXR1c0VudW0+ID0gdGhpcy5leHBhbmRDb2xsYXBzZVN0YXR1cy5hc09ic2VydmFibGUoKTtcclxuXHJcbiAgcHJpdmF0ZSBzZWxlY3RlZE1lbnVJRDogU3ViamVjdDxzdHJpbmc+ID0gbmV3IFN1YmplY3Q8c3RyaW5nPigpO1xyXG4gIHNlbGVjdGVkTWVudUlEJDogT2JzZXJ2YWJsZTxzdHJpbmc+ID0gdGhpcy5zZWxlY3RlZE1lbnVJRC5hc09ic2VydmFibGUoKTtcclxuXHJcbiAgcHJpdmF0ZSBnZW5lcmF0ZUlkKCk6IHN0cmluZyB7XHJcbiAgICBsZXQgdGV4dCA9ICcnO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAyMDsgaSsrKSB7XHJcbiAgICAgIHRleHQgKz0gQ09OU1RBTlQuUE9TU0lCTEUuY2hhckF0KE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIENPTlNUQU5ULlBPU1NJQkxFLmxlbmd0aCkpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRleHQ7XHJcbiAgfVxyXG4gIGFkZFJhbmRvbUlkKG5vZGVzOiBNdWx0aWxldmVsTm9kZVtdKTogdm9pZCB7XHJcbiAgICBub2Rlcy5mb3JFYWNoKChub2RlOiBNdWx0aWxldmVsTm9kZSkgPT4ge1xyXG4gICAgICBub2RlLmlkID0gdGhpcy5nZW5lcmF0ZUlkKCk7XHJcbiAgICAgIGlmIChub2RlLml0ZW1zICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICB0aGlzLmFkZFJhbmRvbUlkKG5vZGUuaXRlbXMpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbiAgcmVjdXJzaXZlQ2hlY2tJZChub2RlOiBNdWx0aWxldmVsTm9kZSwgbm9kZUlkOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgIGlmIChub2RlLmlkID09PSBub2RlSWQpIHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAobm9kZS5pdGVtcyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgcmV0dXJuIG5vZGUuaXRlbXMuc29tZSgobmVzdGVkTm9kZTogTXVsdGlsZXZlbE5vZGUpID0+IHtcclxuICAgICAgICAgIHJldHVybiB0aGlzLnJlY3Vyc2l2ZUNoZWNrSWQobmVzdGVkTm9kZSwgbm9kZUlkKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBwcml2YXRlIGZpbmROb2RlUmVjdXJzaXZlbHkoe25vZGVzLCBsaW5rLCBpZH06IHtub2RlczogTXVsdGlsZXZlbE5vZGVbXSwgbGluaz86IHN0cmluZywgaWQ/OiBzdHJpbmd9KTogdm9pZCB7XHJcbiAgICBmb3IgKGxldCBub2RlSW5kZXggPSAwOyBub2RlSW5kZXggPCBub2Rlcy5sZW5ndGg7IG5vZGVJbmRleCsrKSB7XHJcbiAgICAgIGNvbnN0IG5vZGUgPSBub2Rlc1tub2RlSW5kZXhdO1xyXG4gICAgICBmb3IgKGNvbnN0IGtleSBpbiBub2RlKSB7XHJcbiAgICAgICAgaWYgKG5vZGUuaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG4gICAgICAgICAgaWYgKGVuY29kZVVSSShub2RlLmxpbmspID09PSBsaW5rKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZm91bmRMaW5rT2JqZWN0ID0gbm9kZTtcclxuICAgICAgICAgIH0gZWxzZSBpZiAobm9kZS5pZCA9PT0gaWQpIHtcclxuICAgICAgICAgICAgdGhpcy5mb3VuZExpbmtPYmplY3QgPSBub2RlO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKG5vZGUuaXRlbXMgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgIHRoaXMuZmluZE5vZGVSZWN1cnNpdmVseSh7XHJcbiAgICAgICAgICAgICAgICBub2Rlczogbm9kZS5pdGVtcyxcclxuICAgICAgICAgICAgICAgIGxpbms6IGxpbmsgPyBsaW5rIDogbnVsbCxcclxuICAgICAgICAgICAgICAgIGlkOiBpZCA/IGlkIDogbnVsbFxyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIGdldE1hdGNoZWRPYmplY3RCeVVybChub2RlczogTXVsdGlsZXZlbE5vZGVbXSwgbGluazogc3RyaW5nKTogTXVsdGlsZXZlbE5vZGUge1xyXG4gICAgdGhpcy5maW5kTm9kZVJlY3Vyc2l2ZWx5KHtub2RlcywgbGlua30pO1xyXG4gICAgcmV0dXJuIHRoaXMuZm91bmRMaW5rT2JqZWN0O1xyXG4gIH1cclxuICBnZXRNYXRjaGVkT2JqZWN0QnlJZChub2RlczogTXVsdGlsZXZlbE5vZGVbXSwgaWQ6IHN0cmluZyk6IE11bHRpbGV2ZWxOb2RlIHtcclxuICAgIHRoaXMuZmluZE5vZGVSZWN1cnNpdmVseSh7bm9kZXMsIGlkfSk7XHJcbiAgICByZXR1cm4gdGhpcy5mb3VuZExpbmtPYmplY3Q7XHJcbiAgfVxyXG4gIC8vIG92ZXJyaWRlcyBrZXktdmFsdWUgcGlwZSdzIGRlZmF1bHQgcmVvcmRlcmluZyAoYnkga2V5KSBieSBpbXBsZW1lbnRpbmcgZHVtbXkgY29tcHJhcmVyIGZ1bmN0aW9uXHJcbiAgLy8gaHR0cHM6Ly9hbmd1bGFyLmlvL2FwaS9jb21tb24vS2V5VmFsdWVQaXBlI2Rlc2NyaXB0aW9uXHJcbiAga3ZEdW1teUNvbXBhcmVyRm4oKSB7XHJcbiAgICByZXR1cm4gMDtcclxuICB9XHJcbiAgc2V0TWVudUV4cGFuZENvbGxhcHNlU3RhdHVzKHN0YXR1czogRXhwYW5kQ29sbGFwc2VTdGF0dXNFbnVtKTogdm9pZCB7XHJcbiAgICB0aGlzLmV4cGFuZENvbGxhcHNlU3RhdHVzLm5leHQoc3RhdHVzID8gc3RhdHVzIDogRXhwYW5kQ29sbGFwc2VTdGF0dXNFbnVtLm5ldXRyYWwpO1xyXG4gIH1cclxuICBzZWxlY3RNZW51QnlJRChtZW51SUQ6IHN0cmluZykge1xyXG4gICAgdGhpcy5zZWxlY3RlZE1lbnVJRC5uZXh0KG1lbnVJRCk7XHJcbiAgICByZXR1cm4gdGhpcy5mb3VuZExpbmtPYmplY3Q7XHJcbiAgfVxyXG59XHJcbiJdfQ==