import { TestBed } from '@angular/core/testing';

import { RestauranteRecetaService } from './restaurante-receta.service';

describe('RestauranteRecetaService', () => {
  let service: RestauranteRecetaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestauranteRecetaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
