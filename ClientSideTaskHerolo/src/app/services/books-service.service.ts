import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { Books } from '../models/books';
import 'rxjs/add/operator/map';

@Injectable()
export class BooksServiceService {
  private url: string;
  constructor(private http: HttpClient) {
    this.url = 'https://api.myjson.com/bins/cv8wn/';
  }
  getBooks() {
    return this.http.get<Books[]>(this.url);
  }
  Post(body: any) {
    return this.http.post(this.url, body).map((res: Response) => { return res.json() })
  }
  Put(book: any) {
    return this.http.put(this.url + book.Id, book)
  }
  Delete(bookId: number) {
    let url = this.url + bookId;
    return this.http.delete(url)
  }
}
