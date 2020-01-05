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

  selectedClothing: any;
  @Input() showImageEditor = false;
  @Output() showImageEditorChange = new EventEmitter<boolean>();

  constructor(private clothingService: ClothingService) {
  }

  ngOnInit() {
  }

  selectClothing(clothing: any): void {
    this.clothingService.selectClothing(clothing);
  }

  editImage() {
    this.showImageEditorChange.emit(true);
  }

  imageUploaded(imgurLink) {
    this.selectedClothing.photo = imgurLink;
    this.showImageEditorChange.emit(false);
  }

  addClothing() {
    this.clothingService.selectClothing(new Clothing());
  }

  deleteClothing() {
    this.clothingService.deleteClothing().then(done => this.selectedClothing = null);
  }

  clearSelectedClothing() {
    this.clothingService.cancelAddClothing();
  }

}
