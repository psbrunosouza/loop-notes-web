import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IterationTasksComponent } from './iteration-tasks.component';
import { CardComponent, CheckboxComponent } from '@arbol-org/majoris-ui';

@NgModule({
  declarations: [IterationTasksComponent],
  exports: [IterationTasksComponent],
  imports: [CommonModule, CardComponent, CheckboxComponent],
})
export class IterationTasksModule {}
