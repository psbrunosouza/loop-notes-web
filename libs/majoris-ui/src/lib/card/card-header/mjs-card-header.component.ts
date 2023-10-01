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

  get positionClass(): string {
    return `justify-${this.position}`;
  }
}
