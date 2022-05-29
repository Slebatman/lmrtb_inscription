import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurnameComponent } from './surname.component';

describe('SurnameComponent', () => {
  let component: SurnameComponent;
  let fixture: ComponentFixture<SurnameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurnameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SurnameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
