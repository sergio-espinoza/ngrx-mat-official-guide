import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookRoutingModule } from './book-routing.module';
import { BookComponent } from './book.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookCollectionComponent } from './book-collection/book-collection.component';
import { MaterialModule } from 'src/app/shared/material.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    BookComponent,
    BookListComponent,
    BookCollectionComponent
  ],
  imports: [
    SharedModule,
    MaterialModule,
    BookRoutingModule
  ]
})
export class BookModule { }
