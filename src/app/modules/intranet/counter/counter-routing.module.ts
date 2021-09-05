import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from './counter.component';

const counterRoutes: Routes = [
  { path: '', component: CounterComponent }
];

@NgModule({
  imports: [RouterModule.forChild(counterRoutes)],
  exports: [RouterModule]
})
export class CounterRoutingModule { }
