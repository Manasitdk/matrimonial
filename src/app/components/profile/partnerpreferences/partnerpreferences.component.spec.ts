import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnerpreferencesComponent } from './partnerpreferences.component';

describe('PartnerpreferencesComponent', () => {
  let component: PartnerpreferencesComponent;
  let fixture: ComponentFixture<PartnerpreferencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartnerpreferencesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartnerpreferencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
