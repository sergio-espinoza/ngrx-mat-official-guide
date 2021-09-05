import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExtranetComponent } from './extranet.component';

const extranetRoutes: Routes = [
  { path: '', component: ExtranetComponent }
];

@NgModule({
  imports: [RouterModule.forChild(extranetRoutes)],
  exports: [RouterModule]
})
export class ExtranetRoutingModule { }
