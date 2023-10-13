import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IterationTasksComponent } from './iteration-tasks.component';
import {
  CheckboxComponent,
  MjsCardBodyComponent,
  MjsCardComponent,
  MjsCardFooterComponent,
  MjsCardHeaderComponent,
  RippleDirective,
} from '@arbol-org/majoris-ui';
import { ButtonComponent } from '../../../../../../../libs/majoris-ui/src/lib/components/button/button.component';

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
    RippleDirective,
    ButtonComponent,
  ],
})
export class IterationTasksModule {}
