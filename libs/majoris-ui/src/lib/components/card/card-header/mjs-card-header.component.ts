import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'mjs-card-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mjs-card-header.component.html',
  styleUrls: ['./mjs-card-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MjsCardHeaderComponent {
  @Input() position: 'start' | 'end' | 'center' | 'between' = 'start';

  @Input() class = '';

  get positionClass(): string {
    return `position-class-${this.position}`;
  }
}
