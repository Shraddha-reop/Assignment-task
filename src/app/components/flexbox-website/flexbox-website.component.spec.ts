import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexboxWebsiteComponent } from './flexbox-website.component';

describe('FlexboxWebsiteComponent', () => {
  let component: FlexboxWebsiteComponent;
  let fixture: ComponentFixture<FlexboxWebsiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlexboxWebsiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlexboxWebsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
