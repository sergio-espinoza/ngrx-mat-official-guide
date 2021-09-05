import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  exports: [
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
  ],
})
export class SharedModule { }
