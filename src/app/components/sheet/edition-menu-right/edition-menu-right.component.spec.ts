import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditionMenuRightComponent } from './edition-menu-right.component';

describe('EditionMenuRightComponent', () => {
  let component: EditionMenuRightComponent;
  let fixture: ComponentFixture<EditionMenuRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditionMenuRightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditionMenuRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
