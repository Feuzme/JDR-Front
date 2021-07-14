import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasePluginCardComponent } from './base-plugin-card.component';

describe('BasePluginCardComponent', () => {
  let component: BasePluginCardComponent;
  let fixture: ComponentFixture<BasePluginCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasePluginCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasePluginCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
