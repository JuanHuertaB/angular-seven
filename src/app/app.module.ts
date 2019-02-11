import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AssignmentsComponent } from './assignments/assignments.component';
import {DIRECTIVES} from './shared/directives';
import {MAT_COMPONENTS} from './shared/ui';
import {FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AssignmentDetailComponent } from './assignments/assignment-detail/assignment-detail.component';
import { AddAsignmentComponent } from './assignments/add-asignment/add-asignment.component';
import {SERVICES} from './shared/services';

@NgModule({
  declarations: [
    DIRECTIVES,
    AppComponent,
    AssignmentsComponent,
    AssignmentDetailComponent,
    AddAsignmentComponent,
  ],
  imports: [
    MAT_COMPONENTS,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [SERVICES],
  bootstrap: [AppComponent]
})
export class AppModule { }
