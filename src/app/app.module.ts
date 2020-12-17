import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { AppComponent } from './app.component';
import { NoteWithDateComponent } from './note-with-date/note-with-date.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table'
import { HttpClientModule } from '@angular/common/http';
import { ListOfNotesComponent } from './list-of-notes/list-of-notes.component';

@NgModule({
  declarations: [
    AppComponent,
    NoteWithDateComponent,
    ListOfNotesComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    MatTableModule,
    AppRoutingModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatButtonModule,
    MatNativeDateModule,
    FormsModule, ReactiveFormsModule
  ],
  exports: [

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
