import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListOfNotesComponent } from './list-of-notes/list-of-notes.component';
import { NoteWithDateComponent } from './note-with-date/note-with-date.component';

const routes: Routes = [{ path: 'createUpdateNote', component: NoteWithDateComponent }, { path: '', component: ListOfNotesComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
