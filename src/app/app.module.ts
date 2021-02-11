import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LessonOneComponent } from './lesson-one/lesson-one.component';
import { HotColdObsComponent } from './hot-cold-obs/hot-cold-obs.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { OperatorsComponent } from './operators/operators.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    LessonOneComponent,
    HotColdObsComponent,
    SubjectsComponent,
    OperatorsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
