import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { NoteWithDateService } from '../note-with-date.service';

@Component({
  selector: 'app-list-of-notes',
  templateUrl: './list-of-notes.component.html',
  styleUrls: ['./list-of-notes.component.css']
})
export class ListOfNotesComponent implements OnInit {
  displayData;
  constructor(
    private noteWithDateService: NoteWithDateService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.getListOfNotes()
  }
  getListOfNotes() {
    this.displayData = []
    this.noteWithDateService.getList().subscribe((res) => {
      this.displayData = res.body.data;
    });
  }

  routingToNxtCmp(noteId: any) {
    this.router.navigate(['/createUpdateNote'], { queryParams: { noteId } });
  }
  addNote() {
    this.router.navigate(['/createUpdateNote']);
  }
}
