import {
  ChangeDetectionStrategy,
  Component,
  Input,
  numberAttribute,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'mjs-card-body',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mjs-card-body.component.html',
  styleUrls: ['./mjs-card-body.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MjsCardBodyComponent {
  @Input() class = '';

  @Input({ transform: numberAttribute }) maxHeight: number;
}
