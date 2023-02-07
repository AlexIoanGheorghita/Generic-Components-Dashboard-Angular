import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericRendererComponent } from './generic-renderer.component';

describe('GenericRendererComponent', () => {
  let component: GenericRendererComponent;
  let fixture: ComponentFixture<GenericRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenericRendererComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenericRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
