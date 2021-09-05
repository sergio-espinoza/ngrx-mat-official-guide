import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AppState, TBookStateFallback } from 'src/app/store/app.state';

@Component({
  selector: 'app-book-collection',
  templateUrl: './book-collection.component.html',
  styleUrls: ['./book-collection.component.scss']
})
export class BookCollectionComponent implements OnInit {
  @Input()
  public booksCollection: TBookStateFallback = [];
  @Output()
  public removeChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void { }
}
