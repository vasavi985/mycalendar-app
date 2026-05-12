import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AuthService }
from '../../services/auth.service';

import {
  Firestore,
  doc,
  getDoc
}
from '@angular/fire/firestore';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl:
    './login.component.html',
  styleUrls: [
    './login.component.css'
  ]
})
export class LoginComponent {

  email = '';
  password = '';

  constructor(
    private auth: AuthService,
    private router: Router,
    private firestore: Firestore
  ) {}

  async register() {

    try {

      await this.auth.register(
        this.email,
        this.password
      );

      alert(
        'Registered Successfully'
      );

      // New user
      this.router.navigate([
        '/setup-cycle'
      ]);

    } catch(error: any) {

      console.log(error);

      alert(
        error.message
      );
    }
  }

  async login() {

    try {

      const userCredential =
        await this.auth.login(
          this.email,
          this.password
        );

      const uid =
        userCredential.user.uid;

      // Check Firestore
      const docRef =
        doc(
          this.firestore,
          'users',
          uid
        );

      const docSnap =
        await getDoc(
          docRef
        );

      // User already setup cycle
      if (
        docSnap.exists()
      ) {

        this.router.navigate([
          '/today'
        ]);

      } else {

        // New user
        this.router.navigate([
          '/setup-cycle'
        ]);
      }

    } catch(error: any) {

      console.log(error);

      alert(
        error.message
      );
    }
  }
}