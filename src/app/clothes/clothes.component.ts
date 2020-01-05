import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ClothingService } from '../clothing.service';
import { Clothing } from '../models/clothing';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-clothes',
  templateUrl: './clothes.component.html',
  styleUrls: ['./clothes.component.css']
})
export class ClothesComponent implements OnInit {

  constructor(private clothingService: ClothingService) {
  }

  ngOnInit() {
  }

  selectClothing(clothing: any): void {
    this.clothingService.selectClothing(clothing);
  }

  editImage() {
    this.clothingService.setShowImageEditor(true);
  }

  addClothing() {
    this.clothingService.selectClothing(new Clothing());
  }

  deleteClothing() {
    this.clothingService.deleteClothing();
  }

  clearSelectedClothing() {
    this.clothingService.cancelAddClothing();
  }

}
