import { Component, OnInit, AfterViewInit, Output, EventEmitter } from '@angular/core';

declare var MagicEdge: any;

@Component({
  selector: 'app-image-editor',
  templateUrl: './image-editor.component.html',
  styleUrls: ['../../magic-edge/css/magic-edge.css', '../../magic-edge/css/farbtastic.css']
})
export class ImageEditorComponent implements OnInit, AfterViewInit {

  @Output() imageUploaded = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    var me = new MagicEdge(function (imgurLink) {
      console.log(imgurLink);
      this.imageUploaded.emit(imgurLink);
    }.bind(this));
    me.setConfig({
      width: "full",
      height: "full",
      zoomMultipliers: [0.1, 0.2, 0.4, 0.7, 1, 1.5, 2, 2.5, 3, 4, 6, 8, 10, 14, 20],
      saveNameSufix: "transparent-",
      saveAction: "download",
      ajaxUrl: "ajax.php",
      magicWandTolerance: 5,
      magicWandBorderWidth: 10,
      blurFilter: 0,
      featherFilter: 5,
      autoCrop: true
    });
    me.init(document.getElementById("MagicEdgeHolder"));
  }

}
