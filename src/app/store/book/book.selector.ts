import { createSelector, createFeatureSelector } from "@ngrx/store";
import { AppState } from "../app.state";

export const selectBooks = createSelector(
  (state: AppState) => state.books,
  books => books
);

export const selectCollectionState = createFeatureSelector<
  AppState, AppState['collection']
>('collection');

export const selectedBookCollection = createSelector(
  selectBooks,
  selectCollectionState,
  (books, collection) =>
    collection.map(id => books.find(book => book.id === id)) || []
);
