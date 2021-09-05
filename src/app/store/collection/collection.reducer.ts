import { createReducer, on } from '@ngrx/store';
import { removeBook, addBook } from '../book';

export const initialCollectionState: ReadonlyArray<string> = [];

export const collectionReducer = createReducer(
  initialCollectionState,
  on(removeBook, (state, { bookId }) => state.filter(id => id !== bookId)),
  on(addBook, (state, { bookId }) => {
    if (state.indexOf(bookId) > -1) {
      return state;
    }
    return [...state, bookId];
  })
);
