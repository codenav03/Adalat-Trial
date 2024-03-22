import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),provideHttpClient(), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"adalat-trial-e037b","appId":"1:400114161607:web:449bdcfe730263018d2be2","storageBucket":"adalat-trial-e037b.appspot.com","apiKey":"AIzaSyC_-i6qhXVuvZKrBZgrHqPsgqOyZEAeLJU","authDomain":"adalat-trial-e037b.firebaseapp.com","messagingSenderId":"400114161607"}))), importProvidersFrom(provideAuth(() => getAuth())), importProvidersFrom(provideFirestore(() => getFirestore())), importProvidersFrom(provideStorage(() => getStorage()))]
};
