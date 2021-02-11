import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LessonOneComponent } from './rx-js/lesson-one/lesson-one.component';
import { HotColdObsComponent } from './rx-js/hot-cold-obs/hot-cold-obs.component';
import { SubjectsComponent } from './rx-js/subjects/subjects.component';
import { OperatorsComponent } from './rx-js/operators/operators.component';
import { RxJsRootComponent } from './rx-js/rx-js-root/rx-js-root.component';

@NgModule({
  declarations: [
    AppComponent,
    LessonOneComponent,
    HotColdObsComponent,
    SubjectsComponent,
    OperatorsComponent,
    RxJsRootComponent,
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
