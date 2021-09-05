import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { decrement, increment, reset } from 'src/app/store/counter';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  public count$: Observable<number>;

  constructor(private store: Store<{ count: number }>) {
    this.count$ = store.select('count');
  }

  public increment(): void {
    this.store.dispatch(increment());
  }
  public decrement(): void {
    this.store.dispatch(decrement());
  }
  public reset(): void {
    this.store.dispatch(reset());
  }

  ngOnInit(): void {}
}
