import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationBasePluginComponent } from './creation-base-plugin.component';

describe('CreationBasePluginComponent', () => {
  let component: CreationBasePluginComponent;
  let fixture: ComponentFixture<CreationBasePluginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreationBasePluginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreationBasePluginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
