import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ChampionDataService } from './app/champion-data.service';
import { AppComponent } from './app/app.component';

console.log('🚀 main.ts - Démarrage de l\'application');

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    importProvidersFrom(
      HttpClientInMemoryWebApiModule.forRoot(ChampionDataService, {
        dataEncapsulation: false,
        delay: 500,
        passThruUnknownUrl: true
      })
    )
  ]
}).catch(err => {
  console.error('💥 Erreur au démarrage:', err);
});