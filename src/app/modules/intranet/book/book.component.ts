import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { GoogleBookService } from 'src/app/core/http';
import { AppState } from 'src/app/store/app.state';
import { addBook, removeBook, retrievedBookList, selectBooks, selectedBookCollection } from 'src/app/store/book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  public books$ = this.store.pipe(select(selectBooks));
  public booksCollection$ = this.store.pipe(select(selectedBookCollection));

  constructor(
    private readonly googleBookSvc: GoogleBookService,
    private readonly store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.googleBookSvc
      .getBooks()
      .subscribe(books => this.store.dispatch(retrievedBookList({ books })));
  }

  public onAdd(bookId: string): void {
    this.store.dispatch(addBook({ bookId }));
  }
  public onRemove(bookId: string): void {
    this.store.dispatch(removeBook({ bookId }));
  }
}
