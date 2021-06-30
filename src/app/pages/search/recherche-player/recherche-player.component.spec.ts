import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecherchePlayerComponent } from './recherche-player.component';

describe('RecherchePlayerComponent', () => {
  let component: RecherchePlayerComponent;
  let fixture: ComponentFixture<RecherchePlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecherchePlayerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecherchePlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
