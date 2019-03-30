import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleTabsComponent } from './sample-tabs.component';

describe('SampleTabsComponent', () => {
  let component: SampleTabsComponent;
  let fixture: ComponentFixture<SampleTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SampleTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
