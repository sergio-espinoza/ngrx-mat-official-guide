import { NgModule } from '@angular/core';

import { IntranetRoutingModule } from './intranet-routing.module';
import { IntranetComponent } from './intranet.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/shared/material.module';


@NgModule({
  declarations: [
    IntranetComponent
  ],
  imports: [
    SharedModule,
    MaterialModule,
    IntranetRoutingModule
  ]
})
export class IntranetModule { }
