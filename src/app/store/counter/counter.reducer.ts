import { createReducer, on, Action } from '@ngrx/store';
import { decrement, increment, reset } from './counter.action';

const initialCounterState = 0;

const _counterReducer = createReducer(
  initialCounterState,
  on(increment, state => state + 1),
  on(decrement, state => state - 1),
  on(reset, state => 0)
);

export function counterReducer(state: number | undefined, action: Action): number {
  return _counterReducer(state, action);
}
