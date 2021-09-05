import { NgModule } from '@angular/core';

import { CounterRoutingModule } from './counter-routing.module';
import { CounterComponent } from './counter.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/shared/material.module';


@NgModule({
  declarations: [
    CounterComponent
  ],
  imports: [
    SharedModule,
    MaterialModule,
    CounterRoutingModule
  ]
})
export class CounterModule { }
