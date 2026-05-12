import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { Auth }
from '@angular/fire/auth';

import {
  Firestore,
  doc,
  setDoc
}
from '@angular/fire/firestore';

@Component({
  selector: 'app-setup-cycle',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl:
    './setup-cycle.component.html',
  styleUrls: [
    './setup-cycle.component.css'
  ]
})
export class SetupCycleComponent {

  lastPeriodDate = '';

  periodLength = 5;

  cycleLength = 28;

  constructor(
    private router: Router,
    private auth: Auth,
    private firestore: Firestore
  ) {}

  async saveCycle() {

    // Get logged-in user
    const user =
      this.auth.currentUser;

    // User not found
    if (!user) {

      alert(
        'Please login again'
      );

      this.router.navigate([
        '/'
      ]);

      return;
    }

    const uid =
      user.uid;

    // User cycle data
    const cycleData = {

      lastPeriodDate:
        this.lastPeriodDate,

      periodLength:
        Number(
          this.periodLength
        ),

      cycleLength:
        Number(
          this.cycleLength
        )
    };

    try {

      // Save in Firestore
      await setDoc(

        doc(
          this.firestore,
          'users',
          uid
        ),

        cycleData
      );

      console.log(
        'Cycle Data Saved'
      );

      alert(
        'Cycle Data Saved'
      );

      // Go to Today page
      await this.router.navigate([
        '/today'
      ]);

    } catch(error) {

      console.error(
        'Firestore Error:',
        error
      );

      alert(
        'Error saving data'
      );
    }
  }
}