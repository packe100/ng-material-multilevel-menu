import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ListItemContentComponent } from './list-item-content.component';

describe('ListItemContentComponent', () => {
  let component: ListItemContentComponent;
  let fixture: ComponentFixture<ListItemContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListItemContentComponent ],
      imports: [ NoopAnimationsModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListItemContentComponent);
    component = fixture.componentInstance;
    // Initialize required inputs
    component.node = {
      label: 'Test',
      externalRedirect: false
    };
    component.isRtlLayout = false;
    component.nodeConfiguration = {};
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
