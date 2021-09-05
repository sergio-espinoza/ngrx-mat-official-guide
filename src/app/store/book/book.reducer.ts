import { createReducer, on } from '@ngrx/store';
import { IBook } from '../../models';
import { retrievedBookList } from './book.action';

export const initialBooksState: ReadonlyArray<IBook> = [];

export const booksReducer = createReducer(
  initialBooksState,
  on(retrievedBookList, (state, { books }) => [...books])
);
