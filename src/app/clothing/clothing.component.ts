import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Clothing } from '../models/clothing';
import { ClothingService } from '../clothing.service';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-clothing',
  templateUrl: './clothing.component.html',
  styleUrls: ['./clothing.component.css']
})
export class ClothingComponent implements OnInit {

  @Input() clothing: Clothing;
  @Output() editImage = new EventEmitter();

  constructor(private clothingService: ClothingService) { }

  ngOnInit() {
  }

  editInImageEditor() {
    this.editImage.emit();
  }

  updateClothing() {
    if (!this.clothing.id)
      this.clothingService.addClothing(this.clothing);
    else {
      this.clothingService.updateClothing(this.clothing);
    }
  }
}
