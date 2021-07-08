import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchSheetComponent } from './search-sheet.component';

describe('SearchSheetComponent', () => {
  let component: SearchSheetComponent;
  let fixture: ComponentFixture<SearchSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchSheetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
