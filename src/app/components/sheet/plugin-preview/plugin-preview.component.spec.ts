import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PluginPreviewComponent } from './plugin-preview.component';

describe('PluginPreviewComponent', () => {
  let component: PluginPreviewComponent;
  let fixture: ComponentFixture<PluginPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PluginPreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PluginPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
