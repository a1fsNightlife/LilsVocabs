import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatCommonModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from "@angular/forms";
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { AppComponent } from './app.component';
import { ExaminationComponent } from './components/examination/examination.component';

@NgModule({
  declarations: [
    AppComponent,
    ExaminationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatRippleModule,
    MatCommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSlideToggleModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
