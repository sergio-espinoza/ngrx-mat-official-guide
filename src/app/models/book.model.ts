export interface IBook {
  readonly id: string;
  readonly volumeInfo: {
    readonly title: string;
    authors: ReadonlyArray<string>;
    imageLinks: {
      smallThumbnail?: string;
      thumbnail?: string;
    };
  };
}
