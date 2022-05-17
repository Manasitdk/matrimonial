import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingMatchesComponent } from './listing-matches.component';

describe('ListingMatchesComponent', () => {
  let component: ListingMatchesComponent;
  let fixture: ComponentFixture<ListingMatchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListingMatchesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingMatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
