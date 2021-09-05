import { NgModule } from '@angular/core';
import { FallbackPipe, JsonParsePipe } from './pipes';

const COMPONENTS: any[] = [];
const DIRECTIVES: any[] = [];
const PIPES = [
  JsonParsePipe,
  FallbackPipe
];

@NgModule({
  imports: [],
  exports: [
    ...COMPONENTS, ...DIRECTIVES, ...PIPES
  ],
  declarations: [
    ...COMPONENTS, ...DIRECTIVES, ...PIPES
  ],
})
export class WidgetsModule { }