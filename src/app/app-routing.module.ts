import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';

const appRoutes: Routes = [
  {
    path: 'extranet',
    loadChildren: () =>
      import('./modules/extranet/extranet.module')
      .then(m => m.ExtranetModule)
  },
  {
    path: 'intranet',
    loadChildren: () =>
      import('./modules/intranet/intranet.module')
      .then(m => m.IntranetModule)
  },
  {
    path: '', redirectTo: 'extranet', pathMatch: 'full'
  },
  {
    path: '**', component: NotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
