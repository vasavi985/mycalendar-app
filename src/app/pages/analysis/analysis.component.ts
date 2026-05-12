import {
  Component,
  OnInit
} from '@angular/core';

import {
  CommonModule
} from '@angular/common';

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
  selector: 'app-analysis',
  standalone: true,
  imports: [
    CommonModule,
    BottomNavbarComponent
  ],
  templateUrl:
    './analysis.component.html',
  styleUrls: [
    './analysis.component.css'
  ]
})
export class AnalysisComponent
implements OnInit {

  cycleLength = 0;

  periodLength = 0;

  lastPeriodDate = '';

  nextPeriod = '';

  fertileDate = '';

  cycleDay = 0;

  constructor(
    private auth: Auth,
    private firestore:
    Firestore
  ) {}

  async ngOnInit() {

    this.auth
    .onAuthStateChanged(
      async (user) => {

        if (!user) return;

        const uid =
          user.uid;

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

        if (
          !docSnap.exists()
        ) return;

        const data =
          docSnap.data();

        this.cycleLength =
          Number(
            data[
              'cycleLength'
            ]
          );

        this.periodLength =
          Number(
            data[
              'periodLength'
            ]
          );

        this.lastPeriodDate =
          data[
            'lastPeriodDate'
          ];

        const startDate =
          new Date(
            this.lastPeriodDate
          );

        const today =
          new Date();

        // Cycle day
        const diffTime =
          today.getTime()
          -
          startDate
          .getTime();

        const daysPassed =
          Math.floor(
            diffTime /
            (
              1000 *
              60 *
              60 *
              24
            )
          );

        this.cycleDay =
          (
            daysPassed %
            this.cycleLength
          ) + 1;

        // Next period
        const nextDate =
          new Date(
            startDate
          );

        nextDate.setDate(
          startDate.getDate()
          +
          this.cycleLength
        );

        this.nextPeriod =
          nextDate
          .toDateString();

        // Fertile date
        const fertile =
          new Date(
            startDate
          );

        fertile.setDate(
          startDate.getDate()
          +
          (
            this.cycleLength
            - 14
          )
        );

        this.fertileDate =
          fertile
          .toDateString();
      }
    );
  }
}