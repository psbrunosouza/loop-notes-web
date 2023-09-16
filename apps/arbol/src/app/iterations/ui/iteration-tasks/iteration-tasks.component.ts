import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Iteration } from '@arbol-org/resources';

@Component({
  selector: 'arbol-org-iteration-tasks',
  templateUrl: './iteration-tasks.component.html',
  styleUrls: ['./iteration-tasks.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IterationTasksComponent {
  @Input() iterations: Iteration[] | null = [];
}
