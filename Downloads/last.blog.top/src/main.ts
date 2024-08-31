import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component'; // Import AppComponent
import { AppModule } from './app/app.module'; // Import AppModule
import { importProvidersFrom } from '@angular/core'; // Import importProvidersFrom

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(AppModule) // Provide module imports
  ]
})
.catch(err => console.error(err));
