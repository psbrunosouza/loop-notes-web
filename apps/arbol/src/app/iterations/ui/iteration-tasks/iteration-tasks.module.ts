import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IterationTasksComponent } from './iteration-tasks.component';
import {
  MjsCardBodyComponent,
  MjsCardComponent,
  MjsCardFooterComponent,
  CheckboxComponent,
} from '@arbol-org/majoris-ui';
import { MjsCardHeaderComponent } from '@arbol-org/majoris-ui';

@NgModule({
  declarations: [IterationTasksComponent],
  exports: [IterationTasksComponent],
  imports: [
    CommonModule,
    MjsCardComponent,
    CheckboxComponent,
    MjsCardHeaderComponent,
    MjsCardFooterComponent,
    MjsCardBodyComponent,
  ],
})
export class IterationTasksModule {}
