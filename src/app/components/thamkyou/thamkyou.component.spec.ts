import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThamkyouComponent } from './thamkyou.component';

describe('ThamkyouComponent', () => {
  let component: ThamkyouComponent;
  let fixture: ComponentFixture<ThamkyouComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThamkyouComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThamkyouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
