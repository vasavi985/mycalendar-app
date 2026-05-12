import {
  Component,
  OnInit
} from '@angular/core';

import {
  CommonModule
} from '@angular/common';

import {
  Router,
  RouterModule
} from '@angular/router';

import {
  Auth
} from '@angular/fire/auth';

import {
  Firestore,
  doc,
  getDoc
} from '@angular/fire/firestore';

import {
  BottomNavbarComponent
} from '../../components/bottom-navbar/bottom-navbar.component';

@Component({
  selector: 'app-today',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    BottomNavbarComponent
  ],
  templateUrl:
    './today.component.html',
  styleUrls: [
    './today.component.css'
  ]
})
export class TodayComponent
implements OnInit {

  title = 'Period';

  periodDay = '';

  nextPeriod = '';

  cycleDay = 0;

  fertileDate = '';

  periodLength = 0;

  constructor(
    private auth: Auth,
    private router: Router,
    private firestore: Firestore
  ) {}

  async ngOnInit() {

    this.auth.onAuthStateChanged(
      async (user) => {

        if (!user) {

          this.router.navigate([
            '/'
          ]);

          return;
        }

        const uid =
          user.uid;

        // Get user data
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

        // No setup data
        if (!docSnap.exists()) {

          this.router.navigate([
            '/setup-cycle'
          ]);

          return;
        }

        const cycleData =
          docSnap.data();

        const startDate =
          new Date(
            cycleData[
              'lastPeriodDate'
            ]
          );

        this.periodLength =
          Number(
            cycleData[
              'periodLength'
            ]
          );

        const cycleLength =
          Number(
            cycleData[
              'cycleLength'
            ]
          );

        const today =
          new Date();

        const diffTime =
          today.getTime() -
          startDate.getTime();

        let daysPassed =
          Math.floor(
            diffTime /
            (1000 * 60 * 60 * 24)
          );

        if (
          daysPassed < 0
        ) {

          daysPassed = 0;
        }

        // Cycle Day
        this.cycleDay =
          (
            daysPassed %
            cycleLength
          ) + 1;

        // Period status
        if (
          this.cycleDay <=
          this.periodLength
        ) {

          this.periodDay =
            `${this.cycleDay} Day`;

        } else {

          const daysLeft =
            cycleLength -
            this.cycleDay + 1;

          this.periodDay =
            `${daysLeft} DAYS LEFT`;
        }

        // Next Period
        const nextDate =
          new Date(
            startDate
          );

        nextDate.setDate(
          startDate.getDate() +
          cycleLength
        );

        this.nextPeriod =
          nextDate.toDateString();

        // Fertile Date
        const fertile =
          new Date(
            startDate
          );

        fertile.setDate(
          startDate.getDate() +
          (
            cycleLength - 14
          )
        );

        this.fertileDate =
          fertile.toDateString();
      }
    );
  }

  goToPeriodEdit() {

    alert(
      'Period Edit Page Coming Soon'
    );
  }
}