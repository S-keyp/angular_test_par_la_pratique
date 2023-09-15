import { TestBed } from '@angular/core/testing';

import { CompteurService } from './compteur.service';
import { inject } from '@angular/core';

describe('CompteurService', () => {
  // ...
  let service : CompteurService
  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(CompteurService);
  })
  it('le premier appel à incrementer() retourne 1', () => {
    const resultat = service.incrementer();
    expect(resultat).toBe(1);
  });
  it('2 appels à incrementer() retourne 2', () => {
    // appel 1
    service.incrementer();
    // appel 2
    const resultat = service.incrementer();
    expect(resultat).toBe(2);
  });
});

