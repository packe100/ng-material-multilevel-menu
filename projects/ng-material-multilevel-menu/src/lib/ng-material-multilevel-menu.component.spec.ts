import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Router } from '@angular/router';
import { NgMaterialMultilevelMenuComponent } from './ng-material-multilevel-menu.component';
import { MultilevelMenuService } from './multilevel-menu.service';

describe('NgMaterialMultilevelMenuComponent', () => {
  let component: NgMaterialMultilevelMenuComponent;
  let fixture: ComponentFixture<NgMaterialMultilevelMenuComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NgMaterialMultilevelMenuComponent ],
      providers: [
        MultilevelMenuService,
        {
          provide: Router,
          useValue: {
            events: { subscribe: () => {} },
            url: '/'
          }
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgMaterialMultilevelMenuComponent);
    component = fixture.componentInstance;
    component.items = [];
    component.configuration = {
      paddingAtStart: true,
      rtlLayout: false
    };
    component.ngOnChanges(); // Initialize subscriptions
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
