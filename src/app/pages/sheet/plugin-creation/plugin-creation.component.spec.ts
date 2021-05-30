import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PluginCreationComponent } from './plugin-creation.component';

describe('PluginCreationComponent', () => {
  let component: PluginCreationComponent;
  let fixture: ComponentFixture<PluginCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PluginCreationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PluginCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
