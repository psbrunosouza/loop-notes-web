import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IterationComponent } from './iteration.component';
import { Route, RouterModule } from '@angular/router';
import { IterationTasksModule } from './ui/iteration-tasks/iteration-tasks.module';
import { IIterationsService, InterationsService } from '@arbol-org/resources';

const routes: Route[] = [
  {
    path: '',
    component: IterationComponent,
  },
];

@NgModule({
  declarations: [IterationComponent],
  imports: [CommonModule, RouterModule.forChild(routes), IterationTasksModule],
  providers: [
    {
      provide: IIterationsService,
      useClass: InterationsService,
    },
  ],
})
export class IterationModule {}
