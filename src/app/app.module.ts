import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { ClothesComponent } from './clothes/clothes.component';
import { ClothingComponent } from './clothing/clothing.component';
import { ImageEditorComponent } from './image-editor/image-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    ClothesComponent,
    ClothingComponent,
    ImageEditorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
