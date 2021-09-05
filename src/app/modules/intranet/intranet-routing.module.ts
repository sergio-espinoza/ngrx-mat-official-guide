import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntranetComponent } from './intranet.component';

const intranetRoutes: Routes = [
  {
    path: '',
    component: IntranetComponent,
    children: [
      {
        path: 'counter',
        loadChildren: () =>
          import('./counter/counter.module').then(m => m.CounterModule)
      },
      {
        path: 'book',
        loadChildren: () => import('./book/book.module').then(m => m.BookModule)
      },
      {
        path: '',
        redirectTo: 'counter',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(intranetRoutes)],
  exports: [RouterModule]
})
export class IntranetRoutingModule { }
