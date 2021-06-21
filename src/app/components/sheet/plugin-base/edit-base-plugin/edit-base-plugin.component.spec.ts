import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBasePluginComponent } from './edit-base-plugin.component';

describe('EditBasePluginComponent', () => {
  let component: EditBasePluginComponent;
  let fixture: ComponentFixture<EditBasePluginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditBasePluginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBasePluginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
