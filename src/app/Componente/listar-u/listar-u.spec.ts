import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarU } from './listar-u';

describe('ListarU', () => {
  let component: ListarU;
  let fixture: ComponentFixture<ListarU>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarU]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarU);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
