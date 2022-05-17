import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescribeyourselfComponent } from './describeyourself.component';

describe('DescribeyourselfComponent', () => {
  let component: DescribeyourselfComponent;
  let fixture: ComponentFixture<DescribeyourselfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescribeyourselfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DescribeyourselfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
