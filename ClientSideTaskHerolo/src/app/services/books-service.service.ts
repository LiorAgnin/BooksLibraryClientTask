import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { Books } from '../models/books';
import 'rxjs/add/operator/map';

@Injectable()
export class BooksServiceService {
  private url: string;
  private urlForPostAndPut: string;
  header = new HttpHeaders();
  constructor(private http: HttpClient) {
    this.url = 'https://api.myjson.com/bins/1b612f/';
    this.urlForPostAndPut = 'https://api.myjson.com/bins/';
    this.header.append('Content-Type', 'application/json');
  }
  getBooks() {
    return this.http.get<Books[]>(this.url);
  }
  Post(body: any) {
    return this.http.post(this.urlForPostAndPut, body, { headers: this.header })
  }
  Put(book: any) {
    return this.http.put(this.urlForPostAndPut + book.Id, book, { headers: this.header })
  }
  Delete(bookId: number) {
    let url = this.url + bookId;
    return this.http.delete(url, { headers: this.header })
  }
}
