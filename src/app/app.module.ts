import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import {
  provideFirebaseApp,
  initializeApp
} from '@angular/fire/app';

import {
  provideAuth,
  getAuth
} from '@angular/fire/auth';

import { AppComponent }
from './app.component';

import { routes }
from './app-routing.module';

import { environment }
from '../environments/environment';
import { SetupCycleComponent } from './pages/setup-cycle/setup-cycle.component';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AppComponent
  ],

  providers: [
    provideFirebaseApp(() =>
      initializeApp(
        environment.firebase
      )
    ),

    provideAuth(() =>
      getAuth()
    )
  ],

  bootstrap: [AppComponent],

  declarations: [
     SetupCycleComponent

  ]
})
export class AppModule {}