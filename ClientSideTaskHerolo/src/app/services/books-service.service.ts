import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Books } from '../models/books';
import 'rxjs/add/operator/map';

@Injectable()
export class BooksServiceService {
  private url: string;
  constructor(private http: Http) {
    this.url = 'https://api.myjson.com/bins/al447/';
  }
  getBooks() {
    return this.http.get(this.url).map((res: Response) => res.json());
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
