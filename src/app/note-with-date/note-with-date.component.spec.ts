import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteWithDateComponent } from './note-with-date.component';

describe('NoteWithDateComponent', () => {
  let component: NoteWithDateComponent;
  let fixture: ComponentFixture<NoteWithDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoteWithDateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteWithDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
