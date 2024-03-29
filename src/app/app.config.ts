import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule} from '@angular/fire/compat/database';
import { firebaseConfig } from './core/constants/constants';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),provideHttpClient(), importProvidersFrom([AngularFireModule.initializeApp(firebaseConfig),AngularFireAuthModule,AngularFireDatabaseModule,AngularFirestoreModule],provideFirebaseApp(() => initializeApp({apiKey: "AIzaSyC_-i6qhXVuvZKrBZgrHqPsgqOyZEAeLJU",
  authDomain: "adalat-trial-e037b.firebaseapp.com",
  databaseURL: "https://adalat-trial-e037b-default-rtdb.firebaseio.com",
  projectId: "adalat-trial-e037b",
  storageBucket: "adalat-trial-e037b.appspot.com",
  messagingSenderId: "400114161607",
  appId: "1:400114161607:web:449bdcfe730263018d2be2"}))), importProvidersFrom(provideAuth(() => getAuth())), importProvidersFrom(provideFirestore(() => getFirestore())), importProvidersFrom(provideStorage(() => getStorage()))]
};
