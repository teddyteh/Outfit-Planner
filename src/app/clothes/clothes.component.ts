import { Component, OnInit } from '@angular/core';
import { ClothingService } from '../clothing.service';
import { Clothing } from '../models/clothing';

@Component({
  selector: 'app-clothes',
  templateUrl: './clothes.component.html',
  styleUrls: ['./clothes.component.css']
})
export class ClothesComponent implements OnInit {

  clothes: Clothing[];
  selectedClothing: Clothing;
  showImageEditor = false;

  constructor(private clothingService: ClothingService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.clothingService.getClothes()
      .subscribe(clothes => this.clothes = clothes);
  }

  selectClothing(clothing: Clothing): void {
    this.selectedClothing = clothing;
  }

  imageUploaded(imgurLink) {
    this.selectedClothing.photo = imgurLink;
    this.showImageEditor = false;
  }

  addClothing() {
    this.selectedClothing = new Clothing();
  }

}
