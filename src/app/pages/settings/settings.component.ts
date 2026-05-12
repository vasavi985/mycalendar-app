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
  Auth,
  signOut
} from '@angular/fire/auth';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl:
    './settings.component.html',
  styleUrls: [
    './settings.component.css'
  ]
})
export class SettingsComponent
implements OnInit {

  userEmail = '';

  constructor(
    private auth: Auth,
    private router: Router
  ) {}

  ngOnInit(): void {

    this.userEmail =
      this.auth.currentUser
      ?.email || '';
  }

  async logout() {

    await signOut(
      this.auth
    );

    this.router.navigate([
      '/'
    ]);
  }
}