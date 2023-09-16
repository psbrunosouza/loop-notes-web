import { Default } from './default';
import { Task } from './task';
import { Observable } from 'rxjs';

export interface Iteration extends Default {
  isLoop: boolean;
  tasks: Task[];
}

export abstract class IIterationsService {
  abstract list(): Observable<Iteration[]>;
}
