import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompteurService {
  // TODO ajouter un attribut "nombre"
  private nombre = 0;
  constructor() { }
  // TODO ajouter une méthode "incrementer"
  incrementer(): number {
    return ++this.nombre;
  }
}
