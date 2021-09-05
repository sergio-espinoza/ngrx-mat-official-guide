import { NgModule } from '@angular/core';

import { ExtranetRoutingModule } from './extranet-routing.module';
import { ExtranetComponent } from './extranet.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/shared/material.module';


@NgModule({
  declarations: [
    ExtranetComponent
  ],
  imports: [
    SharedModule,
    MaterialModule,
    ExtranetRoutingModule
  ]
})
export class ExtranetModule { }
