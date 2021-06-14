import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationMenuLeftComponent } from './creation-menu-left.component';

describe('CreationMenuLeftComponent', () => {
  let component: CreationMenuLeftComponent;
  let fixture: ComponentFixture<CreationMenuLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreationMenuLeftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreationMenuLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
