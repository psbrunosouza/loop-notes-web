import { Default } from './default';

export interface Task extends Default {
  name: string;
  description: string;
  isFavorite: boolean;
  iterationId: number;
  statusId: number;
  reviewVersion: number;
  nextIteration: Date;
  scoreId: number;
}
