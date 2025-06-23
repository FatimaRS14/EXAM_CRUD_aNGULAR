import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardarU } from './guardar-u';

describe('GuardarU', () => {
  let component: GuardarU;
  let fixture: ComponentFixture<GuardarU>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuardarU]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuardarU);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
