import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { IIterationsService, Iteration } from '@arbol-org/resources';
import { Observable } from 'rxjs';

@Component({
  selector: 'arbol-org-iteration',
  templateUrl: './iteration.component.html',
  styleUrls: ['./iteration.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IterationComponent implements OnInit {
  iterations: Iteration[] = [];

  iterations$: Observable<Iteration[]>;

  constructor(private iterationsService: IIterationsService) {}

  ngOnInit(): void {
    this.listIterations();
  }

  listIterations(): void {
    this.iterations$ = this.iterationsService.list();
  }
}
