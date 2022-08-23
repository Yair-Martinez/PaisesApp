import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaisDetallesComponent } from './pais-detalles.component';

describe('PaisDetallesComponent', () => {
  let component: PaisDetallesComponent;
  let fixture: ComponentFixture<PaisDetallesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaisDetallesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaisDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
