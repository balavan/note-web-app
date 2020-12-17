import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NoteWithDateService {
  // options: {
  //   headers?: HttpHeaders | { [header: string]: string | string[] },
  //   observe?: 'body' | 'events' | 'response',
  //   params?: HttpParams | { [param: string]: string | string[] },
  //   reportProgress?: boolean,
  //   responseType?: 'arraybuffer' | 'blob' | 'json' | 'text',
  //   withCredentials?: boolean,
  // }
  STORE_NOTE_AND_DATE = "http://localhost:5022/api/note/saveNote"
  GET_LIST_OF_DATA = "http://localhost:5022/api/note/getList"
  GET_SINGLE_DATA = "http://localhost:5022/api/note/getSingleNote/"
  UPDATE_NOTE = "http://localhost:5022/api/note/updateNote"
  constructor(private http: HttpClient) { }

  saveNoteData(payload: object) {
    return this.http.post(this.STORE_NOTE_AND_DATE, payload)
  }
  updateNoteData(payload: object) {
    return this.http.post(this.UPDATE_NOTE, payload)
  }
  getList() {
    return this.http.get(this.GET_LIST_OF_DATA, { observe: 'response' })
  }
  getSingleNote(payload: object) {
    return this.http.get(this.GET_SINGLE_DATA + payload, { observe: 'response' })
  }

}
