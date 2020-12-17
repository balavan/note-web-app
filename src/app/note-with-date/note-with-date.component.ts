import { Component, OnDestroy, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { NoteWithDateService } from '../note-with-date.service';

@Component({
  selector: 'app-note-with-date',
  templateUrl: './note-with-date.component.html',
  styleUrls: ['./note-with-date.component.css']
})
export class NoteWithDateComponent implements OnInit, OnDestroy {
  saveNoteSubs: Subscription | undefined;
  isEditMode = false;
  noteDateForm = this.fb.group({
    _id: [''],
    date: ['', Validators.required],
    note: ['', Validators.required],
    header: ['', Validators.required],
  });
  constructor(
    private fb: FormBuilder,
    private noteWithDateService: NoteWithDateService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      if (params.noteId) {
        this.getListOfNotes(params.noteId)
      }
    });

  }
  getListOfNotes(mongoId: object) {
    this.noteWithDateService.getSingleNote(mongoId).subscribe((res) => {
      if (res) {
        this.noteDateForm.setValue(res.body.data)
        this.isEditMode = true;
      }

    });
  }

  onSubmit() {
    if (!this.noteDateForm.valid) {
      alert("Please Fill The Details")
      return
    }
    this.noteWithDateService.saveNoteData(this.noteDateForm.value).subscribe(res => {
      if (res) {
        this.router.navigate(['/']);
      }
    });
  }
  updateNote() {
    if (!this.noteDateForm.valid) {
      alert("Please Fill The Details")
      return
    }
    this.noteWithDateService.updateNoteData(this.noteDateForm.value).subscribe(res => {
      if (res) {
        this.router.navigate(['/']);
      }
    });
  }
  ngOnDestroy() {
    if (this.saveNoteSubs) {
      this.saveNoteSubs.unsubscribe();
    }
  }
}
