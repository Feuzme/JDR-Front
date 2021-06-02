import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameInfoBottomComponent } from './game-info-bottom.component';

describe('GameInfoBottomComponent', () => {
  let component: GameInfoBottomComponent;
  let fixture: ComponentFixture<GameInfoBottomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameInfoBottomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameInfoBottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
