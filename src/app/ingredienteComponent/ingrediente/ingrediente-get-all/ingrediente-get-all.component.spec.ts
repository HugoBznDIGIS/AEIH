import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredienteGetAllComponent } from './ingrediente-get-all.component';

describe('IngredienteGetAllComponent', () => {
  let component: IngredienteGetAllComponent;
  let fixture: ComponentFixture<IngredienteGetAllComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IngredienteGetAllComponent]
    });
    fixture = TestBed.createComponent(IngredienteGetAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
