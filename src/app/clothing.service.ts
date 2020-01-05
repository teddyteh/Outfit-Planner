import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Clothing } from './models/clothing';
import { CLOTHES } from './mock-clothes';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class ClothingService {

  // clothes: Clothing[];
  private clothesCollection: AngularFirestoreCollection<Clothing>;
  clothes: Observable<Clothing[]> = of([]);
  selectedClothing: Clothing;

  constructor(private afs: AngularFirestore, private afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe(authState => {
      if (authState && authState.uid) {
        console.log("uid " + authState.uid);
        this.clothesCollection = afs.collection<Clothing>('clothes', ref => ref.where('user', '==', authState.uid));
        this.clothes = this.clothesCollection.valueChanges({ idField: 'id' });
        this.clothes.subscribe(c => console.log(c));
      }
    });
  }

  addClothing(clothing: Clothing) {
    clothing.user = this.afAuth.auth.currentUser.uid;

    console.log(clothing);

    this.clothesCollection.add({ ...clothing }).then(done => this.selectedClothing = null);
  }

  deleteClothing() {
    return this.afs.doc<Clothing>('clothes/' + this.selectedClothing.id).delete().then(done => this.selectedClothing = null);
  }

  selectClothing(clothing: Clothing) {
    this.selectedClothing = clothing;
  }

  cancelAddClothing() {
    this.selectedClothing = null;
  }

}
