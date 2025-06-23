import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarU } from './editar-u';

describe('EditarU', () => {
  let component: EditarU;
  let fixture: ComponentFixture<EditarU>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarU]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarU);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
