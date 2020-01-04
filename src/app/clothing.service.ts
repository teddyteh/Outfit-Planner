import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Clothing } from './models/clothing';
import { CLOTHES } from './mock-clothes';

@Injectable({
  providedIn: 'root'
})
export class ClothingService {

  clothes: Clothing[];

  constructor() {
    this.clothes = CLOTHES;
  }

  getClothes(): Observable<Clothing[]> {
    return of(this.clothes);
  }

  addClothing(clothing: Clothing) {
    clothing.id = this.clothes.length + 1;
    this.clothes.push(clothing);
  }

}
