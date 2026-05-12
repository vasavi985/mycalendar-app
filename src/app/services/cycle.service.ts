import {
  Injectable
} from '@angular/core';

import {
  Firestore,
  doc,
  setDoc,
  getDoc
} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CycleService {

  constructor(
    private firestore:
    Firestore
  ) {}

  // Save user cycle data
  async saveCycleData(
    uid: string,
    data: any
  ) {

    const userRef =
      doc(
        this.firestore,
        `users/${uid}`
      );

    await setDoc(
      userRef,
      data
    );
  }

  // Get user cycle data
  async getCycleData(
    uid: string
  ) {

    const userRef =
      doc(
        this.firestore,
        `users/${uid}`
      );

    const docSnap =
      await getDoc(
        userRef
      );

    if (
      docSnap.exists()
    ) {

      return docSnap.data();
    }

    return null;
  }
}