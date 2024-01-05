import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredienteFormComponent } from './ingrediente-form.component';

describe('IngredienteFormComponent', () => {
  let component: IngredienteFormComponent;
  let fixture: ComponentFixture<IngredienteFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IngredienteFormComponent]
    });
    fixture = TestBed.createComponent(IngredienteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
