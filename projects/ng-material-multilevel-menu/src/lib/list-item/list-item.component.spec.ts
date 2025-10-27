import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Router } from '@angular/router';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ListItemComponent } from './list-item.component';
import { MultilevelMenuService } from '../multilevel-menu.service';

describe('ListItemComponent', () => {
  let component: ListItemComponent;
  let fixture: ComponentFixture<ListItemComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListItemComponent ],
      imports: [ NoopAnimationsModule ],
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
    fixture = TestBed.createComponent(ListItemComponent);
    component = fixture.componentInstance;
    // Initialize required inputs
    component.node = {
      label: 'Test',
      items: []
    };
    component.nodeConfiguration = {
      rtlLayout: false
    };
    component.nodeChildren = [];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
