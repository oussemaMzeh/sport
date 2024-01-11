import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchScoreComponent } from './search-score.component';

describe('SearchScoreComponent', () => {
  let component: SearchScoreComponent;
  let fixture: ComponentFixture<SearchScoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchScoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
