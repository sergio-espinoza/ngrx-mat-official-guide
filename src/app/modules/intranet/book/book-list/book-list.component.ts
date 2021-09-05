import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AppState } from 'src/app/store/app.state';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  @Input()
  public books: AppState['books'] | null = [];
  @Output()
  public addChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

}
