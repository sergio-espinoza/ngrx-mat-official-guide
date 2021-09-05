import { IBook } from '../models';

export interface AppState {
  books: ReadonlyArray<IBook>;
  collection: ReadonlyArray<string>;
  readonly counter: number;
}

export type TBookStateFallback = (IBook | undefined)[] | null;
