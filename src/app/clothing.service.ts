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

  constructor(private afs: AngularFirestore, private afAuth: AngularFireAuth) {
    let that = this;
    this.afAuth.authState.subscribe(authState => {
      if (authState.uid) {
        console.log("uid " + authState.uid);
        that.clothesCollection = afs.collection<Clothing>('clothes', ref => ref.where('user', '==', authState.uid));
        that.clothes = this.clothesCollection.valueChanges();
        that.clothes.subscribe(c => console.log(c));
      }
    });
  }

  addClothing(clothing: Clothing) {
    clothing.user = this.afAuth.auth.currentUser.uid;

    console.log(clothing);

    this.clothesCollection.add({ ...clothing });
  }

}
