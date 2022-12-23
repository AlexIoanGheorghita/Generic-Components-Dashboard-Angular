import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericRadioComponent } from './generic-radio.component';

describe('GenericRadioComponent', () => {
  let component: GenericRadioComponent;
  let fixture: ComponentFixture<GenericRadioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenericRadioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenericRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
