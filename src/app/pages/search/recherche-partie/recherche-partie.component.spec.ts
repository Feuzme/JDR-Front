import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecherchePartieComponent } from './recherche-partie.component';

describe('RecherchePartieComponent', () => {
  let component: RecherchePartieComponent;
  let fixture: ComponentFixture<RecherchePartieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecherchePartieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecherchePartieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
