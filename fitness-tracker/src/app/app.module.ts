import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { TrainingComponent } from './training/training.component';
import { CurrentTraningComponent } from './training/current-traning/current-traning.component';
import { NewTraningComponent } from './training/new-traning/new-traning.component';
import { PastTraningsComponent } from './training/past-tranings/past-tranings.component';
import { WellcomeComponent } from './wellcome/wellcome.component';

@NgModule({
  declarations: [AppComponent, SignupComponent, LoginComponent, TrainingComponent, CurrentTraningComponent, NewTraningComponent, PastTraningsComponent, WellcomeComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, MaterialModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
